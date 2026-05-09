# BarakaWay global PRO theme injection
# Run from the folder containing your HTML files.
# It injects global theme files into every HTML page if they are missing.

$ErrorActionPreference = "Stop"

$root = Get-Location
$htmlFiles = Get-ChildItem -Path $root -Filter "*.html" -Recurse

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $changed = $false

    if ($content -notmatch 'theme-universal\.css') {
        $content = $content -replace '</head>', '  <link rel="stylesheet" href="theme-universal.css">' + "`r`n" + '</head>'
        $changed = $true
    }

    if ($content -notmatch 'theme-init\.js') {
        $content = $content -replace '</body>', '  <script src="theme-init.js"></script>' + "`r`n" + '</body>'
        $changed = $true
    }

    if ($content -notmatch 'bottom-nav\.js') {
        $content = $content -replace '</body>', '  <script src="bottom-nav.js"></script>' + "`r`n" + '</body>'
        $changed = $true
    }

    if ($changed) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        Write-Host "Updated:" $file.FullName
    }
}

Write-Host "Done. Global PRO theme files injected."
