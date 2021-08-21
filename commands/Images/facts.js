const Discord = require('discord.js');

module.exports = {
  name: 'facts',
  permissions: ["SEND_MESSAGES"],
  cooldown: 3,
  description: 'Get a custom clyde message!',
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) {
      return message.reply({ content: '`Usage: (prefix)facts <msg>`', allowedMentions: { repliedUser: true } })
    }
    let factsMessage = args.slice(0).join(' ');
    if (factsMessage.length > 25) return message.reply({ content: '**You Are Not Allowed To Go Over 25 Characters!**', allowedMentions: { repliedUser: true }  });

    message.channel.send({ files: [{ attachment: `https://api.popcatdev.repl.co/facts?text=${factsMessage}`, name: 'xopbotfacts.jpg' }] });
  }
}