const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465, 
  secure: true, 
  auth: {
    user: 'xanim.aya@mail.ru',
    pass: 'tX0QG8gVjUDevHpu8nJ1'
  },
  tls: {
    rejectUnauthorized: false 
  }
});

const SendMail = (mailOptions) => {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
};

module.exports = SendMail;
