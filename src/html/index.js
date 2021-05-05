const htmlRequire = require.context("!raw-loader!./", true, /.txt$/);

let exported = {};

htmlRequire.keys().forEach((htmlFilePath) => {
  exported[htmlFilePath.replace("./", "").replace(".txt", "")] = htmlRequire(
    htmlFilePath
  );
});

export default exported;
