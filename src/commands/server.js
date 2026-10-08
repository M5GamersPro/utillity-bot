const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Displays information about this server.'),
    async execute(interaction) {
        const { guild } = interaction;
        const embed = new EmbedBuilder()
            .setTitle(`🏰 Server Info: ${guild.name}`)
            .setColor(0x2F3136)
            .setThumbnail(guild.iconURL({ dynamic: true }))
            .addFields(
                { name: '👑 Owner', value: `<@${guild.ownerId}>`, inline: true },
                { name: '👥 Total Members', value: `${guild.memberCount}`, inline: true },
                { name: '📅 Created At', value: `<t:${Math.floor(guild.createdTimestamp / 1000)}:F>`, inline: false }
            );

        await interaction.reply({ embeds: [embed] });
    },
};
