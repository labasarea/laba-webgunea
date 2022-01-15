module.exports = {
  // Custom webpack config
  webpack: (config, webpack) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the mutated config
    return config;
  },

  // App customizations
  app: (config) => {
    config.locales = ["es"];

    return config;
  },
};
