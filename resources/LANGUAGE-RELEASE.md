# English / Simplified Chinese interface — 2026-10-17

One shared set of pages, records and stable IDs remains the source of truth. The
right-hand language control updates the current page without clearing query,
filter, page, fragment, reading progress or document-local application answers.
`lang=en` / `lang=zh` is shareable; an explicit URL wins over the browser-local
preference. English is the default on a first visit, regardless of browser locale.

## Scope

- Curated interface labels cover navigation, search, filters, access categories,
  themes, directory actions, reading controls and background-input labels.
- Seven existing short guides and three pilot subject entrances have Chinese
  reading companions. These are labelled editorial companions, not full or
  sentence-by-sentence translations. Original sources and English text remain.
- Record titles, author names, quoted institutional requirements, amounts, source
  dates, mathematical article bodies and authored course files are not translated
  automatically. The Chinese interface explicitly identifies untranslated material.
- External links and download URLs are not rewritten with a language parameter.
  The pre-existing independent `/zh` website is not linked or modified.

## Behavior and limits

The client script changes only identified interface scopes and explicit companion
panels. It does not contact a translation service. Select values remain canonical
English data values even when their visible labels are Chinese. Only the language
preference is stored; application answers remain document-local as before.

JavaScript is required for language switching; without it, complete English pages
remain readable and the Chinese control is not offered as a non-working button.
This is not a full Chinese edition of every catalogue description or article.

Checks cover language/history restoration, form and filter preservation, source
protection, dynamically added controls and details, display widths, themes,
blocked storage, native English fallback, repeated builds and source URLs.
