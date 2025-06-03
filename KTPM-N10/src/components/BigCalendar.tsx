"use client";
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data';
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useState } from 'react';
// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);
  const handleOnChangeView = (selectedView: View) =>{
    setView(selectedView);
  }
  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views = {['work_week', 'day']}
      view={view}
      style={{height: "98%"}}
      onView={handleOnChangeView}
      min = {new Date(2025, 4, 0, 7, 0, 0)}
      max = {new Date(2025, 4, 0, 18, 0, 0)} 
    //   không bao gồm giá trị cuối ở max
    />
  );
};
export default BigCalendar;