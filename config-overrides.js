module.exports = function override(config, env) {
  if (env === 'production') {
    config.optimization.minimize = false;
    // Optional: prevent chunk splitting
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
      },
    };
    config.optimization.runtimeChunk = false;
  }
  return config;
};