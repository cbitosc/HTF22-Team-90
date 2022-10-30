const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const token = process.env['token']

client.on('ready', () => {
  console.log(`Logged in brooo, as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'help') {
    await interaction.reply(' **Heyy! You can use the following commands to interact with the bot**\n``` /sport - list of all sports you can follow \n /livelist - list of all live matches \n /livescore-tournament - Current score \n /tournament-table - Standings of all teams in the tournament \n /tournament-schedule - Schedule of the tournament ``` ');
  }

  if (interaction.commandName === 'livelist') {
    await interaction.reply('Hey there');
  }

  if (interaction.commandName === 'livescore') {
    await interaction.reply('suiii');
  }

});

client.login(token);