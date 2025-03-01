"use client";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { createRoomBooking } from "../../../actions/actions";

const EventEditor = (props: any) => {
  return (
    <form className="e-custom-event-editor" action={createRoomBooking}>
      <div>
        <label className="e-textlabel">Reserved for...</label>
        <input
          type="text"
          name="subject"
          data-name="Subject"
          className="e-field e-input"
          placeholder="Reserved for..."
        />
      </div>

      <div>
        <label className="e-textlabel">Choose Room</label>
        <DropDownListComponent
          name="roomId"
          data-name="RoomId"
          id="RoomId"
          className="e-field"
          dataSource={["Small room", "Big room", "Cold room"]}
        />
      </div>

      <div>
        <label className="e-textlabel">Begin</label>
        <DateTimePickerComponent
          id="StartTime"
          name="startTime"
          format="dd/MM/yy HH:mm"
          data-name="StartTime"
          value={props.startTime || props.StartTime}
          className="e-field"
        />
      </div>

      <div>
        <label className="e-textlabel">End</label>
        <DateTimePickerComponent
          id="EndTime"
          name="endTime"
          format="dd/MM/yy HH:mm"
          data-name="EndTime"
          value={props.endTime || props.EndTime}
          className="e-field"
        />
      </div>
    </form>
  );
};

export default EventEditor;
