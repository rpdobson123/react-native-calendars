import React from 'react';
import { ViewStyle } from 'react-native';

interface Props {
  /** Initially visible month. Default = Date() */
  current?: any;
  /** Provide custom day rendering component */
  dayComponent?: any;
  /** Disable days by default. Default = false */
  disabledByDefault?: boolean;
  /** Disables changing month when click on days of other months (when hideExtraDays is false). Default = false */
  disableMonthChange?: boolean;
  /** Display loading indicador. Default = false */
  displayLoadingIndicator?: boolean;
  /** If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday. */
  firstDay?: number;
  /** Style passed to the header */
  headerStyle?: object | number | any[];
  /** Hide month navigation arrows. Default = false */
  hideArrows?: boolean;
  /**  Hide day names. Default = false */
  hideDayNames?: boolean;
  /** Do not show days of other months in month page. Default = false */
  hideExtraDays?: boolean;
  /** Collection of dates that have to be marked. Default = {} */
  markedDates?: object;
  /** Date marking style [simple/period/multi-dot/multi-period]. Default = 'simple' */
  markingType?: string;
  /** Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined */
  maxDate?: any;
  /** Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined */
  minDate?: any;
  /** Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting */
  monthFormat?: string;
  /** Hide the month header, Default = false */
  shouldHideMonthHeader?: boolean;
  shouldRenderHeader?: boolean;
  /** Show week numbers. Default = false */
  showWeekNumbers?: boolean;
  /** Specify style for calendar container element. Default = {} */
  style?: ViewStyle;
  /** Specify theme properties to override specific styles for calendar parts. Default = {} */
  theme?: object;

  /** Handler which gets executed on day press. Default = undefined */
  onDayPress?(): void,
  /** Handler which gets executed on day long press. Default = undefined */
  onDayLongPress?(): void;
  /** Handler which gets executed when visible month changes in calendar. Default = undefined */
  onMonthChange?(): void;
  onVisibleMonthsChange?(): void;
  /** Handler which gets executed when press arrow icon left. It receive a callback can go back month */
  onPressArrowLeft?(): void;
  /** Handler which gets executed when press arrow icon left. It receive a callback can go next month */
  onPressArrowRight?(): void;
  /** Replace default arrows with custom ones (direction can be 'left' or 'right') */
  renderArrow?(): React.ReactElement;
}

declare class Calendar extends React.Component<Props> { }

export default Calendar;
export { Props };
