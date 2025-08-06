module.exports = {
  apps: [
    {
      name: "next-app",
      script: "npm",
      args: "start",
      env: {
        PORT: 3000,
      },
      // Memory and performance settings for large file uploads
      max_memory_restart: "1G",
      node_args: "--max-old-space-size=1024",
      instances: 1,
      exec_mode: "fork",
    },
  ],
};
