const got = require('got');

module.exports = {
    name: "meme",
    cooldown: 3,
    permissions: ["SEND_MESSAGES"],
    category: "Image",
    description: "Sends a random meme from reddit",

    async execute(client, message, cmd, args, Discord) {
        got('https://reddit.com/r/memes/random.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            const embed = new Discord.MessageEmbed()
            embed.setTimestamp()
            embed.setTitle(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(`${memeImage}`)
            embed.setColor('#c30202')
            embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
            message.channel.send({ embeds: [embed] });
        })
    }
}