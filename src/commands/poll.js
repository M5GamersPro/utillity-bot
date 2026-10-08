const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('poll')
        .setDescription('Create a quick yes/no poll.')
        .addStringOption(option => option.setName('question').setDescription('The topic to vote on').setRequired(true)),
    async execute(interaction) {
        const question = interaction.options.getString('question');

        const embed = new EmbedBuilder()
            .setTitle('📊 Community Poll')
            .setDescription(question)
            .setColor(0x1ABC9C)
            .setFooter({ text: `Created by ${interaction.user.username}` });

        const message = await interaction.reply({ embeds: [embed], fetchReply: true });
        await message.react('👍');
        await message.react('👎');
    },
};
