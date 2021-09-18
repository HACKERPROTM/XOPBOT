const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const errorChannel = process.env.errorChannel;
const db = require('quick.db');
module.exports = {
    name: 'play',
    permissions: ["CONNECT", "SPEAK"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS", "CONNECT", "SPEAK"],
    aliases: ['skip', 'stop', 'pause', 'unpause', 'loop', 'leave', 'join', 'jump', 'queue', 'volume'],
    cooldown: 2,
    description: 'Advanced music bot',
    async execute(client, message, cmd, args, Discord) {

        const queue = message.client.distube.getQueue(message);

        if (cmd === 'play') {
            if (!message.member.voice.channel) {
                const embednovc1 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention(embednovc1);
            }

            try {
                if (!args[0]) {
                    const nopr = new Discord.MessageEmbed()
                        .setTimestamp()
                        .setColor(`${color}`)
                        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`**\`(prefix)play <song>\`**`)
                    return message.lineReplyNoMention(nopr)
                }
                message.client.distube.play(message, args.join(' '))
            } catch (err) {
                const errorlogs = client.channels.cache.get(errorChannel);
                message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
                errorlogs.send({ content: `**Error On Play Command!\n\nError:\n\n ${err}**` })
            }
        }

        else if (cmd === 'stop') {
            if (!message.member.voice.channel) {
                const embednovc3 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention(embednovc3);
            }

            if (!queue) {
                const embednovc2 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention(embednovc2);
            }

            try {
                message.client.distube.stop(message)
                const stopembed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**XOPBOT \`Stopped\` All Music From Playing! 😭**')
                return message.lineReplyNoMention(stopembed);
            } catch (err) {
                const errorlogs = client.channels.cache.get(errorChannel);
                message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
                errorlogs.send({ content: `**Error On Stop Command!\n\nError:\n\n ${err}**` })
            }
        }

        else if (cmd === 'skip') {
            if (!message.member.voice.channel) {
                const embednovc4 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention(embednovc4);
            }

            if (!queue) {
                const embednovc33 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention(embednovc33);
            }

            try {
                message.client.distube.skip(message)
            } catch (err) {
                const errorlogs = client.channels.cache.get(errorChannel);
                message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
                errorlogs.send({ content: `**Error On Skip Command!\n\nError:\n\n ${err}**` })
            }
        }

        else if (cmd === 'pause') {
            if (!message.member.voice.channel) {
                const embednovc5 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention(embednovc5);
            }

            if (!queue) {
                const embednovc44 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention(embednovc44);
            }

            if (queue.pause) {
                message.client.distube.resume(message)
                const ressong1 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**XOPBOT \`Resumed\` The Music For You! ▶**`)
                return message.lineReplyNoMention(ressong1);
            }

            try {
                message.client.distube.pause(message)
                const embed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**XOPBOT \`Paused\` The Music For You! ⏸**`)
                message.lineReplyNoMention(embed);
            } catch (err) {
                const errorlogs = client.channels.cache.get(errorChannel);
                message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
                errorlogs.send({ content: `**Error On Pause Command!\n\nError:\n\n ${err}**` })
            }
        }

        else if (cmd === 'unpause') {
            if (!message.member.voice.channel) {
                const embednovc6 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention(embednovc6);
            }

            if (!queue) {
                const embednovc55 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention(embednovc55);
            }

            try {
                message.client.distube.resume(message)
                const ressong2 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**XOPBOT \`Resumed\` The Music For You! ▶**`)
                return message.lineReplyNoMention(ressong2);
            } catch (err) {
                const errorlogs = client.channels.cache.get(errorChannel);
                message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
                errorlogs.send({ content: `**Error On Unpause Command!\n\nError:\n\n ${err}**` })
            }
        }

        else if (cmd === 'loop') {
            if (!message.member.voice.channel) {
                const embednovc7 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention(embednovc7);
            }

            if (!queue) {
                const embednovc66 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention(embednovc66);
            }

            try {
                if (!args[0]) {
                    const nopr2 = new Discord.MessageEmbed()
                        .setTimestamp()
                        .setColor(`${color}`)
                        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`**\`(prefix)loop <(Repeat queue)(Repeat song)(Off)>\`**`)
                    return message.lineReplyNoMention(nopr2)
                }
                const mode = message.client.distube.setRepeatMode(message, parseInt(args[0]));
                mode = mode ? mode == 2 ? "Repeat queue" : "Repeat song" : "Off";

                const loopembed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**XOPBOT Set Loop Mode To \`${mode}\` For You! 👍**`)
                return message.lineReplyNoMention(loopembed)
            } catch (err) {
                const errorlogs = client.channels.cache.get(errorChannel);
                // message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
                errorlogs.send({ content: `**Error On Loop Command!\n\nError:\n\n ${err}**` })
            }
        }

        else if (cmd === 'leave') {
            if (!message.member.voice.channel) {
                const embednovc1 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention(embednovc1);
            }

            try {
                message.member.voice.channel.leave();
                const leavevcembed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**XOPBOT \`Left\` The Voice Channel For You! 😢**')
                return message.lineReplyNoMention(leavevcembed)
            } catch (err) {
                const errorlogs = client.channels.cache.get(errorChannel);
                message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
                errorlogs.send({ content: `**Error On Leave Command!\n\nError:\n\n ${err}**` })
            }
        }

        else if (cmd === 'volume') {
            if (!message.member.voice.channel) {
                const embednovc1 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention(embednovc1);
            }

            if (!queue) {
                const embednovc77 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention(embednovc77);
            }

            try {
                if (!args[0]) {
                    const nopr3 = new Discord.MessageEmbed()
                        .setTimestamp()
                        .setColor(`${color}`)
                        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`**\`(prefix)volume <number>\`**`)
                    return message.lineReplyNoMention(nopr3)
                }
                const volume = parseInt(args[0])
                const maxvolume = 500
                if (isNaN(volume)) {
                    const fakvolume = new Discord.MessageEmbed()
                        .setTimestamp()
                        .setColor(`${color}`)
                        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`**\`${volume}\` Is Not A Number!**`)
                    return message.lineReplyNoMention(fakvolume)
                }
                if (volume > maxvolume) {
                    const nomorevolthanm = new Discord.MessageEmbed()
                        .setTimestamp()
                        .setColor(`${color}`)
                        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`**The Max Volume Is \`500\`%, Higher Than That Will Destroy Devices!**`)
                    return message.lineReplyNoMention(nomorevolthanm)
                }
                message.client.distube.setVolume(message, volume);
                const volembed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**XOPBOT Set Volume To \`${volume}\`% For You! 😃**`)
                return message.lineReplyNoMention(volembed)
            } catch (err) {
                const errorlogs = client.channels.cache.get(errorChannel);
                message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
                errorlogs.send({ content: `**Error On Volume Command!\n\nError:\n\n ${err}**` })
            }
        }

        else if (cmd === 'jump') {
            if (!message.member.voice.channel) {
                const embednovc1 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention(embednovc1);
            }

            if (!queue) {
                const embednovc88 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention(embednovc88);
            }

            try {
                if (!args[0]) {
                    const nopr4 = new Discord.MessageEmbed()
                        .setTimestamp()
                        .setColor(`${color}`)
                        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`**\`(prefix)jump <queuenumber>\`**`)
                    return message.lineReplyNoMention(nopr4)
                }
                const jumpnu = parseInt(args[0])
                if (isNaN(jumpnu)) {
                    const nonumsongal = new Discord.MessageEmbed()
                        .setTimestamp()
                        .setColor('#c30202')
                        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`**\`${jumpnu}\` Is Not A Number!**`)
                    return message.lineReplyNoMention(nonumsongal)
                }
                message.client.distube.jump(message, jumpnu);
                const jumpembed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**XOPBOT Jumped Queue To \`${jumpnu}\` For You! 🤪**`)
                return message.lineReplyNoMention(jumpembed)
            } catch (err) {
                const errorlogs = client.channels.cache.get(errorChannel);
                // message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
                errorlogs.send({ content: `**Error On Jump Command!\n\nError:\n\n ${err}**` })
            }
        }

        else if (cmd === 'queue') {
            if (!message.member.voice.channel) {
                const embednovc1 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention(embednovc1);
            }

            if (!queue) {
                const embednovc99 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention(embednovc99);
            }

            try {
                const queueembed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setThumbnail('https://cdn.discordapp.com/attachments/824319314495537175/888652527770431498/XOPBOT_Playlist.png')
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**Current Queue: 🎶** \n' + queue.songs.map((song, id) => `**${id + 1}. [${song.name}](${song.url}) - \`[${song.formattedDuration}]\`**`).slice(0, 10).join("\n"))
                return message.lineReplyNoMention(queueembed)
            } catch (err) {
                const errorlogs = client.channels.cache.get(errorChannel);
                message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
                errorlogs.send({ content: `**Error On Queue Command!\n\nError:\n\n ${err}**` })
            }
        }

        else if (cmd === 'join') {
            if (!message.member.voice.channel) {
                const embednovc1 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention(embednovc1);
            }

            try {
                message.member.voice.channel.join();
                const leavevcembed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**XOPBOT \`Joined\` The Voice Channel For You! 😉**')
                return message.lineReplyNoMention(leavevcembed)
            } catch (err) {
                const errorlogs = client.channels.cache.get(errorChannel);
                message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
                errorlogs.send({ content: `**Error On Join Command!\n\nError:\n\n ${err}**` })
            }
        }
    }
}