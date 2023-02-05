import { isAskingSup, isTalkingToBot } from '../../utils/index.js';

export default (client, channel, tags, message) => {
  if (isAskingSup(message) && isTalkingToBot(message)) {
    client.say(channel, `ça va @${tags.username}, merci et toi ?`);
  }
};
