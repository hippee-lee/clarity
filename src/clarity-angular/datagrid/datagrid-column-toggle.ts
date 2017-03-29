
import { Component, SkipSelf } from "@angular/core";
import { HideableColumnService } from "./providers/hideable-column.service";
import { HideableColumn } from "./hideable-column";

@Component({
    selector: "clr-dg-column-toggle",
    template: `
        <clr-icon (click)="toggleUI()" shape="view-columns"></clr-icon>
        <div *ngIf="showing" class="column-switch">
            <div class="switch-header">
                <h5>
                    Show Columns
                    <clr-icon 
                            (click)="toggleUI()" 
                            shape="close" 
                            class="pull-right"></clr-icon>
                </h5>
            </div>
            <ul *ngIf="showing" class="list-unstyled">
                <li *ngFor="let column of columns">
                    <clr-checkbox [clrChecked]="!column.hidden"
                                    (clrCheckedChange)="toggleColumn($event, column)">
                        <template [ngTemplateOutlet]="column.template"></template>
                    </clr-checkbox>
                </li>
                <li>
                    <button 
                        class="btn btn-link p6 text-uppercase" 
                        (click)="selectAll()">
                            <span *ngIf="!allSelected">Select</span> 
                            <span *ngIf="allSelected">Deselect</span> 
                            All
                    </button>
                </li>
            </ul>
            <div class="switch-footer">
                <button
                    (click)="toggleUI()"
                    class="btn btn-primary pull-right">
                     Ok
                </button>
            </div>
        </div>
    `,
    host: {
        "[class.column-switch-wrapper]": "true"
    }
})

export class DatagridColumnToggle {

    showing: boolean = false;
    columns: Array<HideableColumn> = [];
    allSelected: boolean = false;

    /**
     * @function constructor
     *
     *
     *@description
     * Init function for the DatagridColumnToggle.
     *
     * Question:
     * Is there anything wrong with subscribing to the service in the constructor?
     * If its put into AfterContentInit or AfterViewInit its to late to 'hear' the columns.
     * This feels brittle to me.
     *
     * @param hideableColumnService
     */
    constructor( @SkipSelf() public hideableColumnService: HideableColumnService) {
        // Must subscribe before the directive adds the columns in AfterViewInit but I don't like this, it doesn't feel 'right'
        hideableColumnService.columns.subscribe((column) => {
            this.columns.push(column);
            // Subscribe to each hiddenChange so the clr-checkbox(UI) can stay up to date.
            // column.hiddenChange.subscribe((value: boolean) => {
            //     console.log("Heard it: ", column, value);
            // });
        });
    }

    selectAll() {
        this.allSelected = !this.allSelected;
    }

    toggleColumn(event: boolean, column: HideableColumn) {
        column.hidden = !event;
    }

    toggleUI() {
        this.showing = !this.showing;
    }
}
