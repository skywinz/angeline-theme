module.exports = {
    appDir: false,
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = {fs: false};
        return config;
    },
};
