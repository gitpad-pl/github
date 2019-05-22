@echo off
::setlocal enabledelayedexpansion
::setlocal enableextensions
::set /p "PARAM=test2:"
set CONTENT=%~1
::echo %CONTENT%
set /p VERSION= < VERSION.txt
IF "%CONTENT%" == "" set CONTENT="New Version of System v%VERSION%"
echo %CONTENT% >> "Ticket\v%VERSION%.md"
::echo %CONTENT%
::node -pe "require('./package.json').version" > VERSION.txt &&

::npm version patch > VERSION.txt && set /p VERSION= < VERSION.txt && echo %CONTENT% > "Ticket\v%VERSION%.md"
::set DEFAULT=domyslny
:: echo %VERSION% &&
::pause
::endlocal
:: && echo This is a sample text file > "Ticket\%VERSION%.md"
::set VERSION="$(npm view gitpad-github version)"
::for /f %%i in ('dir /b /od Ticket\*.md') do @set filename=%%i
::set /p ticket=<Ticket\%filename%
::for /f "delims==" %%a in (Ticket\%filename%) do set ticket=%%a
