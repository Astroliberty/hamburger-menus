module.exports = {
  publicPath: "./",
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },

  filenameHashing: true,
  css: {
    // 毎回読み込んでおくscssファイルの指定
    loaderOptions: {
      scss: {
        additionalData: `
				@import "./src/assets/scss/_variables.scss";
				`,
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("text")
      .test(/\.txt$/i)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
  },
};
