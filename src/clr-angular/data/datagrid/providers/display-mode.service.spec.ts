/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Observable} from "rxjs/Observable";

import {DatagridDisplayMode} from "../enums/display-mode.enum";
import {MockDatagridRenderOrganizer} from "../render/render-organizer.mock";
import {DisplayModeService} from "./display-mode.service";

interface UserContext {
    organizer: MockDatagridRenderOrganizer;
    displayService: DisplayModeService;
}

export default function(): void {
    describe("DisplayMode Service", () => {
        beforeEach(function(this: UserContext) {
            this.organizer = new MockDatagridRenderOrganizer();
            this.displayService = new DisplayModeService(this.organizer);
        });

        it("exposes an Observable for display mode view state", function() {
            const viewObservable = this.displayService.view;
            expect(viewObservable).toBeDefined();
            expect(viewObservable instanceof Observable).toBe(true);
        });

        it("properly updates the view mode when organizer resizes", function(this: UserContext) {
            // I need to mock the DisplayModeService
            let currentChange: DatagridDisplayMode;
            let displayChangeCount = 0;
            this.displayService.view.subscribe(viewChange => {
                displayChangeCount++;
                currentChange = viewChange;
            });
            expect(currentChange).toBeUndefined();
            this.organizer.resize();
            expect(currentChange).toBe(DatagridDisplayMode.DISPLAY);
            expect(displayChangeCount).toBe(2);
        });
    });
}