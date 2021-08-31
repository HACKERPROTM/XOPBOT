const { MessageEmbed } = require("discord.js")
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: "roleunlock",
    permissions: ["ADMINISTRATOR"],
    cooldown: 3,
    description: "Unlocks a given channel for a particular role!",
    async execute(client, message, cmd, args, Discord) {
        const channel = message.mentions.channels.first()
        if (!channel) return message.lineReplyNoMention({ content: "**`(prefix)roleunlock <#channel> <roleID>`**" }) //, allowedMentions: { repliedUser: true } })
        const roletofind = args.slice(1).join(" ")
        const role = message.guild.roles.cache.find(r => r.id === roletofind)
        if (!role) return message.lineReplyNoMention({ content: "**Please Give A Valid Role Id!**" }) //, allowedMentions: { repliedUser: true } })
        const embed = new MessageEmbed()
            .setColor('#c30202')
            .setTimestamp()
            .setTitle("Channel Unlocked!")
            .setDescription(`**This Channel Has Been Unlocked By ${message.author.tag} For This Role <@!${role}>**`)
        channel.updateOverwrite(role, {
            SEND_MESSAGES: true
        })
        await channel.send(embed)
    }
}