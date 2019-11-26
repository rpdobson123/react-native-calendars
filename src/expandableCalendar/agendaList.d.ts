import { Component } from 'react';
import { SectionListProps, TextStyle, ViewStyle } from 'react-native';

type CalendarData = any;

interface Props extends SectionListProps<CalendarData> {
  dayFormat?: string;
  sectionStyle?: TextStyle;
  theme?: any;
  selectedSectionStyle?: TextStyle;
  selectedSectionContainerStyle?: ViewStyle;
}

declare class AgendaList extends Component<Props> {}

export default AgendaList;
