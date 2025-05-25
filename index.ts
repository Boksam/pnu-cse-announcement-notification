import Express from "express";
import cron from "node-cron";
import dotenv from "dotenv";
import { fetchAnnouncements } from "./src/fetcher";
import { sendEmail } from "./src/mailer";
import {
  addAnnouncementTitle,
  isNewAnnouncement,
  seenTitles,
} from "./src/store";

const app = Express();
app.use(Express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

dotenv.config();

cron.schedule("0 8 * * *", async () => {
  console.log("Running a task every day at 8:00 AM");

  // Get locale date
  const date = new Date();
  const formattedDate = date.toISOString().split("T")[0];

  const announcements = await fetchAnnouncements();
  const newAnnouncements = announcements.filter((a) =>
    isNewAnnouncement(a.title),
  );

  await sendEmail(announcements, formattedDate);
  newAnnouncements.forEach((a) => addAnnouncementTitle(a.title));

  console.log("Email sent successfully");
  console.log("current seen titles:", seenTitles);
});

app.get("/", async (req, res) => {
  // Get locale date
  const date = new Date();
  const formattedDate = date.toISOString().split("T")[0];

  const announcements = await fetchAnnouncements();
  const newAnnouncements = announcements.filter((a) =>
    isNewAnnouncement(a.title),
  );

  await sendEmail(announcements, formattedDate);
  newAnnouncements.forEach((a) => addAnnouncementTitle(a.title));

  console.log("Email sent successfully");
  console.log("current seen titles:", seenTitles);
});
