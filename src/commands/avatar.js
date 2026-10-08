const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Gets a user avatar.')
        .addUserOption(option => option.setName('target').setDescription('The user to view')),
    async execute(interaction) {
        const user = interaction.options.getUser('target') || interaction.user;
        const avatarUrl = user.displayAvatarURL({ size: 512, extension: 'png' });

        const embed = new EmbedBuilder()
            .setTitle(`🖼️ ${user.username}'s Avatar`)
            .setColor(0x00FF00)
            .setImage(avatarUrl);

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setStyle(ButtonStyle.Link)
                .setLabel('Open Original Image')
                .setURL(avatarUrl)
        );

        await interaction.reply({ embeds: [embed], components: [row] });
    },
};
