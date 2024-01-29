import emailjs from "emailjs-com";

const data = {
  name: "Meith",
  amount: "1000",
  email: "meithnav@gmail.com",
  campaignId: "123",
  comment: "nice work",
};

export const sendMail = (payload) => {
    console.log(payload);
  emailjs
    .send("service_wmkpgpj", "template_xmr9x38",payload, "1NEYL-3F8sT0wuxdI")
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED! ", err);
      }
    );
};
