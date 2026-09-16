<#
.SYNOPSIS
    FlightMap // 3D Offline In-Flight Moving Map Launcher
.DESCRIPTION
    Starts the local offline telemetry server and launches the primary 3D flight display.
#>

Write-Host "=============================================================" -ForegroundColor Cyan
Write-Host "   FLIGHTMAP // 3D Offline In-Flight Moving Map Launcher      " -ForegroundColor White
Write-Host "=============================================================" -ForegroundColor Cyan
Write-Host ""

# Verify Node.js
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "[ERROR] Node.js was not found in PATH." -ForegroundColor Red
    Write-Host "Please install Node.js from https://nodejs.org" -ForegroundColor Yellow
    exit 1
}

# Build bundle if dist is missing
if (-not (Test-Path "dist\index.html")) {
    Write-Host "[FlightMap] Building production offline bundle..." -ForegroundColor Yellow
    npm run build
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[ERROR] Build failed." -ForegroundColor Red
        exit 1
    }
}

# Start server in new process
Write-Host "[FlightMap] Starting local offline server..." -ForegroundColor Green
$serverProcess = Start-Process -FilePath "node" -ArgumentList "server/index.js" -PassThru

Start-Sleep -Seconds 2

# Launch browser
Write-Host "[FlightMap] Opening FlightMap in default browser..." -ForegroundColor Cyan
Start-Process "http://localhost:3000"

Write-Host ""
Write-Host "FlightMap is actively running!" -ForegroundColor Green
Write-Host "• Primary Laptop Display: http://localhost:3000" -ForegroundColor White
Write-Host "• Phone Copilot & GPS:    http://<laptop-ip>:3000/mobile.html" -ForegroundColor Yellow
Write-Host "Press Ctrl+C or close the server terminal window to stop." -ForegroundColor Gray
