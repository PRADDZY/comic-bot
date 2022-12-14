const { MessageEmbed } = require('discord.js');
const config = require('../../../config/config.js');

module.exports = {
	name: 'checkperms',
	description: 'Check my perms in your channel. Do I have permission to do everything I need to do?',

	async execute(message) {

		const perms = new MessageEmbed()
			.setColor(config.colors.info)
			.setDescription(`🔒 I have the following permissions: \n
            ${('[Manage Messages] ')}${(message.guild.me.permissions.has('MANAGE_MESSAGES') ? '✅' : '❌')}
            ${('[Send Messages] ')}${(message.guild.me.permissions.has('SEND_MESSAGES') ? '✅' : '❌')}
            ${('[Embed Links] ')}${(message.guild.me.permissions.has('EMBED_LINKS') ? '✅' : '❌')}
            ${('[Attach Files] ')}${(message.guild.me.permissions.has('ATTACH_FILES') ? '✅' : '❌')}
            ${('[Use External Emojis] ')}${(message.guild.me.permissions.has('USE_EXTERNAL_EMOJIS') ? '✅' : '❌')}
            ${('[Add Reactions] ')}${(message.guild.me.permissions.has('ADD_REACTIONS') ? '✅' : '❌')}`);

		message.reply({ embeds: [perms] });
	},
};
