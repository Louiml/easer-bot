import { GuildMember, MessageActionRow, MessageButton, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
export default {
   category: 'Moderation',
   description: 'bans a user',
   permissions: ['ADMINISTRATOR'],
//    requireRoles: true,
   slash: true,
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
   if (!target.bannable) {
    return 'cannot ban that user'
   }
   args.shift()
   const reason = args.join(' ')
   target.ban({reason, days: 1})
   const banedmember = new MessageEmbed()
   .setTitle('member baned')
     .setDescription(`\`Member baned\`
     **reason:** ${reason}
     **days:** 1`)
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
    embeds: [banedmember]
})
   }
} as ICommand