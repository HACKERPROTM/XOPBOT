const discord = require("discord.js");
const got = require("got"); //MAKE SURE TO INSTALL THE PACKAGE "GOT" ELSE THE CODE WOULD NOT WORK


module.exports = {
      name: "masturbation",
      cooldown: 3,
      nsfw: true,
      permissions: ["SEND_MESSAGES"],
      category: "NSFW",
      description: "Sends random bdsm",
      usage: "[command]",
      async execute(client, message, cmd, args, Discord) {

            if (!message.channel.nsfw) return message.channel.send({ content: '**This Is Not A NSFW Channel! 🔞**' })

            var lo = new Discord.MessageEmbed()
                  .setDescription(`Sending Masturbation...`)
                  .setTimestamp()

            message.channel.send(lo).then(m => {
                  got('https://www.reddit.com/r/MasturbationGoneWild/random.json').then(response => {
                        let content = JSON.parse(response.body);
                        var title = content[0].data.children[0].data.title;
                        var amazeme = content[0].data.children[0].data.url;
                        let wow = new discord.MessageEmbed()
                              .setTimestamp()
                              .setDescription(`:underage: **Masturbation**\n**[Provided To You By The Bot Supporters Of XOPBOT](${amazeme})**`)
                              .setImage(amazeme)
                              .setFooter(`Masturbate So I Can Jerk Off! :)`)
                              .setColor('#c30202')
                        m.edit(wow)
                  })
            })
      }
}
