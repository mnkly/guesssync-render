@echo off
cd /d "C:\Users\User\Desktop\gh-render-test"
echo Pushing 6 chunks with retry...
:chunk1
echo [CHUNK 1/6] pushing...
git push origin 3f7ceb21febd37d62168472b00967223baa93af2:refs/heads/main
if errorlevel 1 ( echo   retrying 1... & timeout /t 3 ^>nul & goto chunk1 )
:chunk2
echo [CHUNK 2/6] pushing...
git push origin 4cbe93ebfd98e503aa4674cbea9baec5aa7ce815:refs/heads/main
if errorlevel 1 ( echo   retrying 2... & timeout /t 3 ^>nul & goto chunk2 )
:chunk3
echo [CHUNK 3/6] pushing...
git push origin be5111c68b2e4c1b2f8aaac881871ee28b7a8db1:refs/heads/main
if errorlevel 1 ( echo   retrying 3... & timeout /t 3 ^>nul & goto chunk3 )
:chunk4
echo [CHUNK 4/6] pushing...
git push origin 3d5e9cf82bb8bea7edef6b2a5092f2dabcce1077:refs/heads/main
if errorlevel 1 ( echo   retrying 4... & timeout /t 3 ^>nul & goto chunk4 )
:chunk5
echo [CHUNK 5/6] pushing...
git push origin 2dcbfa8b700f1ee4d25e3d4c7d7f3b7c2892eef0:refs/heads/main
if errorlevel 1 ( echo   retrying 5... & timeout /t 3 ^>nul & goto chunk5 )
:chunk6
echo [CHUNK 6/6] pushing...
git push origin bc0d3fe0edae6cff9494985eb6eb02745e4bb70e:refs/heads/main
if errorlevel 1 ( echo   retrying 6... & timeout /t 3 ^>nul & goto chunk6 )
echo.
echo ALL CHUNKS PUSHED. Tell Claude done.
pause
