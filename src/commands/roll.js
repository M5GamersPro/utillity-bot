const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription('Rolls a dice.'),
    async execute(interaction) {
        const rollResult = Math.floor(Math.random() * 6) + 1;
        const embed = new EmbedBuilder()
            .setTitle(`🎲 Dice Roll`)
            .setColor(0xE74C3C)
            .setDescription(`You rolled a **${rollResult}**!`);

        await interaction.reply({ embeds: [embed] });
    },
};
