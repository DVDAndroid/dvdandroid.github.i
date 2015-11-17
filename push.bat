@echo off
echo.
git status
git add .
git status
set /p message="  Commit message: "
git commit -m %message%
echo.
git push
pause
