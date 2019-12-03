import React from 'react';
import { Props as CalendarListProps } from '../calendar-list';

declare interface Props extends CalendarListProps {
  allowShadow?: boolean;
  disablePan?: boolean;
  hideKnob?: boolean;
  initialPosition?: 'closed' | 'open';
  leftArrowImageSource?: object | number | Function;
  rightArrowImageSource?: object | number | Function;

  onBounceToPosition?(isOpen: boolean): void;
  setBounceToPosition?(bounceToPosition: (value: number) => void);
}

declare class ExpandableCalendar extends React.Component<Props> { }

export default ExpandableCalendar;
