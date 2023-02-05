import { isFirstMessage } from '../../utils/index.js';

export default (client, channel, tags) => {
  if (isFirstMessage(tags)) {
    client.say(channel, `Hello @${tags.username}, bienvenu(e) !`);
  }
};
