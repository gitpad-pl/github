# Information for Developers

If You want join to us, please read it
It's few info about development

## Steps to Publish

Publishing usually is a simple process.

code => test => publish => revise code => test => publish new version ...

### publish, run

npm publish

This will publish your package to NPM registry.
Once publish completes(in less than a minute), you can go check your package in the link https://www.npmjs.com/~{username}/{package-name}.

### Versioning
If you want to make changes to your package, you have to change the version number and publish again.
To update the version automatically rather than manually updating them.
These commands are based on semantic versioning:

    npm version patch

    npm version minor

    npm version major


## How to easy start development?

1. Join to our project on Github (https://github.com/gitpad-pl/github)
2. Join to our team on npmjs (https://www.npmjs.com/package/gitpad-github)

## Short way to share your changes in code
1. prepare your changes
2. publish on github and npmjs

    -publish.bat

OR separated:

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

... create changes in code, and publish on github and npm package, for publishiong new Version we using one command

    -publish.bat

which execute two scripts in one moment

    -github-push.bat
    -npm-publish.bat


### If you creating many changes for current version, you need 2 commands:
+ -ticket.bat
+ -github-push.bat

Use Param to create your description for ticket, without param as default is info about new Version

    -ticket.bat "Solution for some problem"

if you fixed and you want push changes to git:

    -github-push.bat

You can reapeat the commands: -ticket.bat & -github-push.bat if you want change in one version many things
After All your changes are ready to publish, use command:

    -npm-publish.bat


and if You want create new feature go to the point below


