"use client";
import {
  Week,
  Month,
  Agenda,
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  EventSettingsModel,
  Inject,
  Resize,
  DragAndDrop,
  Day,
  PopupOpenEventArgs,
} from "@syncfusion/ej2-react-schedule";
import { L10n } from "@syncfusion/ej2-base";

import { DataManager, UrlAdaptor, WebApiAdaptor } from "@syncfusion/ej2-data";
import BookingTemplate from "./BookingTemplate";
import { useRef } from "react";

L10n.load({
  "en-US": {
    schedule: {
      newEvent: "Meeting Rooms",
    },
  },
});

const dataManager = new DataManager({
  url: "actions/actions",
  crudUrl: "actions/actions",
  adaptor: new WebApiAdaptor(),
});

const Scheduler = () => {
  const eventSettings: EventSettingsModel = {
    dataSource: dataManager,
  };

  const scheduleRef = useRef<ScheduleComponent>(null);
  const closeEditor = () => {
    if (scheduleRef.current) {
      scheduleRef.current.closeEditor();
    }
  };

  return (
    <main>
      <ScheduleComponent
        ref={scheduleRef}
        width="100%"
        height="100svh"
        startHour="07:00"
        workHours={{ start: "07:00", end: "18:00", highlight: true }}
        currentView="Week"
        timeFormat="HH:mm"
        selectedDate={new Date()}
        eventSettings={eventSettings}
        firstDayOfWeek={1}
        editorTemplate={(props: any) => (
          <BookingTemplate {...props} closeEditor={closeEditor} />
        )}
        showQuickInfo={false}
      >
        <ViewsDirective>
          <ViewDirective option="Day" />
          <ViewDirective option="Week" dateFormat="dd-MMM-yyyy" />
          <ViewDirective option="Month" showWeekNumber={true} />
        </ViewsDirective>

        <Inject services={[Day, Week, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </main>
  );
};
export default Scheduler;
