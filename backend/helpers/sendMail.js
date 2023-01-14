import nodemailer from 'nodemailer';
import mailText from './mailText.js';

const sendMail = (email, name, totalPrice, address, order, id) => {
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tt8171080@gmail.com",
      pass: "tmjillfwgeophkzw"
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  let mailOptions = {
    from: "tt8171080@gmail.com",
    to: email,
    subject: "Order confirmation",
    html: mailText(name, order, totalPrice, address, id),
  };

  mailTransporter.sendMail(mailOptions, (err)=>{
    if(err){
      console.log(err.message)
    }
    else {
      console.log("Email Sent")
    }
  })
}

export default sendMail;
