# Information for Developers

If You want join to us, please read it
It's few info about development

## How to easy start development?

1. Join to our project on Github (https://github.com/gitpad-pl/github)
2. Join to our team on npmjs (https://www.npmjs.com/package/gitpad-github)

## Short way to share your changes in code
1. prepare your changes
2. Update Github Repository over command on windows

    -github-push.bat

3. Publish changes on Npm over command on windows

    -npm-publish.bat

## How to work daily, with our environment

If you want be more productive and create step by step some changes with versioning
You can ease use some special command in cycle, there are just 3 commands which can help you:
+ -version.bat
+ -ticket.bat
+ -publish.bat

### If you creating one new Feature, be sure that all changes are commited

creating new version

    -version.bat

description for ticket, without param as default is info about new Version

    -ticket.bat "Name of Your feature"

... create changes in code, and publish on github and npm package

    -publish.bat



### ... or if you continue current topic for current version:

    -ticket.bat "Solution for some problem"

if fixed use:

    -github-push.bat

and if You want create new feature got to the point below

#### After all changes for new Version publish using one command

    -publish.bat

which execute two scripts in one moment

    -github-push.bat
    -npm-publish.bat
