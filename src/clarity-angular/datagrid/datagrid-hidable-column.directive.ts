import {
    Directive, TemplateRef, ViewContainerRef, SkipSelf, AfterViewInit, Host, Output, Input, ChangeDetectorRef
} from "@angular/core";
import {HideableColumnService} from "./providers/hideable-column.service";
import {HideableColumn} from "./hideable-column";
import {DatagridColumn} from "./datagrid-column";
import {Subject} from "rxjs/Subject";

@Directive({
    selector: "[clrDgHideableColumn]"
})

/**
 * @class DatagridHideableColumnDirective
 *
 * @description
 * A structural directive meant to be used inside a clr-dg-column component like
 *
 * <clr-dg-column>
 *       <ng-container *clrDgHideableColumn="true">
 *           User ID
 *       </ng-container>
 *   </clr-dg-column>
 *
 *   It creates an instance of HideableCOlumn to coordinate and share changes to hidden state as well as pass a
 *   ViewContainerRef to the HideableColumnService.
 */
export class DatagridHideableColumnDirective implements AfterViewInit {

    /**
     * @property _hidden
     *
     * @description
     * Private variable that acts as a flag to hide/show the DatagridColumn this directive belongs to.
     *
     * @type boolean
     */
    private _hidden: boolean;

    /**
     * @function clrDgHideableColumn
     *
     * @description
     * A set fn for the @Input with the same name as this structural directive. It allows the user to pre-configure the
     * column's hide/show state.
     *
     * @param value
     *
     */
    @Input()
    set clrDgHideableColumn(value: boolean) {
       this._hidden = value;
    }

    /**
     * @property hidden (clrDgHiddenColumnState)
     *
     * @description
     * A Subject used to broadcast changes to the this._hidden property
     *
     * @type {Subject<boolean>}
     */
    @Output("clrDgHiddenColumnState")
    public hidden: Subject<boolean> = new Subject<boolean>();

    /**
     * @property columnId
     *
     * @description
     * A unique identifier passed into the directive with the @Host() decorator in the constructor arguments.
     * I have questions and concerns about this:
     * 1. It adds a tight coupling constraint between DatagridColumn and DatagridHidableColumnDirective
     * 2. Is there a better way to share the DatagridColumn.columnId with children components? Service?
     * 3. Is it stable and ok to use in a @Directive? Docs showe use on @Injectable class
     *    https://angular.io/docs/ts/latest/api/core/index/Host-decorator.html
     *
     *  @type {string}
     */
    public columnId: string;

    /**
     * @property column
     *
     * @description
     * An instance that is used to:
     * 1. pass the templateRef for this Column to the HideableColumnService
     * 2. maintain and broadcast the hidden state of the DatagridColumn
     */
    public column: HideableColumn;

    /**
     * @description
     *
     *
     * @param templateRef
     * @param viewContainerRef
     * @param hideableColumnService
     * @param dgColumn
     */
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef,
        @SkipSelf() public hideableColumnService: HideableColumnService,
        @Host() dgColumn: DatagridColumn, // idk about this one?!?!? rtfm/code again - before demo
        private _cdr: ChangeDetectorRef
    ) {
        this.columnId = dgColumn.columnId;
    }

    ngAfterViewInit() {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
        this.column = new HideableColumn(this.templateRef, this.columnId, this._hidden);
        this.hideableColumnService.updateHideableColumns( this.column );

        // listen for clicks on this HideableColumn
        this.column.hiddenChange.subscribe((change) => {
            this.updateColumnVisibility(change);
        });

    }

    updateColumnVisibility(change: boolean) {
        this._hidden = change;
        // will emit event up to DatagridColumn Host.
        this.hidden.next(change);
        this._cdr.detectChanges();
        console.log("HideableDirective updateColVisibility");
    }
}
