const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kicks a member from the server.')
        .addUserOption(option => option.setName('target').setDescription('The member to kick').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('The reason for kicking'))
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
    async execute(interaction) {
        const user = interaction.options.getUser('target');
        const reason = interaction.options.getString('reason') || 'No reason provided';
        const member = await interaction.guild.members.fetch(user.id);

        if (!member.kickable) {
            return interaction.reply({ content: '❌ I cannot kick this user. They may have a higher role than me.', ephemeral: true });
        }

        await member.kick(reason);

        const embed = new EmbedBuilder()
            .setTitle('👢 Member Kicked')
            .setColor(0xE67E22)
            .addFields(
                { name: 'User', value: `${user.tag} (${user.id})` },
                { name: 'Moderator', value: `${interaction.user.tag}` },
                { name: 'Reason', value: reason }
            );

        await interaction.reply({ embeds: [embed] });
    },
};
