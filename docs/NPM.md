# Information for Developers

If You want join to us, please read it
It's few info about development

# More info

## How to create npm package
https://docs.npmjs.com/creating-a-package-json-file

## How to create node module
https://docs.npmjs.com/creating-node-js-modules

## Creating and publishing scoped public packages
https://docs.npmjs.com/creating-and-publishing-scoped-public-packages

## Setting config options for the init command§

You can set default config options for the init command. For example, to set the default author email, author name, and license, on the command line, run the following commands:

    > npm set init.author.email "example-user@example.com"
    > npm set init.author.name "example_user"
    > npm set init.license "MIT"


## Start creating and publishing
    npm login

## if git not exist

    git init
    git remote add origin https://github.com/gitpad-pl/github.git


## for organisation

    npm init --scope=@softreck

#### Publish

    npm publish --access public

#### Documentation

https://npmjs.com/package/@softreck/gitpad-github

#### install package

    npm i @softreck/gitpad-github




## for user

    npm init --scope=@sapletta

#### Publish

    npm publish --access public

#### Documentation

https://npmjs.com/package/@sapletta/gitpad-github

#### install package

    npm i gitpad-github



## only package name

    npm init

#### Publish

    npm publish --access public

#### Documentation

https://www.npmjs.com/package/gitpad-github

#### install package

    npm i gitpad-github




To see your public package page, visit https://npmjs.com/package/package-name,
replacing package-name with the name of your package.
 Public packages will say public below the package name on the npm website.

