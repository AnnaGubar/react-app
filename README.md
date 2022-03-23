## Начало работы с react

- npx create-react-app .
- npm i prop-types

## Настройка линтеров

- npm install --save-dev prettier husky lint-staged
- добавить 2 файла

  - .huskyrc `{ "hooks": { "pre-commit": "lint-staged" } }`
  - .lintstagedrc
    `{ "src/**/*.{json,css,scss,md}": ["prettier --write"], "src/**/*.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix"] }`

         <!-- - npm install --save-dev prettier eslint -->
         <!-- - npx mrm@2 lint-staged (добавили в package.json scss jdx) -->

## Деплой на GitHub Pages

`https://drive.google.com/file/d/1EOewQyS7V9SHsUbbycwgTNqB59jwhFnG/view`

- npm run build
- добавляем строку `"homepage": "https://myusername.github.io/my-app",` в
  package.json
- npm run build
- npm install --save gh-pages
- добавляем в package.json
  `"predeploy": "npm run build","deploy": "gh-pages -d build"`
- npm run deploy

## Normalize

- npm install modern-normalize
- в файле index.js сделать импорт
  `import 'modern-normalize/modern-normalize.css';`
