@echo off
setlocal

(for %%i in (dir Ticket /O:D /T:W /A:-D) do (
            echo %%i

::   set "firstMatch=true"
::   for /F "delims=" %%j in ('findstr /B /C:%%i fileB.txt') do (
::      if defined firstMatch (
::         echo %%j
::         set "firstMatch="
::      )
::   )
)) > fileC.txt

forfiles /P Ticket /S /D +(today'date - 30 days)
forfiles /P Ticket /S /D -30

forfiles /P Ticket /S /D -3 /C "cmd /c copy @file Ticket\Current"
forfiles /P Ticket /S
forfiles /O:D

dir Ticket /O:D /T:W /A:-D




:: This command gets the list of all the files from the current folder that are created on the same day.
for /F "tokens=2" %i in ('date /t') do dir /T:C | findstr /C:%i /B

forfiles /P Ticket /S
forfiles /S /D -1
forfiles /P Ticket /S /D -1


:: List folders only
forfiles /C “cmd /c if [@isdir] equ [TRUE] echo @file”

:: List files only
forfiles /C “cmd /c if [@isdir] neq [TRUE] echo @file”

:: List folders modified after a date
forfiles /D +2018-11-19 /C “cmd /c if [@isdir] equ [TRUE] echo @file”

:: List folders modified before a date
forfiles /D -2018-11-19 /C “cmd /c if [@isdir] equ [TRUE] echo @file”



for /f "eol=: delims=" %F in ('dir /b /od Ticket\*.md') do echo %F"

for /f "eol=: delims=" %F in ('dir /b /od *.log') do @set "newest=%F"
echo "%newest%"
::notepad "%newest%"

for /f "eol=: delims=" %F in ('dir /b /od Ticket\*.md') do @set "newest=%F"
echo "%newest%"

Place the first line of a file into a variable:
    for /f "eol=: delims=" %F in ('dir /b /od Ticket\*.md') do Set /P ticket=<Ticket\%F
    Echo %ticket%

type Ticket\"%newest%"
@set newest=/C type Ticket\"%newest%"

for /f "eol=: delims=" %F in ('dir /b /od Ticket\*.md') do @set "newest=type Ticket\"%F""
echo "%newest%"



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


:: type .\Ticket\22-05-2019.md
:: forfiles /C "cmd /c echo @file @fdate @ftime"

:: dir Ticket /O:D /T:W /A:-D

:: for /f %i in ('dir /b/a-d/od/t:c Ticket\*.md') do set LAST=%i
