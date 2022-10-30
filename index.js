// const express = require("express");
// const app = express();

// app.listen(3000, () => {
//   console.log("Project is running!");
// })

// app.get("/", (req, res) => {
//   res.send("suiiiiii");
// })

// const Discord = require("discord.js");
// const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

// client.on("messageCreate", message => {

//   if (message.content === ">goal") {
//     message.channel.send("ssuuuiiiii")
//   }
// })
// const mySecret = process.env['token']
// client.login(process.env.token)


const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const token = process.env['token']
const CLIENT_ID = process.env['client_id']
const GUILD_ID = process.env['guild_id']

const commands = [{
  name: 'help',
  description: 'All commands and their details'
},
{
  name: 'sport',
  description: 'list of all sports you can follow'
},            
{
  name: 'livelist',
  description: 'list of all live matches'
},
{
  name: 'livescore-tournament',
  description: 'current score'
},
{
  name: 'tournament-table',
  description: 'Standings of all teams in the tournament'
},
{
  name: 'tournament-schedule',
  description: 'schedule of the tournament'
}

];

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();