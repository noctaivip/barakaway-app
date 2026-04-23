param(
    [string]$RootPath = ".",
    [switch]$CreateBackups = $true
)

$ErrorActionPreference = "Stop"

function Add-SurahPageClass {
    param([string]$Content)

    if ($Content -match '<body[^>]*class="[^"]*\bsurah-page\b[^"]*"') {
        return $Content
    }

    if ($Content -match '<body[^>]*class="([^"]*)"') {
        return [regex]::Replace(
            $Content,
            '<body([^>]*)class="([^"]*)"',
            {
                param($m)
                $before = $m.Groups[1].Value
                $classes = $m.Groups[2].Value.Trim()
                if ([string]::IsNullOrWhiteSpace($classes)) {
                    '<body' + $before + 'class="surah-page"'
                } else {
                    '<body' + $before + 'class="' + $classes + ' surah-page"'
                }
            },
            1
        )
    }

    return [regex]::Replace($Content, '<body([^>]*)>', '<body$1 class="surah-page">', 1)
}

function Update-AyahIndexes {
    param(
        [string]$Content,
        [string]$SurahNumber
    )

    $content = $Content

    # Dynamic template pages: ${n} -> SURAH:${n}
    $content = $content -replace '<div class="ayah-index">\$\{n\}</div>', ('<div class="ayah-index">' + $SurahNumber + ':${n}</div>')

    # Static pages: 1 -> SURAH:1, but avoid already converted values like 2:255
    $content = [regex]::Replace(
        $content,
        '<div class="ayah-index">(?!' + [regex]::Escape($SurahNumber) + ':\d+)(\d+)</div>',
        {
            param($m)
            '<div class="ayah-index">' + $SurahNumber + ':' + $m.Groups[1].Value + '</div>'
        }
    )

    return $content
}

$files = Get-ChildItem -Path $RootPath -Recurse -File -Filter *.html |
    Where-Object { $_.Name -match '^\d+\s*-' }

if (-not $files) {
    Write-Host "No surah HTML files found."
    exit 0
}

$updated = 0

foreach ($file in $files) {
    if ($file.Name -notmatch '^(\d+)\s*-') { continue }

    $surahNumber = $Matches[1]
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $original = $content

    $content = Add-SurahPageClass -Content $content
    $content = Update-AyahIndexes -Content $content -SurahNumber $surahNumber

    if ($content -ne $original) {
        if ($CreateBackups) {
            $backupPath = $file.FullName + ".bak"
            if (-not (Test-Path $backupPath)) {
                Copy-Item -Path $file.FullName -Destination $backupPath
            }
        }

        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        $updated++
        Write-Host "Updated: $($file.FullName)"
    }
}

Write-Host ""
Write-Host "Done. Updated files: $updated"
Write-Host "Next step: replace root theme-universal.css with theme-universal-final.css"