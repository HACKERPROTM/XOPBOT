const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: 'unmute',
  cooldown: 3,
  permissions: ["MUTE_MEMBERS"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS", "MUTE_MEMBERS"],
  description: "This Unmutes A Member",
  async execute(client, message, cmd, args, Discord) {
    const target = message.mentions.users.first()
    if (!args[0]) {
      return message.lineReplyNoMention({ content: '**`(prefix)unmute <@user>`**' }) //, allowedMentions: { repliedUser: true } })
    }
    if (message.mentions.users.first().bot) {
      return message.lineReplyNoMention({ content: '**You Can Not Unmute Bot`s!**' }) //, allowedMentions: { repliedUser: true } })
    }
    if (message.author.id === target.id) {
      return message.lineReplyNoMention({ content: '**Are You Alright? You Can Not Unmute Yourself!**' }) //, allowedMentions: { repliedUser: true } });
    }
    if (target.id === client.user.id) {
      return message.lineReplyNoMention({ content: `**You Can Not Unmute Me Through Me Lol!**` })
    }
    // if (message.member.roles.highest.position < member.roles.highest.position) {
    //   return message.lineReplyNoMention({ content: '**That User Has Higher Role Than Me!**' })
    // }

    if (target.id === message.guild.owner.id) {
      return message.lineReplyNoMention({
        content:
          '**You Jerk, How You Can Unmute Server Owner! 👿**' //, allowedMentions: { repliedUser: true }
      });
    }
    if (target) {
      //let mainRole = message.guild.roles.cache.find(role => role.name === 'Verified');
      let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

      let memberTarget = message.guild.members.cache.get(target.id);

      memberTarget.roles.remove(muteRole.id);
      //memberTarget.roles.add(mainRole.id);
      message.lineReplyNoMention({ content: `** <@${memberTarget.user.id}> Has Been Unmuted!**` });
    } else {
      message.lineReplyNoMention({ content: '**Cant Find The User Because It Dont Exist Or He Is Cheating!**' });
    }
  }
}