$root = Get-Location
$htmlFiles = Get-ChildItem -Path $root -Filter *.html -File -Recurse

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8

    $content = $content -replace 'src="theme-init\.js"', 'src="/theme-init.js"'
    $content = $content -replace "src='theme-init\.js'", "src='/theme-init.js'"

    $content = $content -replace 'href="theme\.css"', 'href="/theme.css"'
    $content = $content -replace "href='theme\.css'", "href='/theme.css'"

    $content = $content -replace 'href="theme-universal\.css"', 'href="/theme-universal.css"'
    $content = $content -replace "href='theme-universal\.css'", "href='/theme-universal.css'"

    $content = $content -replace 'src="theme-toggle\.js"', 'src="/theme-toggle.js"'
    $content = $content -replace "src='theme-toggle\.js'", "src='/theme-toggle.js'"

    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
    Write-Host "FIXED:" $file.FullName
}