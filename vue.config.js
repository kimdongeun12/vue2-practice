const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "/vue2-practice",
  outputDir: "./docs",
  transpileDependencies: ["vuetify"],
});
