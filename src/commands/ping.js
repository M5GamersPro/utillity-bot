const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Checks the bot connectivity and latency.'),
    async execute(interaction) {
        const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true, ephemeral: true });
        const latency = sent.createdTimestamp - interaction.createdTimestamp;

        const embed = new EmbedBuilder()
            .setTitle('🏓 Pong!')
            .setColor(0x3498DB)
            .addFields(
                { name: 'Bot Latency', value: `${latency}ms`, inline: true },
                { name: 'API Gateway Latency', value: `${Math.round(interaction.client.ws.ping)}ms`, inline: true }
            );

        await interaction.editReply({ content: null, embeds: [embed] });
    },
};
