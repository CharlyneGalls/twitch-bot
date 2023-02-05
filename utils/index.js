const isFirstMessage = (tags) => tags['first-msg'];

const isAskingSup = (message) => {
  //message = message.replace(/\s/g, '');
  message.toLowerCase();

  return (
    message.includes('ca va') ||
    message.includes('ça va') ||
    message.includes('sa va') ||
    message.includes('va bien') ||
    message.includes('cv') ||
    message.includes('quel bail') ||
    message.includes('bien ou quoi') ||
    message.includes('bien ou bien') ||
    message.includes('vas bien')
  );
};

const isTalkingToBot = (message) => {
  message = message.toLowerCase();

  return message.includes(process.env.TWITCH_BOT_USERNAME.toLowerCase());
};

export { isFirstMessage, isAskingSup, isTalkingToBot };
