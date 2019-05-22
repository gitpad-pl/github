:: publish npm package on npmjs.com
::npm version patch &&
npm publish --access public && start firefox "https://www.npmjs.com/package/gitpad-github" && SLEEP 3 && -version.bat
