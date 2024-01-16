const axios = require("axios");

exports.handler = async (event) => {
  // Emit data using webhook
  const webhookURL = "your_webhook_url";
  const results = event.body;
  axios
    .post(webhookURL, { data: results })
    .then((response) => {
      console.log("Webhook response:", response.data);
    })
    .catch((error) => {
      console.error("Error calling webhook:", error);
    });

  return "Function executed successfully";
};
