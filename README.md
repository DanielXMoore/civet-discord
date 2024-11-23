# Civet Discord bot

This is Discord bot that transpiles [Civet](https://civet.dev) code into
TypeScript or JavaScript.

## Usage

The bot automatically responds to messages containing ```` ``` ```` code blocks
with languages of

* ```` ```civet ````: regular Civet code, converted to TypeScript and Prettified.
* ```` ```coffee ````: CoffeeScript-compatibility mode: automatically prepend `"civet coffeeCompat"`.
* ```` ```civet-raw ```` or ```` ```coffee-raw ````: Don't run Prettier; give the raw output from the Civet transpiler.
* ```` ```civet-js ```` or ```` ```coffee-js ````: Ask Civet to convert to JavaScript instead of TypeScript.
* ```` ```civet-raw-js ```` or ```` ```coffee-raw-js ````: Ask Civet to convert to JavaScript instead of TypeScript, and don't run Prettier.

You can include multiple code blocks.  If the total output size is large,
it will switch from inlined code to file attachments.

You can edit your messages after initial sending, and the bot its response.
If you delete a message or edit it to remove all relevant code blocks,
the bot will delete its response
(and will no longer consider edits to that message).

In addition, you can use the `/civet` slash command to transpile Civet code,
with similar options.  If you set the `private` option to True, you will get a
private response, and not clutter the channel you are in.

## Installation

### Creating a Bot

* [Create a Discord bot](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)
* [Invite the bot to your server](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links)
  with permissions 277025393664 (as listed below),
  via a link like
  <https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=277025401856&scope=bot%20applications.commands>
  * Read Messages/View Channels
  * Send Messages
  * Send Messages in Threads
  * Manage Messages
  * Use Slash Commands
* Add the server to desired channels

### Building and Running the Bot

* Use Node >= 18
* Create an `.env` file like [.env.example](.env.example):
  ```sh
  DISCORD_TOKEN=your-long-token
  ```
* If you want to announce new Civet versions to a channel, also add
  ```sh
  MOTD_CHANNEL=id-of-channel
  ```
* `pnpm install`
* `pnpm build` to produce `dist/index.js`
* `pnpm start` or `node dist/index.js` to start bot
* Whenever the process is running, the bot is up

### Running a Long-Term Bot

To permanently run the bot in the background, we recommend
[pm2](https://pm2.keymetrics.io/):

* `npm install pm2@latest -g`
* `pm2 startup` (and follow instructions)
* To run the bot and automatic upgrading of Civet:
  `pm2 start bot.config.js`
* To run just the bot:
  `pm2 start bot.config.js --only civet-discord`
* Restart the bot (e.g., when updating the bot):
  `pm2 restart civet-discord`
