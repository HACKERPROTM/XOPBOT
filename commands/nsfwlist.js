module.exports = {
    name: 'nsfwlist',
    description: "nsfw",
    permissions: ["SEND_MESSAGES"],
    execute(client, message, cmd, args, Discord) {


        var errMessage = "**This Is Not A NSFW Channel! 🔞**";
        if (!message.channel.nsfw) {
            message.react('💢');

            return message.reply(errMessage)
        .then(message => {
            message.delete({ timeout: 3000 })
        })
    }

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#c30202')
        .setTimestamp()
        .setTitle('🔞 NSFW List')
        .setDescription('`4k,hentai,neko,pgif`')
        .setFooter('Bot Developer @👑HACKERPRO™#9999');

        message.channel.send(newEmbed);
    }

}
