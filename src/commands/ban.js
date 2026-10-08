const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bans a member from the server.')
        .addUserOption(option => option.setName('target').setDescription('The member to ban').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('The reason for banning'))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
    async execute(interaction) {
        const user = interaction.options.getUser('target');
        const reason = interaction.options.getString('reason') || 'No reason provided';
        const member = await interaction.guild.members.fetch(user.id);

        if (!member.bannable) {
            return interaction.reply({ content: '❌ I cannot ban this user. They may have a higher role than me.', ephemeral: true });
        }

        await member.ban({ reason });

        const embed = new EmbedBuilder()
            .setTitle('🔨 Member Banned')
            .setColor(0xC0392B)
            .addFields(
                { name: 'User', value: `${user.tag} (${user.id})` },
                { name: 'Moderator', value: `${interaction.user.tag}` },
                { name: 'Reason', value: reason }
            );

        await interaction.reply({ embeds: [embed] });
    },
};
