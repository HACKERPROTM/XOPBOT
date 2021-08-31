const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: "m&m",
    aliases: ['mnm'],
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {

        const mention = message.mentions.members.first() || message.member;
        const avatar = mention.user.displayAvatarURL({ size: 2048, format: "png" });


        // const embed = new Discord.MessageEmbed()
        //     .setTimestamp()
        //     .setTitle('M&M')
        //     .setColor('#c30202')
        //     .setImage(`https://api.popcat.xyz/mnm?image=${avatar}`)

        // message.lineReplyNoMention(embed)

        message.lineReplyNoMention({ files: [{ attachment: `https://api.popcat.xyz/mnm?image=${avatar}`, name: "xopbotm&m.png" }] });
    }
}