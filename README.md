# VUE prettier demo

Basic setup with vue-cli using linter autocorrection on save. Beside installing all required dependecies few things need to be setup in VSCode.

## NPM scripts

```bash
# install dependencies
npm install
# run default
npm run serve
# build default
npm run build
# lint all files
npm run lint
```

## Eslint and Prettier setup with VSCode

### Dependecies

For auto linting on save with eslint and prettier these are all dependencies when skaffolding the project with vue-cli

```bash
# devDependencies
# this is complete list - check what you are missing
npm i -D @vue/cli-plugin-babel @vue/cli-plugin-eslint @vue/cli-service @vue/eslint-config-prettier babel-eslint eslint eslint-plugin-prettier eslint-plugin-vue lint-staged prettier vue-template-compiler
```

- adjust `.eslintrc.js` config file: use vue-recommended for linting and vue-prettier for formatting (if not already adjusted)

```javascript
//content of .eslintrc.js file
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/recommended", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
```

You also need to have following VSCode plugins installed:

- install [ESLINT plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- install [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): will take care of formatting
- install [Vetur plugin](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- (optional) install [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint): for autocorrection of markdown files
- (optional) install [Trailing Spaces](https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces) for displaying trailing spaces

Extend settings.json file (File->Preferences->Settings)

```json
{
  "editor.tabSize": 2,
  // Set autosave to off
  "files.autoSave": "off",
  "editor.formatOnPaste": false,
  "editor.formatOnType": false,
  //DISABLE VSCode format on save
  //required to prevent collision
  //with ESLINT autoFixOnSave
  "editor.formatOnSave": false,
  //VETUR setup
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  //enable ESLINT autofix on save
  "eslint.autoFixOnSave": true,
  //enable ESLINT for specific languages
  "eslint.validate": [
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "javascript",
      "autoFix": true
    },
    {
      "language": "javascriptreact",
      "autoFix": true
    }
  ],
  //autocorrect markdown files
  "[markdown]": {
    "editor.formatOnSave": true,
    "editor.quickSuggestions": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
