const postcssPresetEnv = require('postcss-preset-env');
/** @type {import('postcss').Processor} */
module.exports = {
  plugins: [
    postcssPresetEnv({
      autoprefixer: {
        grid: 'autoplace',
      },
    }),
  ],
};
