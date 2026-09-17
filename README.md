# Academic website

A Jekyll site for a personal academic homepage, built to be hosted free on GitHub Pages.
Content lives in YAML data files, so adding a paper is a five-line edit and nothing else
has to change.

Pages: About, Research, Publications, Talks, Teaching, CV, plus an optional News section.

---

## 1. Put it on GitHub and make it live

The site is already complete. These steps publish it.

**Step 1. Create the repository.**
On GitHub, create a new **public** repository named exactly:

```
mariospapamix.github.io
```

The name must be `<your-github-username>.github.io`. That is what makes it a *user site*
served at `https://<username>.github.io`, with no subdirectory. Do not add a README,
licence, or `.gitignore` when creating it, since this folder already has them.

**Step 2. Push this folder.**
From a terminal, inside this folder:

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/MariosPapamix/mariospapamix.github.io.git
git push -u origin main
```

**Step 3. Turn on Pages.**
In the repository on GitHub: **Settings → Pages → Build and deployment → Source**, choose
**GitHub Actions**. The workflow in `.github/workflows/pages.yml` runs on every push and
deploys the built site.

That is the whole deployment. The first build takes two or three minutes; the **Actions**
tab shows progress. After that the site is at:

```
https://mariospapamix.github.io
```

Every later change is `git add . && git commit -m "..." && git push`, and the site rebuilds
by itself.

> **Simpler fallback.** If the Actions route gives trouble, set **Source** to
> **Deploy from a branch → main → / (root)** instead. GitHub then builds the site with its
> own built-in Jekyll. This site only uses plugins GitHub allows, so it works either way.
> The Actions route is preferred because it uses current Jekyll.

---

## 2. Preview it on your own machine

Optional. Useful if you want to see a change before pushing it. Pick one.

### Option A: Docker, nothing to install but Docker

```bash
docker run --rm -it -v "$PWD":/srv/jekyll -p 4000:4000 jekyll/jekyll:4 \
  jekyll serve --force_polling --host 0.0.0.0
```

Then open <http://localhost:4000>. Edits show up on reload. Stop with `Ctrl-C`.

### Option B: Ruby directly

macOS ships an old Ruby, so install a current one first:

```bash
brew install ruby
echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

Then, inside this folder:

```bash
gem install bundler
bundle install
bundle exec jekyll serve --livereload
```

Open <http://localhost:4000>.

A shortcut for both is in the `Makefile`: `make serve` or `make docker`.

---

## 3. Editing the content

Nearly everything is a data file. You do not need to touch HTML.

### Add a publication

Open `_data/publications.yml`. There are three lists: `published`, `review`, `working`.
Copy an entry, change the fields:

```yaml
  - title: "The title of the paper"
    authors: "Marios Papamichalis, A Coauthor, Another Coauthor"
    year: 2027
    venue: "Journal of the American Statistical Association"
    status: "Under review"        # optional
    note: "12(3), 145-170"        # optional
    award: "Best Paper Award"     # optional
    featured: true                # optional, puts it on the homepage
    abstract: >                   # optional, appears behind a toggle
      One paragraph.
    links:                        # optional
      - label: "arXiv:2605.16398"
        url: "https://arxiv.org/abs/2605.16398"
```

Your own name is bolded automatically wherever it appears in `authors`, as long as it is
written exactly as `name:` in `_config.yml`. Order the list the way you want it to read:
entries appear in file order, not sorted.

### Add a news line

`_data/news.yml`. One entry, two fields, newest at the top. Italics with `*asterisks*`.

### Add a talk

`_data/talks.yml`. One entry per event, with a list of papers or posters underneath.

### Add a course

`_data/teaching.yml`.

### Change the menu

`_data/menu.yml`. Reorder or remove lines. To add News to the menu, append:

```yaml
- title: News
  url: /news/
```

### Edit prose

`index.html` (the About text), `research.md`, `teaching.md`, `cv.md`. Plain Markdown.

### Write a longer post

Create a file in `_posts/` named `2026-10-14-some-slug.md`, starting with:

```
---
title: "Your title"
date: 2026-10-14
---
```

Delete `_posts/2026-09-01-nature-paper-accepted.md`, which is only a sample.

### Change the name, title, email, links

`_config.yml`, the block at the top. Empty fields such as `orcid: ""` are simply not shown,
so fill one in and the link appears in the sidebar.

### Change the colours

`_sass/_base.scss`, the `:root` block for light mode and the block below it for dark mode.
`--accent` is the link and highlight colour. Fonts and layout widths are in
`_sass/_variables.scss`.

---

## 4. Before you announce it

- [ ] **Confirm the site address.** `url:` in `_config.yml` is set to
      `https://mariospapamichalis.github.io`. That address follows the GitHub **username**,
      so it only works once the account is renamed from `MariosPapamix` to
      `mariospapamichalis` under **Settings → Account → Change username**. If the username
      stays as it is, change that one line back to `https://mariospapamix.github.io`.
- [ ] **Replace `files/CV_Papamichalis.pdf`** whenever the CV is updated. Same filename and
      the CV page picks it up. The LaTeX source is beside it as `CV_Papamichalis.tex`, with
      the EvolutionIQ entry removed. It needs `resume.cls` from the original Overleaf
      project to recompile.
- [ ] **Check the author order** in `_data/publications.yml`. Entries taken from the CV's
      "(with ...)" notation were written with your name first. Fix any where that is wrong.
- [ ] **Confirm the NeurIPS year** on the Support-Safe Variational Hybrid Filtering entry.
- [ ] **Confirm the author list** on Decision-Theoretic Robustness for Network Models.
- [ ] **Add your ORCID** in `_config.yml` if you have one.
- [ ] Delete the sample post in `_posts/`.

---

## 5. A custom domain, if you want one

Buy a domain, then create a file named `CNAME` in this folder containing only the domain,
for example `mariospapamichalis.com`. At your registrar, point an `ALIAS`/`ANAME` record at
`mariospapamix.github.io`, or four `A` records at `185.199.108.153`, `185.199.109.153`,
`185.199.110.153`, `185.199.111.153`. Then set the domain under **Settings → Pages** and
tick **Enforce HTTPS**. Also change `url:` in `_config.yml` to the new domain.

---

## 6. What is in here

```
_config.yml              site name, title, contact details, links
Gemfile                  Ruby dependencies for local preview
Makefile                 make serve / make docker / make build

_data/                   all editable content
  menu.yml               navigation
  publications.yml       publications, in three lists
  talks.yml              conference presentations
  teaching.yml           teaching record
  news.yml               short homepage updates

_layouts/                page shells
_includes/               head, sidebar, publication list
_sass/                   design tokens, layout, components
css/main.scss            stylesheet entry point

index.html               About page
research.md              Research page
publications.md          Publications page
talks.md                 Talks page
teaching.md              Teaching page
cv.md                    CV page with embedded PDF
news.md                  News archive
404.html                 not-found page

files/                   CV and statement PDFs
images/                  portrait and favicon
.github/workflows/       automatic build and deploy
```
