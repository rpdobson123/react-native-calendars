import React from 'react';

import { Props as CalendarProps } from '../calendar';

declare interface Props extends CalendarProps  {
  /** Dynamic calendar height */
  calendarHeight?: number,
  /** Style for the List item (the calendar) */
  calendarStyle?: object | number | any[],
  /** Used when calendar scroll is horizontal, default is device width, pagination should be disabled */
  calendarWidth?: number,
  /** Max amount of months allowed to scroll to the future. Default = 50 */
  futureScrollRange?: number,
  /** Whether the scroll is horizontal */
  horizontal?: boolean,
  /** Enable or disable paging on scroll */
  pagingEnabled?: boolean,
  /** Max amount of months allowed to scroll to the past. Default = 50 */
  pastScrollRange?: number,
  /** Enable or disable scrolling of calendar list */
  scrollEnabled?: boolean,
  /** When true, the calendar list scrolls to top when the status bar is tapped. Default = true */
  scrollsToTop?: boolean,
  /** Enable or disable vertical scroll indicator. Default = false */
  showScrollIndicator?: boolean,
  /** Whether to use static header that will not scroll with the list (horizontal only) */
  staticHeader?: boolean
}

declare class CalendarList extends React.Component<Props> {}

export default CalendarList;
export { Props };