const errorChannel = process.env.errorChannel;
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'fbiopenup',
    aliases: ['fbi', 'fbi-open-up'],
    permissions: ["SEND_MESSAGES"],
    cooldown: 10,
    description: 'Knock Knock FBI OPEN UP!',
    async execute(client, message, cmd, args, Discord) {
        try {
            const user = message.mentions.users.first()
            if (!args[0]) {
                return message.lineReplyNoMention({ content: '**`(prefix)fbiopenup <@user>`**' }) //, allowedMentions: { repliedUser: true } })
            }
            if (message.mentions.users.first().bot) {
                return message.lineReplyNoMention({ content: '**You Can Not Send The FBI To Bot`s! They Will Escape 😢**' }) //, allowedMentions: { repliedUser: true } })
            }
            const embed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setTitle(`RUN! The FBI Found You Thanks To ${message.author.username}`)
                .setImage('https://cdn.discordapp.com/attachments/824319314495537175/874580794503467018/ezgif.com-gif-maker_1.gif')
                .setFooter('You Are Now In Danger Get Out 😨')
            user.send(embed)
                .catch(() => message.lineReplyNoMention({ content: "**The FBI Couldn`t Get To That User! 😭**" }))
                .then(() => message.lineReplyNoMention({ content: `**The FBI Is Already At ${user.tag} House! 😉**` }));
        } catch (err) {
            const errorlogs = client.channels.cache.get(errorChannel);
            message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
            errorlogs.send({ content: `**Error On FBI Command!\n\nError:\n\n ${err}**` })
        }
    }
}