module.exports = {
    name: 'clearbug',
    aliases: ['clearbugs', 'cb'],
    permissions: ["ADMINISTRATOR"],
    cooldown: 4200,
    description: 'kill a user',
    //Use your own execute parameters
    execute(client, message, cmd, args, Discord) {

        message.channel.send(`**XOPBOT Cleared All Bugs From ${message.guild.name}! \nSome Bugs Will Stay Not All Can Be Removed!**`)

    }
}