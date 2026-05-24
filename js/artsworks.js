/* ============================================================
   artsworks.js — project data + filter + search
   ============================================================ */

const PROJECTS = [
  /* ========== HASTARI CORP ========== */
  {
    company:      'Hastari Corporation',
    companyColor: '#8B1A1A',
    label:        'My Works for',
    title:        'Employer Branding & Social Media Communication',
    desc:         'Merancang identitas baru untuk tampilan media sosial perusahaan melalui strategi employer branding — dari konsep hingga eksekusi konten.',
    tools:        ['Adobe Illustrator', 'Figma', 'Adobe Photoshop'],
    handle:       '@lifeathastari',
    handleLink:   'https://instagram.com/lifeathastari',
    cats:         ['social-media', 'design'],
    icon:         'social',
  },
  {
    company:      'Hastari Corporation',
    companyColor: '#8B1A1A',
    label:        'My Works for',
    title:        'Employee Engagement & Internal Communication Strategy',
    desc:         'Memimpin program komunikasi internal end-to-end, mencakup event, kampanye, dan materi komunikasi untuk meningkatkan keterlibatan karyawan.',
    tools:        ['Event Management', 'Digital Content', 'Internal Publications'],
    handle:       null,
    cats:         ['corporate-comm'],
    icon:         'engagement',
  },
  {
    company:      'Hastari Corporation',
    companyColor: '#8B1A1A',
    label:        'My Works for',
    title:        'Event Execution & Engagement Activities',
    desc:         'Merancang dan mengeksekusi corporate events serta program internal end-to-end, mendorong employee engagement dan memperkuat budaya perusahaan.',
    tools:        ['Event Planning', 'Project Management', 'Communication Strategy'],
    handle:       null,
    cats:         ['events', 'corporate-comm'],
    icon:         'event',
  },
  {
    company:      'Hastari Corporation',
    companyColor: '#8B1A1A',
    label:        'My Works for',
    title:        'Kabar Hastari — Internal Magazine',
    desc:         'Menginisiasi dan mengelola produksi majalah internal perusahaan — dari konsep editorial, penulisan, hingga layout dan cetak.',
    tools:        ['Adobe Illustrator', 'Adobe Photoshop'],
    handle:       null,
    cats:         ['design', 'corporate-comm'],
    icon:         'magazine',
  },
  {
    company:      'Hastari Corporation',
    companyColor: '#8B1A1A',
    label:        'My Works for',
    title:        'Video Production — YouTube & Instagram Reels',
    desc:         'Memproduksi konten video untuk employer branding perusahaan di YouTube dan Instagram Reels.',
    tools:        ['Adobe Premiere Pro', 'Adobe After Effects', 'Adobe Illustrator'],
    handle:       '@lifeathastari',
    handleLink:   'https://instagram.com/lifeathastari',
    cats:         ['video'],
    icon:         'video',
  },
  {
    company:      'Hastari Corporation',
    companyColor: '#8B1A1A',
    label:        'My Works for',
    title:        'Corporate Presentation & Communication Materials',
    desc:         'Merancang template PowerPoint dan materi komunikasi untuk kebutuhan meeting internal dan eksternal perusahaan.',
    tools:        ['Microsoft PowerPoint', 'Adobe Stock', 'Adobe Illustrator'],
    handle:       null,
    cats:         ['design', 'corporate-comm'],
    icon:         'presentation',
  },

  /* ========== PwC INDONESIA ========== */
  {
    company:      'PwC Indonesia',
    companyColor: '#D06800',
    label:        'My Works for',
    title:        'Social Media Communication',
    desc:         'Mendesain visual content dan work programs untuk media sosial PwC Indonesia — graphic design, photo editing, layout & typography.',
    tools:        ['Adobe Illustrator'],
    handle:       '@pwc_indonesia',
    handleLink:   'https://instagram.com/pwc_indonesia',
    cats:         ['social-media', 'design'],
    icon:         'social',
  },
  {
    company:      'PwC Indonesia',
    companyColor: '#D06800',
    label:        'My Works for',
    title:        'Corporate PowerPoint Design',
    desc:         'Merancang materi presentasi PowerPoint yang profesional untuk kebutuhan meeting internal dan eksternal.',
    tools:        ['Microsoft PowerPoint', 'Adobe Stock'],
    handle:       null,
    cats:         ['design', 'corporate-comm'],
    icon:         'presentation',
  },
  {
    company:      'PwC Indonesia',
    companyColor: '#D06800',
    label:        'My Works for',
    title:        'Video Production for PwC Content',
    desc:         'Memproduksi konten video untuk branding PwC di Instagram dan YouTube, termasuk seri Leader\'s Insight dan employee stories.',
    tools:        ['Adobe Premiere Pro', 'Adobe After Effects', 'Adobe Illustrator'],
    handle:       '@pwc_indonesia',
    handleLink:   'https://instagram.com/pwc_indonesia',
    cats:         ['video'],
    icon:         'video',
  },

  /* ========== HUMAS UPI ========== */
  {
    company:      'Kantor Humas UPI',
    companyColor: '#A07000',
    label:        'My Project at',
    title:        'Instagram Reels Production',
    desc:         'Mengedit video konten organik untuk Instagram @upiofficial — mencakup wisuda, acara kampus, dan highlight institusi.',
    tools:        ['Adobe Premiere Pro', 'Adobe Photoshop'],
    handle:       '@upiofficial',
    handleLink:   'https://instagram.com/upiofficial',
    cats:         ['video', 'social-media'],
    icon:         'video',
  },
  {
    company:      'Kantor Humas UPI',
    companyColor: '#A07000',
    label:        'My Project at',
    title:        'UPI Podcast Production',
    desc:         'Produksi podcast video UPI secara menyeluruh — dari perencanaan, pengambilan gambar, hingga editing. Termasuk seri Pikir Pakar dan BIBIR.',
    tools:        ['VMIX', 'Adobe Premiere Pro', 'Adobe Audition', 'Adobe Photoshop'],
    handle:       '@upiofficial',
    handleLink:   'https://youtube.com/@upiofficial',
    cats:         ['video'],
    icon:         'podcast',
  },
  {
    company:      'Kantor Humas UPI',
    companyColor: '#A07000',
    label:        'My Project at',
    title:        'Majalah UPI',
    desc:         'Produksi majalah resmi universitas — desain layout, editing foto, dan arahan visual editorial.',
    tools:        ['Corel Draw', 'Adobe Photoshop'],
    handle:       null,
    cats:         ['design', 'corporate-comm'],
    icon:         'magazine',
  },

  /* ========== OTHERS ========== */
  {
    company:      'MRO Indonesia',
    companyColor: '#8B0000',
    label:        'My Project at',
    title:        'Social Media Graphic Design',
    desc:         'Merancang konten media sosial informatif untuk MRO Indonesia — meliputi topik industri, tips manufaktur, dan company news.',
    tools:        ['Corel Draw', 'Adobe Illustrator'],
    handle:       '@mro.indonesia',
    handleLink:   'https://instagram.com/mro.indonesia',
    cats:         ['social-media', 'design'],
    icon:         'social',
  },
  {
    company:      'GenBI UPI',
    companyColor: '#003A99',
    label:        'My Project at',
    title:        'Graphic Design — Social Media',
    desc:         'Membuat konten media sosial menarik untuk GenBI UPI — kampanye hari nasional, program komunitas, dan konten edukasi.',
    tools:        ['Corel Draw', 'Adobe Illustrator'],
    handle:       '@genbiupi',
    handleLink:   'https://instagram.com/genbiupi',
    cats:         ['social-media', 'design'],
    icon:         'social',
  },
  {
    company:      'Canon Indonesia',
    companyColor: '#CC0000',
    label:        'Academic Project for',
    title:        'Marketing Public Relations Strategy',
    desc:         'Merancang strategi marketing komprehensif untuk komunitas fotografer Canon Indonesia — termasuk konsep event dan rencana komunikasi strategis.',
    tools:        ['Microsoft PowerPoint', 'Market Research', 'Strategic Communication'],
    handle:       null,
    cats:         ['corporate-comm'],
    icon:         'strategy',
  },
];

