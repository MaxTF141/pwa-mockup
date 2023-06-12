const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  pwa: {
    name: 'Your App Name', // Replace with your app's name
    themeColor: '#ffffff', // Replace with your preferred theme color
    msTileColor: '#ffffff', // Replace with your preferred tile color
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'default',
    workboxOptions: {
      exclude: [/\.map$/, /_redirects/], // Exclude unnecessary files from the service worker
    },
  },
};

