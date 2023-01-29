const tmi = require('tmi.js');
require('dotenv').config();

const client = new tmi.Client({
  connection: {
    reconnect: true,
  },
  channels: ['mlle_brightside'],
  identity: {
    username: `[Bot Username]`,
    password: `[Bot oAuth Token]`,
  },
});

client.connect();

client.on('message', async (channel, context, message) => {
  const isNotBot =
    context.username.toLowerCase() !==
    process.env.TWITCH_BOT_USERNAME.toLowerCase();

  if (isNotBot) {
    client.say(
      channel,
      `Responding to ${context.username} message: ${message}`
    );
  }
});
