:: publish npm package on npmjs.com
::npm version patch &&
:: Zrobic opcje do zapisywania wersji jesli sie chce inna wersje jako kolejna
set /P VERSION= < VERSION.txt
git push origin v%VERSION%
npm publish --access public && @ping -n 4 localhost> nul && echo "Optionally put Your defined Version: X.Y.Z" && -version.bat && start firefox "https://www.npmjs.com/package/gitpad-github" && -ticket.bat
