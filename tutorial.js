require('dotenv').config()

const { WebClient } = require('@slack/web-api')

console.log(
  "🌹 Getting started with Node Slack SDK."
);

// Create a new instance of the WebClient class with the token read from your environment variable
const web = new WebClient(process.env.SLACK_TOKEN);
// The current date
const currentTime = new Date().toTimeString();

(async () => {

  try {
    // Use the `chat.postMessage` method to send a message from this app
    await web.chat.postMessage({
      channel: '#general',
      text: `The current time is ${currentTime}`,
    });
    console.log('Message posted!');
  } catch (error) {
    console.log(error);
  }

})();