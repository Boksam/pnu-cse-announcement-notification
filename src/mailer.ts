import nodemailer from "nodemailer";
import { Announcement } from "./fetcher";

const buildEmailHtml = (items: any[]) => {
  return `
    <ul>
      ${items
        .map(
          (item) => `
        <li>
          <a href="${item.link}"><strong>${item.title}</strong></a><br/>
          <span>작성일: ${item.pubDate}</span><br/>
          <span>작성자: ${item.author}</span><br/>
          <span>카테고리: ${
            item.categories && item.categories.length > 0
              ? `${item.categories.join(", ")}`
              : "미지정"
          } </span><br/>
        </li>
      `,
        )
        .join("")}
    </ul>
  `;
};

export const sendEmail = async (
  items: Announcement[],
  formattedDate: string,
) => {
  if (items.length === 0) {
    console.log("No new announcements to send.");
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: `[${formattedDate}] 새로운 컴공 공지사항 - 확인 안하면 졸업 못함!`,
    html: buildEmailHtml(items),
  });
};
