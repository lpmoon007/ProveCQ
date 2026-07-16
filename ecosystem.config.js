// pm2 process definition for provecq.com.
// The GitHub Actions deploy runs `pm2 startOrReload ecosystem.config.js`.
// Start manually the first time with: pm2 start ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "provecq",
      // Run Next's production server directly so pm2 owns the process cleanly.
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      cwd: __dirname,
      instances: 1, // bump to "max" for cluster mode once traffic warrants it
      exec_mode: "fork",
      autorestart: true,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: "3000",
      },
    },
  ],
};
