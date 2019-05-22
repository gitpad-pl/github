:: publish npm package on npmjs.com
::npm version patch &&
:: Zrobic opcje do zapisywania wersji jesli sie chce inna wersje jako kolejna
set /P VERSION= < VERSION.txt
git push origin v%VERSION%
npm publish --access public && start firefox "https://www.npmjs.com/package/gitpad-github" && pause && echo "Optionally put Your defined Version: X.Y.Z" && -version.bat && -ticket.bat
