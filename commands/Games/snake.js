const { Snake } = require("discord-gamecord")

module.exports = {
    name: "snake",
    cooldown: 10,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    description: "snake in discord!",
    async execute(client, message, cmd, args, Discord) {
        new Snake({
            message: message,
            embed: {
                title: 'Snake Game v2',
                color: '#c30202',
                OverTitle: "Game Over!",
            },
            snake: { head: '🔴', body: '🟥', tail: '🔴' },
            emojis: {
                board: '⬛',
                food: '🍌',
                up: '⬆️',
                right: '➡️',
                down: '⬇️',
                left: '⬅️',
            },
            othersMessage: '**You Are Not Allowed To Use The Buttons For The Snake Game!**',
        }).startGame();
    },
};