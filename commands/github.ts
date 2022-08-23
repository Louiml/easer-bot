import {ICommand} from "WOKCommands";
import {MessageEmbed, MessageEmbed, MessageActionRow} from "discord.js";
export.default {
  category: 'Info',
  description: 'the source code of the bot',
  slash: true,
  callback: async ({interaction: msgInt, channel}) => {
    const githubembed =new MessageEmbed()
    .setTitle('source code of easer#1285')
    .setDescription(`
the [github](https://github.com/louiml-net/easer-bot)
made by louiml.net with typeScript and WOKCommands
      `)
      const row = new MessageActionRow()
      .addComponents(
          new MessageButton()
          .setURL('https://github.com/louiml-net/easer-bot')
          .setStyle('LINK')
          .setLabel('source code')
      )
    await msgInt.reply({
        components: [row],
        embeds: [githubembed]
    })
  }
} as ICommand
