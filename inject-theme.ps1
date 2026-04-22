$root = Get-Location
$htmlFiles = Get-ChildItem -Path $root -Filter *.html -File

$headInsert = @'
<script src="theme-init.js"></script>
<link rel="stylesheet" href="theme.css">
'@

$bodyInsert = @'
<script src="theme-toggle.js"></script>
'@

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8

    if ($content -notmatch 'theme-init\.js') {
        $content = $content -replace '</head>', "$headInsert`r`n</head>"
    }

    if ($content -match 'id="themeSwitch"' -and $content -notmatch 'theme-toggle\.js') {
        $content = $content -replace '</body>', "$bodyInsert`r`n</body>"
    }

    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}