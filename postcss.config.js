const postcssPresetEnv = require('postcss-preset-env');
const postcssPxtorem = require('postcss-pxtorem');
/** @type {import('postcss').Processor} */
module.exports = {
  plugins: [
    postcssPresetEnv({
      autoprefixer: {
        grid: 'autoplace',
      },
    }),
    postcssPxtorem({
      rootValue: 75,
      propList: ['*'],
    }),
  ],
};
