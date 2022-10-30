const { Client, Intents } = require('discord.js');
const axios = require('axios')
const { response } = require('express');
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
    let getList = async () => {
      let resp = await axios('https://api.cricapi.com/v1/currentMatches?apikey=d5b59ee1-4d64-4aed-865d-92d5c11cabe4&offset=10')
      let matches = resp.data

      return matches
    }

    let matchesValue = await getList();
    // console.log(matchesValue.data.length);
    
    // console.log("match:", matchesValue.data[0].name , "\nstatus:" , matchesValue.data[0].status )

    for( let i=0; i<matchesValue.data.length; i++){
      await interaction.reply(`match: ${matchesValue.data[0].name} \n status: ${matchesValue.data[0].status} \n\n`);
    }
      

    // await interaction.reply(matchesValue);
  }

  if (interaction.commandName === 'livescore') {
    await interaction.reply('suiii');
  }

});

client.login(token);