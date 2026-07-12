@echo off
cd /d "C:\Users\User\Desktop\gh-render-test"
echo Pushing 5 chunks with retry...
:chunk1
echo [CHUNK 1/5] pushing...
git push origin ada324c9811fd516d716ebdda8ceae2bf0a61571:refs/heads/main
if errorlevel 1 ( echo   retrying 1... & timeout /t 3 ^>nul & goto chunk1 )
:chunk2
echo [CHUNK 2/5] pushing...
git push origin c2e066508fe7a3ddcf5c23db4493a865d1e1b281:refs/heads/main
if errorlevel 1 ( echo   retrying 2... & timeout /t 3 ^>nul & goto chunk2 )
:chunk3
echo [CHUNK 3/5] pushing...
git push origin 4c0f70f08356ea39e3c4848fa44506e1988a5c75:refs/heads/main
if errorlevel 1 ( echo   retrying 3... & timeout /t 3 ^>nul & goto chunk3 )
:chunk4
echo [CHUNK 4/5] pushing...
git push origin e04047ae44932c9115a1a43c75c0e61ac15befa2:refs/heads/main
if errorlevel 1 ( echo   retrying 4... & timeout /t 3 ^>nul & goto chunk4 )
:chunk5
echo [CHUNK 5/5] pushing...
git push origin 08c8c8ef5f409773a68cc15a74707884d28f75f1:refs/heads/main
if errorlevel 1 ( echo   retrying 5... & timeout /t 3 ^>nul & goto chunk5 )
echo.
echo ALL CHUNKS PUSHED. Tell Claude done.
pause
