import nodemailer from 'nodemailer';

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
  to: "bartosz.wilki2023@gmail.com",
  subject: "Test",
  text: "Test 123"
};

mailTransporter.sendMail(mailOptions, (err)=>{
    if(err){
        console.log(err.message)
    }

    else {
        console.log("Email Sent")
    }
})