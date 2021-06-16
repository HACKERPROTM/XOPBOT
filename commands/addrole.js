module.exports = {
    name: 'addrole',
    aliases: ['addnewrole'],
    permissions: ["MANAGE_ROLES"],
    async execute(client, message, cmd, args, Discord) {
      const member = message.mentions.members.first()
      if(!member) {
          const addroleError = new Discord.MessageEmbed()
          .setDescription(`**Please Mention A Member In Order To Give Them The Role!**`)
          .setColor("RED")
          return message.channel.send(addroleError)
      }
      args.shift()
      let roleToGive = message.mentions.roles.first()
      
      if(!roleToGive) {
          const addroleError2 = new Discord.MessageEmbed()
          .setTimestamp()
          .setDescription(`**No Roles Provided!**`)
          .setColor("RED")
          return message.channel.send(addroleError2)
      }
      const mentionedPosition = member.roles.highest.position
      const selfPosition = message.member.roles.highest.position

      if(selfPosition <= mentionedPosition) {
          const posi = new Discord.MessageEmbed()
          .setTimestamp()
          .setDescription(`**You Cannot Add Role To ${member} As Their Role Is Higher/Equal To Yours!**`)
          .setColor("RED")
          return message.channel.send(posi)
      }
      if(member.roles.cache.get(roleToGive.id)) {
          const addroleError3 = new Discord.MessageEmbed()
          .setTimestamp()
          .setDescription(`**${member} Already Has That Role!**`)
          .setColor("RED")
          return message.channel.send(addroleError3)
      }
      member.roles.add(roleToGive)
      const embed = new Discord.MessageEmbed()
      .setTimestamp()
     // .setTitle(`The Role ${roleToGive} Has Been Added To ${member}`)
      .setDescription(`The Role ${roleToGive} Has Been Added To ${member}`)
      .setColor("BLUE")
     // .setFooter(`Requested By: ${message.author.tag} \nIf The Role Is Higher Than The Bots Order \nThe Bot Wont Be Able To Add That Role!`, message.author.displayAvatarURL())

      message.channel.send(embed)

      
  }
}