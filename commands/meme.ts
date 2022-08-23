import { ICommand } from 'wokcommands';
import fetch from 'node-fetch'
import { MessageEmbed } from 'discord.js';
export default {
    category: 'Jokes',
    description: 'send memes',
    slash: true,
    callback: async ({interaction: msgInt, message, args}) => {
    let data = await fetch("https://meme-api.herokuapp.com/gimme/memes").then(res => res.json())
    const memeembed = new MessageEmbed()
    memeembed.setTitle(data.title)
    memeembed.setURL(data.postLink)
    memeembed.setImage(data.url)
    await msgInt.reply({
        embeds: [memeembed]
    })
}
} as ICommand