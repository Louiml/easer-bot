import { ICommand } from 'wokcommands';
export default {
    category: 'Moderation',
    description: 'bans a user',
    permissions: ['ADMINISTRATOR'],
    maxArgs: 1,
    expectedArgs: '[amount]',
    slash: true,
    callback: async ({message, interaction, args, channel}) => {
        const amount = args.length ? parseInt(args.shift()!) : 10
    if (message) {
        await message.delete()
    }
    }
} as ICommand