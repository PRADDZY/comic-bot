const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const config = require('../../../config/config.js');

module.exports = {
  name: 'credits',
  description: "List of people who helped make this bot",

  async execute(message, args, client) {

    const credits = new MessageEmbed()
      .setColor(config.colors.info)
      .setTitle('**Credits**')
      .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username })
      .setFields(
        {
          name: `Developer`,
          value: `PRADDZY#8020`
        },

        {
          name: `Support`,
          value: `For support join the Discord server [here](${config.supportServer || "https://discord.gg/wC2h3zB"})`
        })
      .setFooter({ text: `PRADDZY#8020` });
    message.channel.send({ embeds: [credits] });
  },
};
