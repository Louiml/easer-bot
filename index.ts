import DiscordJS, {Intents} from 'discord.js';
import WOKCommands from 'wokcommands';
import path from 'path';
const client = new DiscordJS.Client({
 intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
 ]
});
client.on('ready', () => {
    console.log('i\'m ready')
    client.user?.setPresence({
        // status: "idle",
        activities: [
            {
                name: `!help | easerbot.xyz | on ${client.guilds.cache.size} guilds`
            }
        ]
    })
    new WOKCommands(client, {
        commandDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: [''],
        mongoUri: '',
        dbOptions: {
            keepAlive: true
    },
    })
})
client.login('TOKEN');
