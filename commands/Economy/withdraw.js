const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
  name: "withdraw",
  cooldown: 10,
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  aliases: ["wd"],
  description: "withdraw coins from your bank",
  async execute(client, message, cmd, args, Discord) {
    const amount = args[0]; if (!args[0]) {
      const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)withdraw<xocoins>\`**`)
      return message.lineReplyNoMention({ embed: nopr })
    }
    try {
      if ((await client.bank(message.author.id)) < amount) {
        const noxoc = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Dont Have \`${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\`Xocoins To Withdraw!**`)
        return message.lineReplyNoMention({ embed: noxoc })
      }
      if (isNaN(args[0])) {
        const nonum = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\`Is Not A Number!**`)
        return message.lineReplyNoMention({ embed: nonum })
      }
      const embed = new Discord.MessageEmbed().setTimestamp().setTitle(`${message.author.username}`).setDescription(`**You Withdrew \`${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\`Xocoins Into Your Wallet!💸**`).setColor(`${color}`)
      message.lineReplyNoMention({ embed: embed });
      client.add(message.author.id, amount)
      client.bankrmv(message.author.id, amount)
    } catch (err) { console.log(err); }
  },
};