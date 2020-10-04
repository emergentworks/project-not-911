# project-not-911 marketing site
The static site we use to promote not911

## Installation
This site uses jekyll as the static site generator. You can read the docs [here](https://jekyllrb.com/docs/). You will need to install ruby, bundler, and jekyll. Then run `bundle install` in this directory. You should then be able to run jekyll locally.

For CSS generation, we use tailwind and postcss. This is largely automated via Jekyll, but you can read more about tailwind [here](https://tailwindcss.com/) or postcss [here](https://postcss.org/). For these dependencies, you will need to have nodejs installed on your machine. Then just run `npm i` in this directory.

## Running the site
Once your dependencies are setup, just run `npm start`. That's it!

You can see other useful commands in the `package.json` file.

## Deployment
Deployment happens automaticallys on push to master.
