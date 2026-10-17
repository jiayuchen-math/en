# Chinese learning routes

Translated 2026-10-18 from English revision
`1b871baf73705a509e48778040ce198095384f0b`.

The existing Learning Paths overview and its twelve direction pages now have
Chinese versions: the original introductions, route goals, stages, preparation
and skip checks, reference locators, illustration labels and page contents.
Direction titles use ordinary subject names. The translations are not separate
essays, new routes or updated mathematical recommendations.

Chinese Markdown lives in `content/route-translations-zh/`; route, preparation
and source-label translations live in `data/translations/routes.mjs`. Original
English records, source dates, book titles, authors, reading URLs, section IDs,
mathematical expressions and illustration coordinates remain unchanged. Chinese
titles are also searchable under the existing guide IDs, without duplicate records.

Both views are rendered by the same functions and switch within the same URL.
The translation data is inert JSON. The existing language control preserves
native disclosure state, and the bookshelf control stays outside the replaced
article. Original English remains available without JavaScript. Existing subject
translations are unchanged.

`test-route-translations.mjs`, called by the existing localization check, compares
paragraph counts, formulas, all source and navigation destinations, heading IDs,
illustration coordinates and reference dates. A fixed English-input digest
requires translation review if a source route changes; the build cannot update it.

This release translates thirteen pages, not the entire website. The linked
reading-practice article, seven editorial guides, encyclopedic prose and catalogue
descriptions not already translated still use their original text.
