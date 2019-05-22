:: update data on git repo
-ticket.bat && git add . && git commit -m "%ticket%" && git push origin master && start firefox "https://github.com/gitpad-pl/github.git"
