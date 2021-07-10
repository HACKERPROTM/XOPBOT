module.exports = {
    name: "rps",
    permissions: ["SEND_MESSAGES"],
    aliases: [],
    cooldown: 3,
    description: "play rock paper sciccors",
    async execute(client, message, cmd, args, Discord) {
        let embed = new Discord.MessageEmbed()
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setTitle("Lets Play Rock Paper Scissors")
            .setDescription("Play Rock Paper Scissors Must React!")
            .setTimestamp()
        let msg = await message.channel.send(embed)
        await msg.react("🗻")
        await msg.react("✂")
        await msg.react("📄")

        const filter = (reaction, user) => {
            return ['🗻', '✂', '📄'].includes(reaction.emoji.name) && user.id === message.author.id;
        }
        const choices = ["🗻", "✂", "📄"]
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, { max: 1, time: 8000, errors: ["time"] }).then(
            collected => {
                const reaction = collected.first()
                if ((reaction.emoji.name === '🗻' && me === "✂") ||
                    (reaction.emoji.name === "✂" && me === "📄") ||
                    (reaction.emoji.name === "📄" && me === "🗻")) {
                    message.reply("**You Won!**")
                } else {
                    message.reply("**You Lost!**")
                }


            }
        )

            .catch(collected => {
                message.reply("**Game Ended Due To No Response!**")
            })
    }


}