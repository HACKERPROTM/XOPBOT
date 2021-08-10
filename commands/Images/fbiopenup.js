const errorChannel = process.env.errorChannel;
module.exports = {
    name: 'fbiopenup',
    aliases: ['fbi', 'fbi-open-up'],
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: 'Knock Knock FBI OPEN UP!',
    async execute(client, message, cmd, args, Discord) {
        try {
            const user = message.mentions.users.first()
            if(!args[0]) {
                return message.reply('**You Must Mention A User For The FBI To Get! 🤪**')
            }
            if (message.mentions.users.first().bot) {
                return message.reply('**You Can Not Send The FBI To Bot`s! They Will Escape 😢**')
            }
            const embed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setTitle(`RUN! The FBI Found You Thanks To ${message.author.username}`)
                .setImage('https://cdn.discordapp.com/attachments/824319314495537175/874580794503467018/ezgif.com-gif-maker_1.gif')
                .setFooter('You Are Now In Danger Get Out 😨')
            user.send(embed)
                .catch(() => message.channel.send("**The FBI Couldn`t Get To That User! 😭**"))
                .then(() => message.channel.send(`**The FBI Is Already At ${user.tag} House! 😉**`));
        } catch (error) {
            const errorlogs = client.channels.cache.get(errorChannel);
            message.channel.send("**Looks Like An Error Has Occured!**");
            errorlogs.send("Error On FBI Command\n Error:\n" + error)
        }
    }
}