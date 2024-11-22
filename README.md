# Title
Al Quran Project

# Description
Al Quran Project Description

## About
Node.js Clean Architecture starter project, Using Express + TypeORM.

### Topics
- nodejs
- express
- rest-api
- clean-code
- clean
- clean-architecture
- api-rest
- typeorm
- restful-api
- express-js
- clean-code-example
- typeorm-mysql
- express-swagger

## Key Features:
- **Complete Quran Content:** Full Quran text with Arabic script.
- **Audio Recitation:** High-quality recitation by renowned Qaris.

## Technologies Used:
- **Backend:** Node.js, Express.js, TypeORM
- **Frontend:** NextJS, TypeScript, Redux
- **Database:** MySQL
- **Other Tools:** Git for version control, modern front-end libraries and tools

[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

[Express'](https://www.npmjs.com/package/express) application generator.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Linux Build][github-actions-ci-image]][github-actions-ci-url]
[![Windows Build][appveyor-image]][appveyor-url]


## 1. Running project
### Stable environment

1. Node version: ```>=22.4.1```
3. NPM version: ```>=10.8.1```
4. MySQL version: ```8.0.21```

#### 1.1. Setup
1. Install packages

```$ npm install```

2. Create .env file in the root folder and update some variables
```
DB_HOST={your_host}
DB_USER={your_user}
DB_PASSWORD={your_password}
DB_NAME={your_db}
PORT={your_running_port}
NODE_ENV=local
```

#### 1.2. Running
```$ npm run dev```

## Command Line Options

This generator can also be further configured with the following command line flags.

        --version        output the version number
    -e, --ejs            add ejs engine support
        --pug            add pug engine support
        --hbs            add handlebars engine support
    -H, --hogan          add hogan.js engine support
    -v, --view <engine>  add view <engine> support (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
        --no-view        use static html instead of view engine
    -c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git            add .gitignore
    -f, --force          force on non-empty directory
    -h, --help           output usage information

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/express-generator.svg
[npm-url]: https://npmjs.org/package/express-generator
[appveyor-image]: https://img.shields.io/appveyor/ci/dougwilson/generator/master.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/dougwilson/generator
[downloads-image]: https://img.shields.io/npm/dm/express-generator.svg
[downloads-url]: https://npmjs.org/package/express-generator
[github-actions-ci-image]: https://img.shields.io/github/workflow/status/expressjs/generator/ci/master?label=linux
[github-actions-ci-url]: https://github.com/expressjs/generator/actions/workflows/ci.yml