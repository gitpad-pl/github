:: update npm
::SETLOCAL EnableDelayedExpansion
::
::This trick works by asking the dir command
::to list just the names (/b)
::of just the files /a-d,
::sorted by date (/od),
::based on the creation time (/t:c).
::
::for /f %i in ('dir Ticket /a-d/od/t:c') do set /p ticket=<Ticket\%i
for /f %i in ('dir /b /od Ticket\*.md') do @set ticket=%i
::for /f "eol=: delims=" %F in ('dir /b /od Ticket\*.md') do @set /p ticket=<Ticket\%F
::@set "ticket=Ticket\%F"
::@set ticket=<Ticket\%F
::@set "ticket=type %ticket%"
::set /p ticket=<%ticket%
echo %ticket%
git add . && git commit -m "%ticket%" && git push origin master
:: type .\Ticket\22-05-2019.md
:: forfiles /C "cmd /c echo @file @fdate @ftime"

:: dir Ticket /O:D /T:W /A:-D

:: for /f %i in ('dir /b/a-d/od/t:c Ticket\*.md') do set LAST=%i
