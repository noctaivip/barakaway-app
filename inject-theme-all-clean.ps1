$root = Get-Location
$htmlFiles = Get-ChildItem -Path $root -Filter *.html -File -Recurse

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8

    # Удаляем все старые и дублирующиеся подключения темы
    $content = $content -replace '(?is)<script\s+src="theme-init\.js"></script>\s*', ''
    $content = $content -replace '(?is)<link\s+rel="stylesheet"\s+href="theme\.css">\s*', ''
    $content = $content -replace '(?is)<link\s+rel="stylesheet"\s+href="theme-universal\.css">\s*', ''

    # Собираем единый правильный блок
    $themeBlock = @'
<script src="theme-init.js"></script>
<link rel="stylesheet" href="theme.css">
<link rel="stylesheet" href="theme-universal.css">
'@

    # Вставляем перед </head>
    if ($content -match '</head>') {
        $content = $content -replace '(?is)</head>', "$themeBlock`r`n</head>"
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        Write-Host "UPDATED:" $file.FullName
    }
    else {
        Write-Host "SKIPPED (no </head>):" $file.FullName
    }
}