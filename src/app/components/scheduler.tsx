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
} from "@syncfusion/ej2-react-schedule";
import { L10n } from "@syncfusion/ej2-base";
import { timelineResourceData } from "@/lib/datasource";
import EventEditor from "./EventEditor";
import { DataManager, UrlAdaptor } from "@syncfusion/ej2-data";

L10n.load({
  "en-US": {
    schedule: {
      newEvent: "Meeting Room Boooking",
    },
  },
});

const dataManager = new DataManager({
  url: "/",
  crudUrl: "/",
  adaptor: new UrlAdaptor(),
  crossDomain: true,
});

type RoomData = {
  RoomText: string;
  RoomId: number;
  RoomColor: string;
};

type RoomFields = {
  text: string;
  value: string;
};

const roomData: RoomData[] = [
  { RoomText: "Small Room", RoomId: 1, RoomColor: "#ffaa00" },
  { RoomText: "Big Room", RoomId: 2, RoomColor: "#f8a398" },
  { RoomText: "Cold Room", RoomId: 3, RoomColor: "#7499e1" },
];

const roomFields: RoomFields = {
  text: "RoomText",
  value: "RoomId",
};

const roomItems = (roomItem: RoomData) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span
        style={{
          width: "16px",
          height: "16px",
          backgroundColor: roomItem.RoomColor,
          display: "flex",
          marginRight: "16px",
          marginLeft: "16px",
          borderRadius: "50%",
        }}
      ></span>
      {roomItem.RoomText}
    </div>
  );
};

const fieldsData = {
  id: "Id",
  subject: {
    name: "Subject",
  },
  description: {
    title: "Description (optional)",
  },

  roomData: {
    title: "Room",
    dataSource: roomData,
    textField: "RoomText",
    valueField: "RoomId",
    colorField: "RoomColor",
  },
};

const Scheduler = () => {
  const eventSettings: EventSettingsModel = {
    dataSource: timelineResourceData,
  };

  return (
    <main>
      <ScheduleComponent
        width='100%'
        height='100svh'
        startHour='07:00'
        workHours={{ start: "07:00", end: "18:00", highlight: true }}
        currentView='Week'
        timeFormat='HH:mm'
        selectedDate={new Date()}
        eventSettings={eventSettings}
        firstDayOfWeek={1}
        editorTemplate={EventEditor}
        showQuickInfo={false}
      >
        <ViewsDirective>
          <ViewDirective option='Day' />
          <ViewDirective option='Week' dateFormat='dd-MMM-yyyy' />
          <ViewDirective option='Month' showWeekNumber={true} />
        </ViewsDirective>

        <Inject services={[Day, Week, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </main>
  );
};
export default Scheduler;
