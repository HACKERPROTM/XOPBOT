module.exports = {
  name: 'ban',
  permissions: ["BAN_MEMBERS"],
  cooldown: 3,
  description: "This Command Bans Member",
  execute(client, message, cmd, args, Discord) {
    const user = message.mentions.users.first();
		if (message.author.id === user.id) {
			return message.channel.send('**Are You Alright? You Can Not Ban Yourself!**');
		}

		if (user.id === message.guild.owner.id) {
			return message.channel.send(
				'**You Jerk, How You Can Ban Server Owner! 👿**'
			);
		}

    if (user) {
      const userTarger = message.guild.members.cache.get(member.id);
      userTarger.ban();
      message.channel.send(`**<@${userTarger.user.id}> Has Been Banned For Breaking The Rules!**`);
    } else {
      message.channel.send('**You Cant Ban This Member Because It Dont Exist Or He Is A Hacker!**');
    }
  }
}
