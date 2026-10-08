const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('flip')
        .setDescription('Flips a coin (Heads or Tails).'),
    async execute(interaction) {
        const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
        const embed = new EmbedBuilder()
            .setTitle('🪙 Coin Flip')
            .setColor(0xF1C40F)
            .setDescription(`The coin landed on: **${result}**!`);

        await interaction.reply({ embeds: [embed] });
    },
};
