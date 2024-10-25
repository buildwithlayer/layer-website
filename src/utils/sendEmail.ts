import emailjs from "emailjs-com";

export async function sendEmail(subject: string, message: string) {
  const serviceID = "service_gl5lv8a";
  const templateID = "template_xw7ygbi";
  const userID = "SmgoytTTUrkJAzJBF";

  emailjs.init(userID);

  const templateParams = {
    subject: subject,
    content: message,
  };

  try {
    const response = await emailjs.send(
      serviceID,
      templateID,
      templateParams,
      userID
    );
    console.log("Email sent", response.status, response.text);
  } catch (error) {
    console.error("Failed to send email", error);
  }
}
