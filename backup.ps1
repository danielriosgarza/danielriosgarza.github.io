# 1. Create this as backup.ps1 in your project root
# Run in PowerShell (Right click in VS Code -> Open in Integrated Terminal)

# Create timestamp
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"

# Create backups directory at same level as project
$projectName = Split-Path -Path (Get-Location) -Leaf
$backupRoot = "..\backups"
New-Item -ItemType Directory -Force -Path $backupRoot

# Create backup directory for this specific backup
$backupDir = "$backupRoot\${projectName}_backup_${timestamp}"
New-Item -ItemType Directory -Force -Path $backupDir

# Clean up unnecessary files first
Remove-Item -Path "node_modules" -Recurse -ErrorAction SilentlyContinue
Remove-Item -Path "dist" -Recurse -ErrorAction SilentlyContinue

# Create manifest file
$manifestContent = @"
Backup created on: $(Get-Date)
Project: $projectName
"@

if (Test-Path ".git") {
    $gitCommit = git rev-parse HEAD
    $manifestContent += "`nGit commit: $gitCommit"
}

$manifestContent += "`n`nProduction Dependencies:`n"
$manifestContent += (npm list --prod)

$manifestContent | Out-File "$backupDir\backup_manifest.txt"

# Backup environment file if it exists
if (Test-Path ".env") {
    Copy-Item ".env" -Destination "$backupDir\env_backup"
}

# Create the zip backup (excluding unnecessary files)
Compress-Archive -Path . -DestinationPath "$backupDir\project_files.zip" -Force

Write-Host "Backup completed successfully!" -ForegroundColor Green
Write-Host "Backup location: $backupDir" -ForegroundColor Yellow

# To restore:
# 1. Create new directory
# 2. Extract project_files.zip
# 3. Copy env_backup to .env
# 4. Run npm install