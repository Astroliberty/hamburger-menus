const scssRequire = require.context("!raw-loader!./", true, /.scss$/);

let exported = {};

scssRequire.keys().forEach((scssFilePath) => {
  exported[scssFilePath.replace("./", "").replace(".scss", "")] = scssRequire(
    scssFilePath
  );
});

export default exported;
