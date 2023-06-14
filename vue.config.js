module.exports = {
  pwa: {
    name: 'Spotify',
    themeColor: '#1db954',
    msTileColor: '#1db954',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxOptions: {
      // Configure options for the service worker
    },
    iconPaths: {
      favicon32: 'src/assets/Spotify_Icon_RGB_Green.png',
      favicon16: 'src/assets/Spotify_Icon_RGB_Green.png',
      appleTouchIcon: 'src/assets/Spotify_Icon_RGB_Green.png',
      maskIcon: 'src/assets/Spotify_Icon_RGB_Green.png',
      msTileImage: 'src/assets/Spotify_Icon_RGB_Green.png',
    },
    manifestOptions: {
      background_color: '#191414',
      icons: [
        {
          src: 'src/assets/Spotify_Logo_RGB_Green.png',
          sizes: '2362x709',
          type: 'image/png',
        },
      ],
    },
  },
};
