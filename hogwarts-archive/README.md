# The Hogwarts Archive

A standalone, GitHub Pages–ready trivia site — a companion to your Sorting Hat
site. Pure HTML/CSS/JS, no build step, no dependencies.

## What's in the box

```
hogwarts-archive/
├── index.html      the whole app shell (4 screens: letter, mode select, quiz, results)
├── style.css       parchment/candlelit theme, fully responsive
├── script.js       the question bank + all quiz logic
├── assets/         empty folders (parchment/, sounds/, images/) if you want to
│                   drop in your own textures, a page-turn sound effect, etc.
│                   Nothing currently references files in here — it's optional.
└── README.md       this file
```

## Deploying to GitHub Pages

1. Copy the whole `hogwarts-archive/` folder into your existing repo (or a new
   one) — e.g. as a subfolder, or as the repo root if this will be its own site.
2. Commit and push.
3. In the repo's **Settings → Pages**, set the source to the branch/folder you
   put this in (e.g. `main` / `/root` or `main` / `/hogwarts-archive` if you
   used **Project Pages with a subfolder** — GitHub Pages only serves from the
   repo root or `/docs`, so if you want it at a path like `/hogwarts-archive`,
   either make it its own repo, or use a redirect page).
4. Visit the published URL. That's it — no build process, no npm install.

If you want it linked from your existing Sorting Hat site, just add a link
to wherever this folder ends up.

## How the three trials differ

This was built so O.W.L. / N.E.W.T. / Headmaster's Trial are **genuinely
different exams**, not the same questions in different quantities:

| Mode | Difficulty tier pulled from bank | Target questions | Timer default |
|---|---|---|---|
| O.W.L. | `diff: 1` | 20 | 45s/question (optional) |
| N.E.W.T. | `diff: 2` | 50 | 35s/question (optional) |
| Headmaster's Trial | `diff: 3` | 100 | 25s/question (optional) |

Each mode only ever draws from its own difficulty tier, so a player who
retakes the O.W.L. will still get O.W.L.-level questions, never a Trial-level
one, and vice versa.

**Current state:** the bank ships with 126 hand-checked questions (44 O.W.L. /
44 N.E.W.T. / 38 Trial), covering all seven books — main characters, minor
but important ones (Bathilda Bagshot, Griselda Marchbanks, Grawp), spells,
potions, creatures, Hogwarts history and the founders, magical objects and
Hallows, Quidditch, and wizarding law and culture. The engine is written to
support the full 20/50/100 targets — once a tier has enough questions, that
mode will automatically stop repeating and serve a fresh set every time.
Until then, if a tier has fewer questions than the mode's target (currently
true for N.E.W.T. and Headmaster's Trial), the engine cycles through that
tier's pool (reshuffled) rather than crashing or padding with blanks, so the
site is fully playable today while the bank grows.

A note on "everything": the Harry Potter canon (seven books, eight films, and
supplementary material) contains thousands of individually quizzable facts.
No question bank is ever literally complete — but 126 carefully verified
questions is a genuinely broad first pass, and it's built to keep growing in
the same batches without touching any other file.

## Adding more questions

Everything lives in the `QUESTIONS` array near the top of `script.js`. Add a
new object anywhere in the array — order doesn't matter:

```js
{ id:"o21", cat:"Potions", diff:1,
  q:"Your question text?",
  options:["Right answer", "Wrong 1", "Wrong 2", "Wrong 3"], answer:0,
  explain:"1–3 sentences of story context explaining why this is correct.",
  src:"both" }
```

Field notes:
- `id` — any unique string. Keep a simple prefix convention (`o` = O.W.L.,
  `n` = N.E.W.T., `t` = Trial) if you want it to stay readable.
- `cat` — free text category label. It's used for the tag shown during the
  question *and* for the results-screen category breakdown, so keep spelling
  consistent across questions in the same category (e.g. always
  `"Spells & Charms"`, not sometimes `"Spells"`).
- `diff` — `1`, `2`, or `3`. This is what routes a question into O.W.L.,
  N.E.W.T., or Headmaster's Trial. Nothing else determines mode eligibility.
- `options` — exactly 4 strings. Order doesn't matter; the engine shuffles
  answer position on every render.
- `answer` — the index (0–3) of the correct option **in the array as you
  wrote it above**, before shuffling. The engine handles the shuffle.
- `explain` — shown after the player answers, alongside the correct answer.
- `src` — `"book"`, `"film"`, or `"both"`. Use `"book"` for details that are
  book-only or where the films changed/omitted it; `"film"` for details that
  only exist in the films (rare, but real); `"both"` when book and film agree.

No other file needs to change to add questions — categories, breakdowns, and
achievements are all derived automatically from whatever is in the array.

## Design notes

- Fonts: **IM Fell English SC** (display) + **EB Garamond** (body), loaded
  from Google Fonts in `index.html`. If you want to self-host fonts instead
  (e.g. for offline use), download the `.woff2` files and swap the `<link>`
  tags for a local `@font-face` rule in `style.css`.
- The four screens (`#screen-letter`, `#screen-modes`, `#screen-quiz`,
  `#screen-results`) are all present in the DOM at once; `script.js` toggles
  which one has the `screen--active` class. No routing/frameworks involved.
- Achievements, grade thresholds (O/E/A/P/D/T — the real Hogwarts grading
  scale), and mode timings are all plain config objects near the top of
  `script.js` (`MODES`, `GRADES`) if you want to retune difficulty, timing,
  or scoring bands without touching the engine logic.

## Suggested next iterations

- Expand the bank toward the full 20/50/100 per tier.
- Add real parchment/paper textures or a subtle page-turn sound in
  `assets/` and reference them from `style.css`/`script.js`.
- Add a "review your answers" screen before the final report.
- Persist high scores per mode with `localStorage`.
