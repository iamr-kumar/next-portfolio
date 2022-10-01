// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY!);

type Data = {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\r
    Message: ${body.message}
  `;

  const data = {
    to: "devritikcontact@gmail.com",
    from: "contact@devritik.com",
    subject: "New Contact Message",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail.send(data);

  console.log(body);
  res.status(200).json({ message: "Email Sent!" });
}
