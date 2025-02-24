import { DataAdaptor } from "@syncfusion/ej2-data";
import { createRoomBooking } from "@/lib/actions";

// Wrap the adaptor in a function
const ServerAdapter = () => {
  return class extends DataAdaptor {
    // Create a new booking
    async insert(dm, data) {
      const formData = new FormData();
      formData.append("Subject", data.Subject);
      formData.append("RoomId", data.RoomId);
      formData.append("StartTime", data.StartTime);
      formData.append("EndTime", data.EndTime);
      return await createRoomBooking(formData);
    }
  };
};

export default ServerAdapter;
