:: publish npm package on npmjs.com
::npm version patch &&
:: Zrobic opcje do zapisywania wersji jesli sie chce inna wersje jako kolejna
npm publish --access public && start firefox "https://www.npmjs.com/package/gitpad-github" && pause && -version.bat
