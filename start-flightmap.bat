@echo off
title FlightMap // 3D Offline In-Flight Moving Map
setlocal enabledelayedexpansion

echo =============================================================
echo    FLIGHTMAP // 3D Offline In-Flight Moving Map Launcher
echo =============================================================
echo.

:: Check Node.js installation
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed or not in PATH!
    echo Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)

:: Check if dist exists, build if not
if not exist "dist\index.html" (
    echo [FlightMap] Building production offline bundle...
    call npm run build
    if %errorlevel% neq 0 (
        echo [ERROR] Build failed!
        pause
        exit /b 1
    )
)

echo [FlightMap] Launching local offline server and telemetry hub...
start "FlightMap Telemetry Server" cmd /c "node server/index.js & pause"

:: Wait 2 seconds for server to start
timeout /t 2 /nobreak >nul

echo [FlightMap] Opening FlightMap in your browser...
start http://localhost:3000

echo.
echo =============================================================
echo  FlightMap is running!
echo  Laptop display:  http://localhost:3000
echo.
echo  Connect your phone to your laptop Wi-Fi hotspot,
echo  scan the QR code on screen to stream hardware GPS.
echo =============================================================
echo.
exit /b 0
