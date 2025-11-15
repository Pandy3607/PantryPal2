module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    "react-native-reanimated/plugin",
    [
      "module-resolver",
      {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      },
    ],
  ],
};