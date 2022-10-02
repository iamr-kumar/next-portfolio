// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mail from "@sendgrid/mail";
import axios from "axios";

mail.setApiKey(process.env.SENDGRID_API_KEY!);

type Data = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const body = req.body;

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

  // const queryRes = await axios.post(
  //   "https://www.google.com/recaptcha/api/siteverify",
  //   `secret=${process.env.RECAPTCHA_SECRET_KEY!}&response=${body.token}`
  // );
  // console.log(queryRes.data);

  // if (queryRes.data.score > 0.5) {
  await mail.send(data);
  res.status(200).json({ message: "Email Sent!" });
  // }
  // return res.status(500).json({ message: "Some error occurred" });
}
