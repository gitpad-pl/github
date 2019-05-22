:: update data on git repo
SetLocal EnableDelayedExpansion
-message.bat & git add . & git commit -m "%message%" && git push origin master && start firefox "https://github.com/gitpad-pl/github.git"
