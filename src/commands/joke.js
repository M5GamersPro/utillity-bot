const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('joke')
        .setDescription('Tells a random funny dad joke.'),
    async execute(interaction) {
        const jokes = [
            "Why don't scientists trust atoms? Because they make up everything!",
            "What do you call a fake noodle? An impasta.",
            "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "How does a penguin build its house? Igloos it together!",
            "Why don't skeletons fight each other? They don't have the guts."
        ];
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

        const embed = new EmbedBuilder()
            .setTitle('🎭 Dad Joke')
            .setColor(0xE67E22)
            .setDescription(randomJoke);

        await interaction.reply({ embeds: [embed] });
    },
};
