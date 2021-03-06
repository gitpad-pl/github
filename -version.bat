@echo off
::setlocal enabledelayedexpansion
::setlocal enableextensions
::set /p "PARAM=test2:"
::set CONTENT=%~1
::echo %CONTENT%
::IF "%CONTENT%" == "" set CONTENT="New Version"
::echo %CONTENT%
npm version patch && node -pe "require('./package.json').version" > VERSION.txt
-ticket.bat
::&& TYPE VERSION.txt | MORE /P > VERSION.txt
::set message=New Version of System v%VERSION%
::git tag -a v%VERSION% -m "%message%"
::&& echo %CONTENT% > "Ticket\v%VERSION%.md"
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
