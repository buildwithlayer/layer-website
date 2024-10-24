async function sendEmail(
  to: string,
  subject: string,
  text: string,
  html?: string
) {
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

  const msg = {
    to: to,
    from: "website@buildwithlayer.com",
    subject: subject,
    text: text,
    html: html || text,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error: Error) => {
      console.error(error);
    });
}
