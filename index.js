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
        .setURL('https://youtu.be/-YUIRdb5Dv8?si=Ai1J62mubREF1zwM')
        .setState('Visual Studio Code')
        .setName('Idling')
        .setDetails(`Sleeping`)
        .setStartTimestamp(Date.now())
        .setAssetsLargeImage('https://cdn.discordapp.com/app-assets/383226320970055681/565945768817590282.webp')
        .setAssetsLargeText('Idling')
        .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1245746250104443042/1251783533815660554/1628250995_vscode_story.png?ex=666fd5c3&is=666e8443&hm=a41287b3df5b5c7afc803f84b921a2fc25ac0942f4f426486243b45473bf2e39&')
        .setAssetsSmallText('vs code')
        .addButton('Nextezza', 'https://discord.gg/nextezza-821061664354205806')
    //.addButton('Discord', '');

    client.user.setActivity(r);
    client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

    let prevTime = null;
    setInterval(() => {
        const newTime = formatTime();
        if (newTime !== prevTime) {
            const newDetails = `Discord Server`;
            r.setDetails(newDetails);
            client.user.setActivity(r);
            prevTime = newTime;
        }
    }, 1000);
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