/* ============================================================
   ICON SVG MAP
   ============================================================ */
const ICONS = {
  social: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/></svg>`,
  video:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>`,
  podcast:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h1v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-2v8h1c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/></svg>`,
  magazine:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>`,
  engagement:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`,
  event:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>`,
  presentation:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2l-4-4h3V7h2v6h3l-4 4z"/></svg>`,
  strategy:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>`,
};

const CAT_LABELS = {
  'social-media':   'Social Media',
  'video':          'Video',
  'design':         'Design',
  'corporate-comm': 'Corporate Comm',
  'events':         'Events',
};

/* ============================================================
   RENDER
   ============================================================ */
function buildCard(p) {
  const handleHTML = p.handle
    ? `<a href="${p.handleLink || '#'}" target="_blank" class="p-handle" style="background:${p.companyColor}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        ${p.handle}
       </a>`
    : '';

  const toolsHTML = p.tools.map(t => `<span class="p-tool">${t}</span>`).join('');
  const catsHTML  = p.cats.map(c => `<span class="p-cat">${CAT_LABELS[c] || c}</span>`).join('');

  const visualBg  = p.companyColor + '18'; /* 10% opacity */
  const iconSvg   = ICONS[p.icon] || ICONS.social;

  return `
    <article class="p-card reveal" data-cats="${p.cats.join(' ')}">
      <div class="p-left">
        <div>
          <p class="p-label">${p.label}</p>
          <p class="p-company" style="color:${p.companyColor}">${p.company}</p>
          <p class="p-title">${p.title}</p>
        </div>
        <p class="p-desc">${p.desc}</p>
        <div class="p-tools">${toolsHTML}</div>
        <div class="p-cats">${catsHTML}</div>
        ${handleHTML}
      </div>
      <div class="p-right">
        <div class="p-visual" style="background:${visualBg}">
          <div class="p-visual-icon" style="background:${p.companyColor}20;color:${p.companyColor}">
            ${iconSvg}
          </div>
          <span class="p-visual-label">${p.company}</span>
        </div>
      </div>
    </article>
  `;
}

function renderProjects(list) {
  const container = document.getElementById('projects-list');
  const empty     = document.getElementById('arts-empty');
  if (!container) return;

  container.innerHTML = list.map(buildCard).join('');
  empty.classList.toggle('visible', list.length === 0);

  /* re-observe new reveal elements */
  container.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.05}s`;
    revealObserver.observe(el);
  });
}

/* ============================================================
   FILTER & SEARCH
   ============================================================ */
let activeFilter = 'all';
let searchQuery  = '';

function applyFilter() {
  let result = PROJECTS;

  if (activeFilter !== 'all') {
    result = result.filter(p => p.cats.includes(activeFilter));
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    result = result.filter(p =>
      p.company.toLowerCase().includes(q) ||
      p.title.toLowerCase().includes(q)   ||
      p.desc.toLowerCase().includes(q)    ||
      p.tools.some(t => t.toLowerCase().includes(q))
    );
  }

  renderProjects(result);
}

/* filter buttons */
document.querySelectorAll('.f-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    applyFilter();
  });
});

/* search from URL param */
const urlQ = new URLSearchParams(location.search).get('q');
if (urlQ) {
  searchQuery = urlQ;
  const input = document.getElementById('search-input');
  if (input) input.value = urlQ;
}

/* live search from navbar input */
const searchInput = document.getElementById('search-input');
if (searchInput) {
  searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value.trim();
    applyFilter();
  });
}

/* IntersectionObserver reference for re-observe after render */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

/* initial render */
applyFilter();
