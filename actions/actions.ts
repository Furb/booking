"use server";

import prisma from "@/lib/db";
import { parse } from "date-fns";
import { revalidatePath } from "next/cache";

export async function createRoomBooking(formData: FormData) {
  console.log("Received FormData:");
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  // Extract values
  const subject = formData.get("Subject") as string;
  const roomId = formData.get("RoomId") as string;
  const startTimeString = formData.get("StartTime") as string;
  const endTimeString = formData.get("EndTime") as string;

  // Convert string dates to actual Date objects
  const startTime = parse(startTimeString, "dd/MM/yy HH:mm", new Date());
  const endTime = parse(endTimeString, "dd/MM/yy HH:mm", new Date());

  if (isNaN(startTime.getTime()) || isNaN(endTime.getTime())) {
    throw new Error("Invalid date format received from form");
  }

  await prisma.roomBooking.create({
    data: {
      subject,
      roomId,
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
    },
  });
  revalidatePath("/roomBooking");
}
