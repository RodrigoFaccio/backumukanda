module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/Fonts'],
  devServer: {
    proxy: {
      '/*': {
        target: `http://192.168.100.2:5000`,
      },
    },
  },
  dependencies: {},
};
