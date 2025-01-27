const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    readyStatus: false,
    checkUpdate: false,
});

const keepAlive = require('./server.js');
keepAlive();
require("dotenv").config();

function formatTime() {
    const date = new Date();
    const options = {
        timeZone: 'Asia/Tokyo', // Correct timezone for Japan
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - Rich Presence started!`);

    const activityVSCode = {
        name: 'Visual Studio Code', // Activity name
        type: 'PLAYING', // Type of activity
        details: 'Idling', // Custom details
        timestamps: { start: Date.now() }, // Timestamp for activity
        assets: {
            large_image: 'https://cdn.discordapp.com/app-assets/383226320970055681/565945768817590282.png?size=160', // Large image asset URL
            large_text: 'Visual Studio Code', // Hover text for large image
            small_image: 'https://cdn.discordapp.com/app-assets/383226320970055681/565945770067623946.png?size=160', // Small image asset URL
            small_text: 'Coding', // Hover text for small image
        },
    };

    const activityNetflix = {
        name: 'Netflix', // Activity name
        type: 'WATCHING', // Type of activity
        timestamps: { start: Date.now() }, // Timestamp for activity
        assets: {
            large_image: 'https://media.discordapp.net/attachments/1289477245660041237/1333329033169211434/Netflix-Symbol.png?ex=67987eed&is=67972d6d&hm=66951172e8d031b8bb7619e4ec3a4f3250ac832add1605f868db62661b970326&=&format=webp&quality=lossless&width=376&height=376', // Replace with your Netflix asset key
            large_text: 'Netflix', // Hover text for the large image
        },
    };

    // Set both activities in the presence
    client.user.setPresence({
        status: 'idle', // Status: online, dnd, idle, invisible
        activities: [activityVSCode, activityNetflix], // Add multiple activities
    });

    console.log('Rich Presence is active with multiple activities.');
});

/* client.on('messageCreate', message => {
    if (message.mentions.has(client.user)) {
        message.react('💀'); // React with skull emoji
    }
}); */

const mySecret = process.env['TOKEN'];
client.login(mySecret);
