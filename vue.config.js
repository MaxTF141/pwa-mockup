const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Spotify',
    themeColor: '#1db954',
    msTileColor: '#ffffff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'default',
    workboxOptions: {
      exclude: [/\.map$/, /_redirects/],
    },
    manifestOptions: {
      icons: [
        {
          src: './src/assets/logos_spotify-crop-removebg-preview.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: './src/assets/logos_spotify-crop-removebg-preview.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      start_url: '.',
      display: 'standalone',
      background_color: '#191414',
      splash_pages: {
        manifest: './img/splash/manifest_splash.json',
      },
    },
  },
});
