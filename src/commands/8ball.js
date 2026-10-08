const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('Ask the Magic 8-Ball a question.')
        .addStringOption(option => option.setName('question').setDescription('The question to ask').setRequired(true)),
    async execute(interaction) {
        const question = interaction.options.getString('question');
        const responses = [
            'It is certain.', 'Without a doubt.', 'You may rely on it.', 'Yes definitely.',
            'Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.',
            'Don\'t count on it.', 'My reply is no.', 'My sources say no.', 'Very doubtful.'
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];

        const embed = new EmbedBuilder()
            .setTitle('🔮 Magic 8-Ball')
            .setColor(0x34495E)
            .addFields(
                { name: 'Question', value: question },
                { name: 'Answer', value: randomResponse }
            );

        await interaction.reply({ embeds: [embed] });
    },
};
