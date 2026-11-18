/* Nainezz portfolio: renders the project filters and cards from js/projects.js */

const $ = id => document.getElementById(id);
$('yr').textContent = new Date().getFullYear();
$('projCount').textContent = PROJECTS.length;
$('waBtn').href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Nainezz, I saw your portfolio and I'd like to talk about a project.")}`;

const typeOf = p => p.stack.includes('Flutter') ? 'Mobile' : p.stack.includes('Python') ? 'Python' : 'Web';
let active = 'All';

function renderFilters(){
  const opts = ['All', 'Mobile', 'Web', 'Python'];
  $('filters').innerHTML = opts.map(o => `<button class="chip ${o===active?'on':''}" data-o="${o}">${o === 'Mobile' ? 'Mobile (Flutter)' : o}</button>`).join('');
  $('filters').querySelectorAll('.chip').forEach(b => b.onclick = () => { active = b.dataset.o; renderFilters(); renderProjects(); });
}

function renderProjects(){
  $('projectGrid').innerHTML = PROJECTS.filter(p => active === 'All' || typeOf(p) === active).map((p, i) => `
    <article class="card">
      <div class="thumb"><div class="code"><div class="d"><i></i><i></i><i></i></div>${p.snippet.join('<br>')}</div></div>
      <div class="body">
        ${PROJECTS.indexOf(p) < 3 ? '<span class="feat">Featured</span>' : ''}
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="stack">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>
        <div class="plinks">
          ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener">Live demo ↗</a>` : ''}
          <a href="https://github.com/${GITHUB}/${p.repo}" target="_blank" rel="noopener">View code ↗</a>
        </div>
      </div>
    </article>`).join('');
}

renderFilters();
renderProjects();
