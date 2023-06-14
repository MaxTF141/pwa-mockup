module.exports = {
  pwa: {
    name: 'Spotify',
    themeColor: '#1db954',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxOptions: {
      // Configure options for the service worker
    },
    iconPaths: {
      favicon32: 'src/assets/icon3@2x.png',
      favicon16: 'src/assets/icon3@2x.png',
      appleTouchIcon: 'src/assets/icon3@2x.png',
      maskIcon: 'src/assets/icon3@2x.png',
      msTileImage: 'src/assets/icon3@2x.png',
    },
    manifestOptions: {
      background_color: '##191414',
      icons: [
        {
          src: 'src/assets/logos_spotify-crop-removebg-preview.png',
          sizes: '749x333',
          type: 'image/png',
        },
      ],
      name: 'Spotify', // Add or update this line to set the name to an empty string
    },
  },
};
