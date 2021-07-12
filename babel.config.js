/**
 * @description babel.config is where you can tweak babel plugins, presets, etc
 * babellets you run modern javascript and supersets like typescript on old browsers
 * for the most part we want to just use the expo preset
 *
 * Also has dotenv plugin for .env AIRTABLE_KEY
 */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module:react-native-dotenv", {
      "moduleName": "@env",
      "path": ".env",
      "blacklist": null,
      "whitelist": null,
      "safe": false,
      "allowUndefined": true
    }]
  ]
};
