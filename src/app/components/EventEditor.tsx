"use client";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { createRoomBooking } from "../../../actions/actions";

const EventEditor = (props: any) => {
  return (
    <form className='e-custom-event-editor' action={createRoomBooking}>
      <div>
        <label className='e-textlabel'>Who is booking</label>
        <input type='text' name='Subject' className='e-field e-input' />
      </div>

      <div>
        <label className='e-textlabel'>Choose Room</label>
        <DropDownListComponent
          name='RoomId'
          id='RoomId'
          className='e-field'
          dataSource={["Small room", "Big room", "Cold room"]}
        />
      </div>

      <div>
        <label className='e-textlabel'>Begin</label>
        <DateTimePickerComponent
          name='StartTime'
          id='StartTime'
          format='dd/MM/yy HH:mm'
          data-name='StartTime'
          value={new Date()}
          className='e-field'
        />
      </div>

      <div>
        <label className='e-textlabel'>End</label>
        <DateTimePickerComponent
          name='EndTime'
          id='EndTime'
          format='dd/MM/yy HH:mm'
          data-name='EndTime'
          value={new Date()}
          className='e-field'
        />
      </div>
    </form>
  );
};

export default EventEditor;
