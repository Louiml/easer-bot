import { GuildMember, MessageActionRow, MessageButton, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
export default {
   category: 'Moderation',
   description: 'Kicks a user',
   permissions: ['ADMINISTRATOR'],
//    requireRoles: true,
   slash: 'both',
   testOnly: true,
   guildOnly: true,
   minArgs: 2,
   expectedArgs: '<user> <reason>',
   expectedArgsTypes: ['USER', 'STRING'],
   callback: ({message, interaction, args}) => {
   const target = message ? message.mentions.members?.first() : interaction.options.getMember('user') as GuildMember
   if (!target) {
    return 'please ping user'
   }
   if (!target.kickable) {
    return 'cannot kick that user'
   }
   args.shift()
   const reason = args.join(' ')
   target.kick(reason)
   const kickedmember = new MessageEmbed()
   .setTitle('member kicked')
     .setDescription(`\`Member kicked\`
     **reason:** ${reason}`)
   const row = new MessageActionRow()
   .addComponents(
       new MessageButton()
       .setURL('https://easerbot.xyz')
       .setStyle('LINK')
       .setLabel('website bot')
   )
   .addComponents(
    new MessageButton()
    .setCustomId('putter text')
    .setDisabled(true)
    .setStyle('PRIMARY')
    .setLabel(reason)
)
   return interaction.reply({
    components: [row],
    embeds: [kickedmember]
})
   }
} as ICommand