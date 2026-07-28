const files = [
  { key: "about",      label: "about.js",      dot: "dot-js",   lang: "JavaScript" },
  { key: "projects",   label: "projects.js",   dot: "dot-js",   lang: "JavaScript" },
  { key: "skills",     label: "skills.json",   dot: "dot-json", lang: "JSON" },
  { key: "experience", label: "experience.md", dot: "dot-md",   lang: "Markdown" },
  { key: "contact",    label: "contact.txt",   dot: "dot-txt",  lang: "Plain Text" },
];

const fileTree = document.getElementById('fileTree');
const tabsBar = document.getElementById('tabsBar');

files.forEach(f => {
  fileTree.insertAdjacentHTML('beforeend',
    `<li data-file="${f.key}"><span class="${f.dot}"></span>${f.label}</li>`);
  tabsBar.insertAdjacentHTML('beforeend',
    `<div class="tab" data-file="${f.key}"><span class="${f.dot}"></span>${f.label}<span class="tab-x">×</span></div>`);
});

function openFile(key) {
  const f = files.find(x => x.key === key);
  document.querySelectorAll('.file-tree li, .tab').forEach(el =>
    el.classList.toggle('active', el.dataset.file === key));
  document.querySelectorAll('.pane').forEach(el =>
    el.classList.toggle('active', el.dataset.file === key));
  document.getElementById('crumbFile').textContent = f.label;
  document.getElementById('statusFile').textContent = f.label;
  document.getElementById('statusLang').textContent = f.lang;
}

document.body.addEventListener('click', e => {
  const item = e.target.closest('[data-file]');
  if (item) openFile(item.dataset.file);
});

openFile('about');

const bootLines = [
  "$ npm install talha-portfolio",
  "  added 5 packages in 0.6s",
  "$ npm run dev",
  "  ✓ ready in 214ms",
];
const bootEl = document.getElementById('bootLines');
const bootScreen = document.getElementById('boot');

bootLines.forEach((line, i) => {
  setTimeout(() => {
    bootEl.textContent += (i ? "\n" : "") + line;
    if (i === bootLines.length - 1) setTimeout(() => bootScreen.classList.add('hide'), 350);
  }, i * 260);
});
bootScreen.addEventListener('click', () => bootScreen.classList.add('hide'));

const clock = document.getElementById('clock');
const tick = () => {
  const d = new Date();
  clock.textContent = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
};
tick();
setInterval(tick, 30000);
