const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('warn')
        .setDescription('Formally warns a server member.')
        .addUserOption(option => option.setName('target').setDescription('Member to warn').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('Reason for the warning').setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),
    async execute(interaction) {
        const user = interaction.options.getUser('target');
        const reason = interaction.options.getString('reason');

        const embed = new EmbedBuilder()
            .setTitle('⚠️ Member Warned')
            .setColor(0xF39C12)
            .addFields(
                { name: 'Warned User', value: `${user.tag} (${user.id})` },
                { name: 'Moderator', value: `${interaction.user.tag}` },
                { name: 'Reason', value: reason }
            );

        await interaction.reply({ embeds: [embed] });
    },
};
