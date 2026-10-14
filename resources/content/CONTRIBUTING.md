## Write an explanation, not an advertisement

This collection connects English mathematical explanations with Chinese terminology. Start from a precise concept and its context. Contributions are proposed through GitHub pull requests and published after editorial approval, not immediately when a visitor submits a change.

## Editing an existing entry

Use **Edit source / propose a PR** on the entry. GitHub will guide you through editing the Markdown article or terminology JSON and proposing the change. Include the mathematical reason for your correction, the source and its exact section, theorem or entry. You need a GitHub account to propose a PR; reading the website does not require an account.

Use **Report a correction** when you prefer to explain the issue without editing source files. Do not put private correspondence or unpublished personal information in a public issue.

## Adding a new entry

Follow the [content schema](https://github.com/jiayuchen-math/en/blob/main/resources/content/SCHEMA.md). Use one semantic concept ID, with separate IDs for genuinely different senses. A spelling variant, acronym or Traditional Chinese rendering belongs in aliases rather than a second record. Add an encyclopedia article only when there is a substantial explanation; a terminology entry can stand alone with its own sources.

An encyclopedia article includes: Overview; Prerequisites; Definition and conventions; Intuition; Examples and non-examples; Important properties; Connections and further reading. State hypotheses before a theorem, specify conventions and work out an example. Label a proof sketch as a sketch. A research introduction should describe its scope rather than pretending to construct a theory in a few paragraphs.

## Sources and translation evidence

Cite author or university texts with an exact section or theorem locator. Mathematical definition evidence and evidence of a Chinese translation are separate: an English textbook alone does not establish a Chinese term. Cite a normative terminology entry, a Chinese textbook or author notes where possible. Community usage may be recorded as community usage. Competing translations should carry their contexts and sources.

Use your own explanations. Link to source documents rather than reproducing their prose, diagrams or exercises. Inspection dates refer to the sources actually read. Unchecked material stays a draft and is not included in published entry counts.

## Format and mathematical notation

Articles use Markdown with JSON front matter. Write inline formulas with single dollar delimiters and display formulas with double dollar delimiters on separate lines. Standard KaTeX commands are supported. Do not use HTML, scripts, custom TeX macros or executable material in an entry. Formulas are rendered when the site is built, including for readers without JavaScript.

## Attribution and licensing

Attribute contributors accurately. Disclose AI-assisted drafting in contributor metadata; source-checking is not a claim of external peer review. Do not attach the site owner's name as the author of text they did not write.

By proposing new original text for these two sections, contributors offer it under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Retain attribution when adapting compatible licensed material. This licence applies to new encyclopedia and terminology content, not existing personal notes, external textbooks, source quotations or the entire website. Dependency licences remain with their respective packages.

## Review checklist

The maintainer runs `npm ci --prefix resources --ignore-scripts`, `node resources/build.mjs`, and the knowledge checks, then commits the generated static pages before merging or publishing. The GitHub check validates source changes with read-only repository permissions; it does not auto-merge a contribution or write to a contributor's branch.

- Correct definition, conventions and theorem assumptions.
- Useful example and an accurate distinction or non-example.
- Inspectable mathematical and translation sources with concrete locators.
- Stable concept ID, valid subject and level, and truthful aliases.
- No duplicated sense, invented citation, private material or unsupported standardization claim.
- Successful content, formula, search and internal-link checks before publication.
