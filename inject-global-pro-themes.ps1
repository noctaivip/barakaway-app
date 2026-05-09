# BarakaWay PRO Themes: safe global injection
# Запускать из корня приложения, где лежат HTML-страницы.
# Скрипт не меняет контент страниц, только добавляет подключения theme-universal.css и theme-init.js, если их нет.

$ErrorActionPreference = "Stop"

$Root = Get-Location
$Backup = Join-Path $Root ("backup-before-pro-themes-" + (Get-Date -Format "yyyyMMdd-HHmmss"))

New-Item -ItemType Directory -Path $Backup | Out-Null

$HtmlFiles = Get-ChildItem -Path $Root -Filter "*.html" -Recurse
$Changed = 0

foreach ($File in $HtmlFiles) {
    $Relative = Resolve-Path -Relative $File.FullName
    $BackupFile = Join-Path $Backup $Relative
    $BackupDir = Split-Path $BackupFile -Parent

    if (!(Test-Path $BackupDir)) {
        New-Item -ItemType Directory -Path $BackupDir -Force | Out-Null
    }

    Copy-Item $File.FullName $BackupFile -Force

    $Content = Get-Content $File.FullName -Raw -Encoding UTF8
    $Original = $Content

    if ($Content -notmatch 'theme-universal\.css') {
        $Content = $Content -replace '</head>', "  <link rel=`"stylesheet`" href=`"theme-universal.css`">`r`n</head>"
    }

    if ($Content -notmatch 'theme-init\.js') {
        $Content = $Content -replace '</body>', "  <script src=`"theme-init.js`"></script>`r`n</body>"
    }

    if ($Content -ne $Original) {
        Set-Content -Path $File.FullName -Value $Content -Encoding UTF8
        $Changed++
        Write-Host "Updated:" $File.FullName
    }
}

Write-Host "Done. HTML files scanned:" $HtmlFiles.Count
Write-Host "Changed:" $Changed
Write-Host "Backup:" $Backup
