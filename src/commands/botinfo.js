const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('botinfo')
        .setDescription('Displays structural information about the bot application.'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🤖 Bot Information')
            .setColor(0x9B59B6)
            .setThumbnail(interaction.client.user.displayAvatarURL())
            .addFields(
                { name: 'Developer Tag', value: interaction.client.user.tag, inline: true },
                { name: 'Library', value: 'Discord.js v14', inline: true },
                { name: 'Servers Active', value: `${interaction.client.guilds.cache.size}`, inline: true },
                { name: 'Node.js Engine', value: process.version, inline: true }
            );

        await interaction.reply({ embeds: [embed] });
    },
};
