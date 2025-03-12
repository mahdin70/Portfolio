import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";
import { z } from "zod";

import dotenv from "dotenv";
dotenv.config();


const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);

      const info = await transporter.sendMail({
        from: `"Portfolio Contact" <${validatedData.email}>`,
        to: "mahdin.mukit248@gmail.com",
        subject: `Portfolio Contact: ${validatedData.subject}`,
        text: `Name: ${validatedData.name}\nEmail: ${validatedData.email}\n\n${validatedData.message}`,
        html: `
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message}</p>
        `,
      });

      console.log("Email Sent Successfully: %s", info.messageId);

      return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Validation error", errors: error.errors });
      }

      console.error("Email Not Sent!", error);
      return res.status(500).json({ message: "Failed to send message" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
