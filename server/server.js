  const express = require("express");
  const cors = require("cors");
  const nodemailer = require("nodemailer");

  const app = express();
  app.use(cors());
  app.use(express.json());

  app.post("/contact", (req, res) => {
      const { firstName, lastName, email, phone, message } = req.body;

      const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: 'aryansingh98875@gmail.com',
              pass: 'aupakgewrvoysrbn'
          },
          secure: false,
          tls: {
          rejectUnauthorized: false
          }
      });

      const mailOptions = {
          from: 'Hi there adak@gmail.com',
          to: 'adakdebasmita3@gmail.com',
          subject: 'Contact Form Submission - Portfolio',
          html: `<p>Name: ${firstName} ${lastName}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Message: ${message}</p>`
      };

      transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
              console.log(error);
              res.json({ code: 500, status: "Error", message: error.message });
          } else {
              console.log('Email sent: ' + info.response);
              res.json({ code: 200, status: "Message Sent" });
          }
      });
  });

  app.listen(5000, () => console.log("Server Running"));