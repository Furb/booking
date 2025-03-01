import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const initialRoomBookings: Prisma.RoomBookingCreateInput[] = [
    {
      subject: "jimi hendrix",
      roomId: "small room",
      startTime: new Date(2025, 1, 3, 9, 0),
      endTime: new Date(2025, 1, 3, 10, 0),
    },
    {
      subject: "led zeppelin",
      roomId: "big room",
      startTime: new Date(2025, 1, 3, 14, 0),
      endTime: new Date(2025, 1, 3, 16, 0),
    },
    {
      subject: "the rolling stones",
      roomId: "cold room",
      startTime: new Date(2025, 1, 4, 10, 0),
      endTime: new Date(2025, 1, 4, 11, 30),
    },
    {
      subject: "queen",
      roomId: "small room",
      startTime: new Date(2025, 1, 4, 13, 0),
      endTime: new Date(2025, 1, 4, 14, 0),
    },
    {
      subject: "pink floyd",
      roomId: "big room",
      startTime: new Date(2025, 1, 4, 16, 0),
      endTime: new Date(2025, 1, 4, 19, 0),
    },
    {
      subject: "david bowie",
      roomId: "cold room",
      startTime: new Date(2025, 1, 5, 11, 0),
      endTime: new Date(2025, 1, 5, 13, 0),
    },
    {
      subject: "ac/dc",
      roomId: "small room",
      startTime: new Date(2025, 1, 5, 15, 30),
      endTime: new Date(2025, 1, 5, 18, 30),
    },
  ];
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
