const discord = require("discord.js");
const got = require("got"); //MAKE SURE TO INSTALL THE PACKAGE "GOT" ELSE THE CODE WOULD NOT WORK


module.exports = {
      name: "handcuffed",
      cooldown: 3,
      nsfw: true,
      aliases: ['girlscuffed', 'cuffed'],
      permissions: ["SEND_MESSAGES"],
      category: "NSFW",
      description: "Sends random Bigass",
      usage: "[command]",
      async execute(client, message, cmd, args, Discord) {

            if (!message.channel.nsfw) return message.channel.send('**This Is Not A NSFW Channel! 🔞**')

            var lo = new Discord.MessageEmbed()
                  .setDescription(`Sending Handcuffed...`)
                  .setTimestamp()

            message.channel.send(lo).then(m => {
                  got('https://www.reddit.com/r/Cuffed/random.json').then(response => {
                        let content = JSON.parse(response.body);
                        var title = content[0].data.children[0].data.title;
                        var amazeme = content[0].data.children[0].data.url;
                        let wow = new discord.MessageEmbed()
                              .setTimestamp()
                              .setDescription(`:underage: **Handcuffed**\n**[Provided To You By The Bot Supporters Of XOPBOT](${amazeme})**`)
                              .setImage(amazeme)
                              .setFooter(`Im Gonna Cuff You For Being A Baddie! :)`)
                              .setColor('#c30202')
                        m.edit(wow)
                  })
            })
      }
}
