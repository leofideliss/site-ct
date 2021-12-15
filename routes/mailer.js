const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.live.com",
    port: 587,
    secure: false,
    auth: {
        user: "leofipp@hotmail.com",
        pass: "59873120cpd"
    }
});

transporter.sendMail({
    from: "Leonardo Fidelis <leofipp@hotmail.com>",
    to: "leomatos25@gmail.com",
    subject: "Teste",
    text: "Teste",
    html: "Teste"
}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err);
})