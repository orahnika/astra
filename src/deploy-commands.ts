import { REST, Routes } from "discord.js";
import dotenv from "dotenv";
import { pingCommand } from "./commands/ping";

dotenv.config();

const commands = [
  pingCommand.data.toJSON(),
];

const rest = new REST({ version: "10" }).setToken(
  process.env.DISCORD_TOKEN!
);

(async () => {
  try {
    console.log("Registering slash commands...");

    await rest.put(
      Routes.applicationCommands(
        process.env.DISCORD_CLIENT_ID!
      ),
      { body: commands }
    );

    console.log("Commands registered.");
  } catch (error) {
    console.error(error);
  }
})();