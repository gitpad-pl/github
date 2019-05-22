# Information for Developers

If You want join to us, please read it
It's few info about development

## How to easy start development?
1. prepare your changes
2. Join to our project on Github (https://github.com/gitpad-pl/github)
3. Update Github Repository over command on windows

    -github-push.bat

4. Join to our team on npmjs (https://www.npmjs.com/package/gitpad-github)
5. Publish changes on Npm over command on windows

    -npm-publish.bat

## How to work daily, with our environment

#### If you creating one new Feature:

    -version.bat
    -ticket.bat

as default param in -ticket.bat is info about new Version

#### ... or if you creating more Features or solutions for existing problem:

    -version.bat
    -ticket.bat "Solution for some problem"

#### After all changes are ready to publish, use
    -publish.bat

which execute more scripts inside

    -github-push.bat
    -npm-publish.bat

## How to create node module
https://docs.npmjs.com/creating-node-js-modules

## Creating and publishing scoped public packages
https://docs.npmjs.com/creating-and-publishing-scoped-public-packages


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

