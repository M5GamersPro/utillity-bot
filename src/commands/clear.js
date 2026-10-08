const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Deletes a bulk amount of messages from the channel.')
        .addIntegerOption(option => option.setName('amount').setDescription('Number of messages to clear (1-100)').setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
    async execute(interaction) {
        const amount = interaction.options.getInteger('amount');

        if (amount < 1 || amount > 100) {
            return interaction.reply({ content: '❌ Please provide an amount between 1 and 100.', ephemeral: true });
        }

        const deleted = await interaction.channel.bulkDelete(amount, true);

        const embed = new EmbedBuilder()
            .setColor(0x2ECC71)
            .setDescription(`🧹 Successfully cleared **${deleted.size}** messages!`);

        await interaction.reply({ embeds: [embed] });
        setTimeout(() => interaction.deleteReply().catch(() => null), 4000);
    },
};
