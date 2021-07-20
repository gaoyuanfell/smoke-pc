module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 1920, // 1920 1280
      unitPrecision: 5,
      viewportUnit: "vw",
      minPixelValue: 1
    }
  }
};
