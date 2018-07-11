/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export enum DatagridRenderStep {
    ALIGN_COLUMNS,
    CALCULATE_MODE_ON,
    CALCULATE_MODE_OFF,
    CLEAR_WIDTHS, // Note this is listened to by both cells and columns
    COMPUTE_COLUMN_WIDTHS,
    DETECT_STRICT_WIDTHS,
    DONE, // The last render step
    NO_LAYOUT_ON, // ?? Still needed ??
    NO_LAYOUT_OFF,
    TABLE_MODE_ON, // I don't think this will be needed either
    TABLE_MODE_OFF,
    UPDATE_ROW_WIDTH, // for resetting the horizontal scrollable width that keeps sticky cells visible in the datagrid
    UPDATE_SCROLL_BAR, // ?? Still needed ?? the scroll bar is outside the scrolling pane now, TODO: confirm it is needed
}