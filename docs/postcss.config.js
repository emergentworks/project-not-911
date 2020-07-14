const jekyllEnv = process.env.JEKYLL_ENV || "development";

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
    ...(jekyllEnv !== "development"
    ? [
        require("@fullhuman/postcss-purgecss")({
          content: ["!(_site|node_modules)/**/*.+(html|js|md)", "*.html"],
          defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
          whitelistPatternsChildren: [/highlight/],
        }),
        require("cssnano")({ preset: "default" }),
      ]
    : [])
  ]
};
