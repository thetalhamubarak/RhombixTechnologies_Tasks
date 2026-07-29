# Talha Mubarak — Portfolio

A personal portfolio site styled as a code editor — sidebar file tree, tabs, syntax-highlighted content, and a boot-sequence intro. Built for the Rhombix Technologies Web Development internship (Task 1).


## Preview

The site opens with a short `npm run dev` boot animation, then loads an editor UI. Each "file" in the sidebar is a section of the portfolio:

| File | Section |
|---|---|
| `about.js` | Introduction & background |
| `projects.js` | Featured projects |
| `skills.json` | Technical skills |
| `experience.md` | Work experience |
| `contact.txt` | Contact details |

## Tech Stack

- HTML5
- CSS3 (custom properties, no framework)
- Vanilla JavaScript (no dependencies)

## File Structure

```
portfolio/
├── index.html
├── styles.css
└── script.js
```

## Run Locally

No build step needed — it's a static site.

```bash
git clone https://github.com/thetalhamubarak/portfolio.git
cd portfolio
open index.html
```

Or serve it locally:

```bash
npx serve .
```

## Deploy

Push to GitHub and connect the repo to [Netlify](https://netlify.com), or drag the folder into Netlify's manual deploy.

## Contact

- Email: talhamubarak96@gmail.com
- GitHub: [thetalhamubarak](https://github.com/thetalhamubarak)
- LinkedIn: [talhamubarak96](https://www.linkedin.com/in/talhamubarak96/)
