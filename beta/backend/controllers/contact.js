require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.contactUs = (req, res) => {
  console.log(req.body)
    if (!req.body.formData.email || !req.body.formData.name || !req.body.formData.message) {
      return res.status(400).send({ msg: 'You need to send all entries' });
    }
    const msg = {
    to: process.env.ADMIN_EMAIL,
    from: req.body.formData.email + '<' + process.env.SENDGRID_EMAIL + '>' , // Change to your verified sender
    subject: `Query from ${req.body.formData.name} (${req.body.formData.email})`,
    text: 'Contact Message',
    html: ` <pre>${req.body.formData.message}</pre>`,
    }
    sgMail.send(msg)
    .then(info => {
        console.log(info)
        res.status(200).send({msg: "Mail Sent Succesfully"})
    })
    .catch(err => {
        res.status(400).send({msg: "Could not send mail"})
    });
  };

