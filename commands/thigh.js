const Discord = require("discord.js");
module.exports = {
    name: 'thigh',
    nsfw: true,
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {

        var superagent = require('superagent');

        if (!message.channel.nsfw) return message.channel.send('**This Is Not A NSFW Channel! 🔞**')

        var lo = new Discord.MessageEmbed()
            .setDescription(`Sending Thigh...`)
            .setTimestamp()

        message.channel.send(lo).then(m => {

            superagent.get('https://nekobot.xyz/api/image').query({ type: 'thigh' }).end((err, response) => {

                var embed_nsfw = new Discord.MessageEmbed()
                    .setDescription(`:underage: **Thigh**\n**[Provided To You By The Bot Supporters Of XOPBOT](${response.body.message})**`)
                    .setTimestamp()
                    .setImage(response.body.message)
                    .setFooter('That Thigh Is Just Godly Sexy! :)')
                    .setColor('#c30202')
                m.edit(embed_nsfw);
            });
        });
    }
}