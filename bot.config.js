// pm2 configuration
// Usage: pm2 start bot.config.js [--only civet-discord]

module.exports = {
  apps: [
    // Bot
    {
      name: "civet-discord",
      script: "./dist/index.js"
    },
    // Auto updator
    {
      name: "civet-discord-update",
      script: "./dist/autoUpdate.js",
      cron_restart: "0 * * * *", // hourly
    },
  ]
}
