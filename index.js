const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    readyStatus: false,
    checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() {
    const date = new Date();
    const options = {
        timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
        hour12: true,
        hour: 'numeric',
        minute: 'numeric'
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1251774905129766932')
        .setType('PLAYING')
        .setURL('https://youtu.be/dQw4w9WgXcQ?si=7Ga1_K2lgo8ykvPe')
        .setState('Idling')
        .setName('Visual Studio Code')
        .setDetails(`Sleeping`)
        .setStartTimestamp(Date.now())
        .setAssetsLargeImage('https://cdn.discordapp.com/app-assets/383226320970055681/565945768817590282.webp')
        .setAssetsLargeText('Idling')
        .setAssetsSmallImage('https://cdn.discordapp.com/emojis/1251785678975537172.webp?size=40&quality=lossless')
        .setAssetsSmallText('vs code')
        .addButton('Nextezza', 'https://discord.gg/nextezza-821061664354205806')
    //.addButton('Discord', '');

    client.user.setActivity(r);
    client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

    let prevTime = null;
    setInterval(() => {
        const newTime = formatTime();
        if (newTime !== prevTime) {
            const newDetails = `Sleeping with code`;
            r.setDetails(newDetails);
            client.user.setActivity(r);
            prevTime = newTime;
        }
    }, 1000);
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
