:: update data on git repo
SetLocal EnableDelayedExpansion
::-message.bat
for /f %%i in ('dir /b /od Ticket\*.md') do set filename=%%i
for /f "delims==" %%a in (Ticket\%filename%) do set message=%%a
git add . && git commit -m "%message%" && git push origin master && start firefox "https://github.com/gitpad-pl/github.git"
