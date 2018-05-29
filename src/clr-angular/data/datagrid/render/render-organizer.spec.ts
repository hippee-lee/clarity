/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {DatagridRenderStep} from "../interfaces/render-step.interface";

import {DatagridRenderOrganizer} from "./render-organizer";

/**
 * Having a little fun with Typescript just to see how it goes.
 */
interface UserContext {
    organizer: DatagridRenderOrganizer;
}

export default function(): void {
    describe("DatagridRenderOrganizer", function() {
        beforeEach(function(this: UserContext) {
            this.organizer = new DatagridRenderOrganizer();
        });

        it("doesn't clear widths on the first rendering", function(this: UserContext) {
            let clearedWidths = false;
            this.organizer.renderStep.subscribe(step => {
                if (step === DatagridRenderStep.CLEAR_WIDTHS) {
                    clearedWidths = true;
                }
            });
            this.organizer.resize();
            expect(clearedWidths).toBe(false);
            this.organizer.resize();
            expect(clearedWidths).toBe(true);
        });

        it("follows the correct rendering order", function(this: UserContext) {
            // Initial sizing to make sure clearWidths is included in the next one.
            this.organizer.resize();
            let step = 0;
            this.organizer.renderStep.subscribe(renderStep => {
                if (renderStep === DatagridRenderStep.CALCULATE_MODE_ON) {
                    expect(step++).toBe(0);
                } else if (renderStep === DatagridRenderStep.CLEAR_WIDTHS) {
                    expect(step++).toBe(1);
                } else if (renderStep === DatagridRenderStep.DETECT_STRICT_WIDTHS) {
                    expect(step++).toBe(2);
                } else if (renderStep === DatagridRenderStep.COMPUTE_COLUMN_WIDTHS) {
                    expect(step++).toBe(3);
                } else if (renderStep === DatagridRenderStep.ALIGN_COLUMNS) {
                    expect(step++).toBe(4);
                } else if (renderStep === DatagridRenderStep.CALCULATE_MODE_OFF) {
                    expect(step++).toBe(5);
                }
            });
            this.organizer.resize();
        });

        it("clears the widths when when resizing", function(this: UserContext) {
            this.organizer.widths = [{px: 1, strict: false}, {px: 2, strict: true}];
            this.organizer.resize();
            expect(this.organizer.widths).toEqual([]);
        });
    });
}
