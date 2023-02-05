import 'dotenv/config';
import tmi from 'tmi.js';

import { sayHello, ia } from './modules/index.js';

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    reconnect: true,
  },
  channels: [`${process.env.TWITCH_CHANNEL}`],
  identity: {
    username: process.env.TWITCH_BOT_USERNAME,
    password: process.env.TWITCH_OAUTH_TOKEN,
  },
});

client.connect();

client.on('message', (channel, tags, message, self) => {
  if (self) return;

  sayHello(client, channel, tags);
  ia(client, channel, tags, message);

  const args = message.slice(1).split(' ');
  const command = args.shift().toLowerCase();

  if (message.toLowerCase() === '!hello') {
    // "@alca, heya!"
    client.say(channel, `@${tags.username}, heya!`);
  }
});
