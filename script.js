
const { events, companies, references, people } = window.TIMELINE_DATA;

const fallbackSvgs = {
  portrait: `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><circle cx="400" cy="232" r="92" fill="#121722" opacity=".9"/><path d="M224 520c32-112 116-170 176-170s144 58 176 170" fill="#121722" opacity=".9"/><path d="M174 152c110-70 342-88 468 18" fill="none" stroke="#246bfe" stroke-width="12" stroke-linecap="round" opacity=".24"/><path d="M178 456c154 62 316 58 448-16" fill="none" stroke="#d84f93" stroke-width="12" stroke-linecap="round" opacity=".2"/></svg>`)}`,
  logo: `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect x="180" y="170" width="440" height="260" rx="34" fill="#121722" opacity=".92"/><g fill="none" stroke="#fff" stroke-width="12" stroke-linecap="round" opacity=".82"><path d="M260 250h280M260 302h210M260 354h250"/></g><circle cx="580" cy="214" r="44" fill="#08a66c"/></svg>`)}`,
  diagram: `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><g stroke="#246bfe" stroke-width="8" fill="none"><path d="M160 180C280 80 520 80 640 180M160 300c120-100 360-100 480 0M160 420c120-100 360-100 480 0"/></g><g fill="#121722"><circle cx="160" cy="180" r="28"/><circle cx="400" cy="130" r="28"/><circle cx="640" cy="180" r="28"/><circle cx="160" cy="300" r="28"/><circle cx="400" cy="300" r="28"/><circle cx="640" cy="300" r="28"/><circle cx="160" cy="420" r="28"/><circle cx="400" cy="470" r="28"/><circle cx="640" cy="420" r="28"/></g></svg>`)}`,
  icon: `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><text x="400" y="340" font-size="220" text-anchor="middle">AI</text><text x="400" y="470" font-family="Arial" font-size="42" font-weight="700" text-anchor="middle" fill="#7b61ff">Winter</text></svg>`)}`,
  concept: `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><g fill="none" stroke-linecap="round"><path d="M188 382c82-142 262-200 424-116" stroke="#246bfe" stroke-width="12" opacity=".34"/><path d="M214 230c142-70 280-48 386 66" stroke="#d84f93" stroke-width="12" opacity=".32"/><path d="M250 420c120 52 260 48 356-30" stroke="#08a66c" stroke-width="12" opacity=".36"/></g><g fill="#121722"><circle cx="270" cy="252" r="25"/><circle cx="396" cy="190" r="30"/><circle cx="532" cy="262" r="25"/><circle cx="242" cy="396" r="30"/><circle cx="404" cy="344" r="38"/><circle cx="574" cy="404" r="30"/></g><g stroke="#121722" stroke-width="8" opacity=".62"><path d="M270 252 396 190 532 262 404 344 242 396 270 252M404 344l170 60M404 344l-8-154"/></g></svg>`)}`,
  hardware: `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect x="190" y="150" width="420" height="300" rx="30" fill="#121722"/><rect x="250" y="210" width="300" height="150" rx="16" fill="#246bfe"/><g fill="#121722"><rect x="160" y="210" width="30" height="25"/><rect x="160" y="280" width="30" height="25"/><rect x="160" y="350" width="30" height="25"/><rect x="610" y="210" width="30" height="25"/><rect x="610" y="280" width="30" height="25"/><rect x="610" y="350" width="30" height="25"/></g></svg>`)}`
};

const accentMap = {
  blue:"#246bfe", indigo:"#635bff", green:"#1f9d6b", purple:"#7b61ff", orange:"#d8832f",
  teal:"#008f9c", cyan:"#00a5c8", emerald:"#08a66c", pink:"#d84f93", red:"#df4c45", black:"#171923"
};

const timelineContent = document.getElementById("timelineContent");
const yearRail = document.getElementById("yearRail");
const timelineEra = document.getElementById("timelineEra");
let activeTimelineIndex = -1;
let activeTimelineRow = null;
let timelineAnchors = [];
let timelineTicking = false;

function imgFallback(type){ return fallbackSvgs[type] || fallbackSvgs.concept; }

function escapeHtml(value){
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[char]));
}

function renderTimeline(){
  let html = "";
  events.forEach((event, index) => {
    const color = accentMap[event.accent] || accentMap.blue;
    html += `
      <article class="event-row" id="event-${index}" data-index="${index}" data-era="${event.era}" style="--event-color:${color};--stack-index:${index + 1}">
        <div class="dot" aria-hidden="true"></div>
        <div class="event-card" role="button" tabindex="0" onclick="openDetail(${index})" onkeypress="if(event.key==='Enter')openDetail(${index})">
          <div class="image-wrap ${event.imageType}">
            <img src="${event.image}" alt="${event.title}" loading="lazy" onerror="this.onerror=null;this.src='${imgFallback(event.imageType)}'">
          </div>
          <div class="event-body">
            <p class="meta">${event.year} · ${event.era}</p>
            <h3>${event.title}</h3>
            <p class="sub">${event.subtitle}</p>
            <p class="why">${event.why}</p>
            <ul class="bullets">${event.details.slice(0,3).map(x=>`<li>${x}</li>`).join("")}</ul>
            <div class="tags">${event.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
          </div>
        </div>
      </article>`;
  });
  timelineContent.innerHTML = html;
  yearRail.innerHTML = `<a class="year-focus" href="#event-0" aria-label=""></a>`;
  renderYearFocus(0);
}

