"use client";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { createRoomBooking } from "../../../actions/actions";

const BookingTemplate = ({ closeEditor, ...props }: any) => {
  const handleSubmit = async (formData: FormData) => {
    await createRoomBooking(formData);
    closeEditor(); // Close the Syncfusion modal after submitting
  };

  return (
    <form className="e-custom-event-editor" action={handleSubmit}>
      <div>
        <input
          type="text"
          name="Subject"
          className="e-field e-input"
          placeholder="Reserve for..."
        />
      </div>
      <div>
        <DropDownListComponent
          id="RoomId"
          className="e-field"
          dataSource={["Small room", "Big room", "Cold room"]}
          placeholder="Choose Room"
          data-name="RoomId"
          value={props.RoomId || null}
        ></DropDownListComponent>
      </div>

      <div className="start">
        <label className="e-textlabel">Begin</label>
        <DateTimePickerComponent
          className="e-field"
          id="StartTime"
          data-name="StartTime"
          format="dd/MM/yy HH:mm"
          value={new Date(props.startTime || props.StartTime)}
        ></DateTimePickerComponent>
      </div>

      <div className="end">
        <label className="e-textlabel">End</label>
        <DateTimePickerComponent
          className="e-field"
          id="EndTime"
          data-name="End"
          format="dd/MM/yy HH:mm"
          value={new Date(props.endTime || props.EndTime)}
        ></DateTimePickerComponent>
      </div>
      <button className="e-control e-btn e-primary" type="submit">
        Save
      </button>
    </form>
  );
};

export default BookingTemplate;
