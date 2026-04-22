$root = Get-Location
$htmlFiles = Get-ChildItem -Path $root -Filter *.html -File -Recurse

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8

    if ($content -notmatch 'theme-universal\.css') {
        if ($content -match '<link rel="stylesheet" href="theme\.css">') {
            $content = $content -replace '(<link rel="stylesheet" href="theme\.css">\s*)', "$1<link rel=`"stylesheet`" href=`"theme-universal.css`">`r`n"
        }
        elseif ($content -match '</head>') {
            $content = $content -replace '</head>', "<script src=`"theme-init.js`"></script>`r`n<link rel=`"stylesheet`" href=`"theme.css`">`r`n<link rel=`"stylesheet`" href=`"theme-universal.css`">`r`n</head>"
        }
    }

    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}