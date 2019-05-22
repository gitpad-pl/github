@ECHO OFF
for /f %%i in ('dir /b /od Ticket\*.md') do @set filename=%%i
::set /p ticket=<Ticket\%filename%
for /f "delims==" %%a in (Ticket\%filename%) do set ticket=%%a
echo %ticket%
