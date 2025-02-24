"use server";

import prisma from "@/lib/db";

export async function createRoomBooking(formData: FormData) {
  await prisma.roomBooking.create({
    data: {
      subject: formData.get("Subject") as string,
      roomId: formData.get("RoomId") as string,
      startTime: new Date(formData.get("StartTime") as string),
      endTime: new Date(formData.get("EndTime") as string),
    },
  });
}
