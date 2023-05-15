const nodemailer = require("nodemailer");

const emailsender=async ()=>{

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'shakisk23@gmail.com',
          pass: 'shakisk23'
        }
    });

    let mailOptions = {
    from: 'shakisk23@gmail.com',
    to: 'shakihussain4@example.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });

}

export {emailsender}