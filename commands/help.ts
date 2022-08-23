import { ICommand } from "wokcommands";
import { MessageActionRow, MessageButton, MessageEmbed } from "discord.js";

export default {
category: 'general',
description: 'show all the commands of the bot',
slash: true,
// testOnly: true,
callback: async ({interaction: msgInt, channel}) => {
    const helpmenu = new MessageEmbed()
    helpmenu.setAuthor('easer bot', 'https://cdn.discordapp.com/avatars/1008957814707847229/403934edcbe096d3cd1eef4afea6c085.png')
      .setDescription(`Hi, I'm easer and I'm a discord bot
      And I want to show you what can I do

      **General / Info**:
      \`/help, /github, /meme, /kick, /clear, /ban\`

      **Prefix:** \`!\`
      **Programming language:** [TypeScript](https://www.typescriptlang.org/)
      **Developer:** [louiml.net](https://louiml.net)
      **Bot website:** [easerbot.xyz](https://easerbot.xyz)`)
      .addField('The bot hosting from', `fly2host - [discord server](https://discord.gg/CyFeFYNZMC)`)
      .setImage('https://cdn.discordapp.com/attachments/1007642731226603562/1010092249322897479/E0JimAyr.gif?size=4096')
    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setURL('https://github.com/louiml-net/easer-bot')
        .setStyle('LINK')
        .setLabel('source code')
    )
    await msgInt.reply({
        components: [row],
        embeds: [helpmenu]
    })
}
} as ICommand
