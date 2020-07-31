/**
 * @description babel.config is where you can tweak babel plugins, presets, etc
 * babellets you run modern javascript and supersets like typescript on old browsers
 * for the most part we want to just use the expo preset
 */
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
