const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // {
    //   name: "@storybook/addon-postcss",
    //   options: {
    //     cssLoaderOptions: {
    //       // When you have splitted your css over multiple files
    //       // and use @import('./other-styles.css')
    //       importLoaders: 1,
    //     },
    //     postcssLoaderOptions: {
    //       // When using postCSS 8
    //       implementation: require("postcss"),
    //     },
    //   },
    // },
  ],
  framework: "@storybook/vue3",
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });
    // config.module.rules.push({
    //   test: /\.css$/,
    //   use: [
    //     {
    //       loader: "postcss-loader",
    //       options: {
    //         ident: "postcss",
    //         plugins: [require("tailwindcss"), require("autoprefixer")],
    //       },
    //     },
    //   ],
    //   include: path.resolve(__dirname, "../"),
    // });

    return config;
  },
};