function renderYearFocus(index){
  const event = events[index];
  if(!event) return;
  const color = accentMap[event.accent] || accentMap.blue;
  const yearFocus = yearRail.querySelector(".year-focus");
  if(yearFocus){
    yearFocus.href = `#event-${index}`;
    yearFocus.style.setProperty("--event-color", color);
    yearFocus.setAttribute("aria-label", `${event.year}: ${event.title}`);
    if(yearFocus.textContent.trim() !== event.year) yearFocus.textContent = event.year;
  }
  timelineEra.textContent = event.era;
}

function setActiveTimeline(index){
  if(index === activeTimelineIndex) return;
  if(activeTimelineRow) activeTimelineRow.classList.remove("is-active");
  activeTimelineRow = document.getElementById(`event-${index}`);
  if(activeTimelineRow) activeTimelineRow.classList.add("is-active");
  activeTimelineIndex = index;
  renderYearFocus(index);
}

function measureTimelineAnchors(){
  timelineAnchors = [...document.querySelectorAll(".event-row")].map(row => ({
    index: Number(row.dataset.index),
    top: row.getBoundingClientRect().top + window.scrollY
  }));
}

function updateTimelineFromScroll(){
  timelineTicking = false;
  if(!timelineAnchors.length) measureTimelineAnchors();
  const marker = window.scrollY + 170;
  let nextIndex = timelineAnchors[0]?.index || 0;
  for(const anchor of timelineAnchors){
    if(anchor.top <= marker) nextIndex = anchor.index;
    else break;
  }
  setActiveTimeline(nextIndex);
  updateTimelineEraVisibility();
}

function updateTimelineEraVisibility(){
  const lastCard = document.querySelector(`#event-${events.length - 1} .event-card`);
  if(!lastCard) return;
  const rect = lastCard.getBoundingClientRect();
  timelineEra.classList.toggle("is-hidden", rect.top <= -rect.height / 2);
}

function requestTimelineUpdate(){
  if(timelineTicking) return;
  timelineTicking = true;
  requestAnimationFrame(updateTimelineFromScroll);
}

function renderCompanies(){
  const mount = document.getElementById("companyGrid");
  mount.innerHTML = `
    <details class="entity-list" open>
      <summary>Company achievements</summary>
      <div class="entity-rows">
        ${companies.map(c => `
          <article class="entity-row">
            <h3>${escapeHtml(c.name)}</h3>
            <p>${escapeHtml(c.role)}</p>
          </article>
        `).join("")}
      </div>
    </details>`;
}

function renderPeople(){
  const mount = document.getElementById("peopleGrid");
  if(!mount || !people) return;
  mount.innerHTML = `
    <details class="entity-list" open>
      <summary>People achievements</summary>
      <div class="entity-rows">
        ${people.map(p => `
          <article class="entity-row">
            <h3>${escapeHtml(p.name)}</h3>
            <p>${escapeHtml(p.breakthrough)}</p>
          </article>
        `).join("")}
      </div>
    </details>`;
}

function renderReferences(){
  const list = references.map(r => `
    <li class="reference-item">
      ${escapeHtml(r.name)}
      <a href="${r.url}" target="_blank" rel="noreferrer">${r.url}</a>
    </li>
  `).join("");
  document.getElementById("referenceList").innerHTML = `
    <details class="references-toggle" open>
      <summary>Reference list</summary>
      <ol class="reference-items">${list}</ol>
    </details>`;
}

function openDetail(index){
  const e = events[index];
  const dialog = document.getElementById("detailDialog");
  document.getElementById("dialogImage").src = e.image;
  document.getElementById("dialogImage").onerror = function(){ this.onerror=null; this.src=imgFallback(e.imageType); };
  document.getElementById("dialogImage").alt = e.title;
  document.getElementById("dialogMeta").textContent = `${e.year} · ${e.era}`;
  document.getElementById("dialogTitle").textContent = e.title;
  document.getElementById("dialogSubtitle").textContent = e.subtitle;
  document.getElementById("dialogWhy").textContent = e.why;
  document.getElementById("dialogDetails").innerHTML = e.details.map(d => `<li>${d}</li>`).join("");
  dialog.showModal();
}

document.getElementById("closeDialog").addEventListener("click", () => document.getElementById("detailDialog").close());

renderTimeline();
renderCompanies();
renderPeople();
renderReferences();
setActiveTimeline(0);
measureTimelineAnchors();
updateTimelineFromScroll();
window.addEventListener("scroll", requestTimelineUpdate, {passive:true});
window.addEventListener("resize", () => {
  measureTimelineAnchors();
  requestTimelineUpdate();
});
