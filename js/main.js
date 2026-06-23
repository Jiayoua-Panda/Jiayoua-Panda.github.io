// ── Project data ───────────────────────────────────────────
// images[]: put your screenshots in assets/images/projects/
// Use descriptive filenames, e.g. truck-reversing-1.jpg
const PROJECTS = {
  'truck-reversing': {
    badge: 'Vehicle Dynamics · Control Systems',
    title: 'Reversing Aid for a Tractor-Semitrailer Truck',
    desc: 'Automatic control system that assists in reversing a tractor-semitrailer combination along a predefined path, designed and validated in MATLAB/Simulink. Reversing an articulated vehicle is inherently unstable (jack-knifing risk), so the design prioritises stability and precision: overshoot ≤ 5%, settling time ≤ 20 s, and a deliberately slow rise time to enforce smooth steering inputs.\n\nThe tractor-trailer kinematics were modelled from the literature, linearised, and stabilised with a state-feedback controller designed via pole placement. A discretized state observer estimates unmeasured states, and the closed loop was validated against the full nonlinear Simulink model — including robustness checks across trailer lengths (L2 = 4 m vs 15 m) and reversing speeds (−0.5 vs −2 m/s).',
    tags: ['Simulink', 'MATLAB', 'Vehicle Dynamics', 'State Feedback', 'Pole Placement', 'Observer Design', 'Articulated Vehicles'],
    images: [
      { src: 'assets/images/projects/truck-reversing-1.png', caption: 'Truck-semitrailer kinematic model' },
      { src: 'assets/images/projects/truck-reversing-2.png', caption: 'Nonlinear model in Simulink' },
      { src: 'assets/images/projects/truck-reversing-3.png', caption: 'State feedback controller' },
      { src: 'assets/images/projects/truck-reversing-4.png', caption: 'State estimator (observer)' },
      { src: 'assets/images/projects/truck-reversing-5.png', caption: 'Closed-loop response — trailer length L2 = 15 m' },
      { src: 'assets/images/projects/truck-reversing-6.png', caption: 'Closed-loop response — trailer length L2 = 4 m' },
    ],
    links: [{ label: 'Full report available on request' }],
  },
  'game-systems': {
    badge: 'Systems Design · Live-Service Games',
    title: 'Game Systems Design — Live-Service Titles',
    desc: 'Four and a half years designing complex rule systems for live-service games across three studios: Fantasy Tang Chronicles (幻唐志) at Duoyi Network from 2020, Dragon Kingdom Story (龙之国物语) at Zlong Games from 2021, then Conquer the Castle (攻城掠地) and Calabash Brothers (葫芦娃) at Aoshitang from 2023.\n\nOwned end-to-end system design: economy and progression rule systems with hundreds of interacting parameters, overall feature roadmaps, and recurring live-ops event planning. Work was data-driven by design — defining KPIs, reading player behaviour data after each release, and iterating system tuning accordingly. This is large-scale systems thinking under real production constraints: every change ships to millions of players and must balance engagement, economy stability, and revenue.',
    tags: ['Systems Design', 'Game Economy', 'Live Ops', 'Data-Driven Iteration', 'Feature Planning', 'Cross-functional Delivery'],
    images: [
      { src: 'assets/images/projects/game-htz-1.jpg', caption: '幻唐志 (Fantasy Tang Chronicles) — Duoyi Network, 2020' },
      { src: 'assets/images/projects/game-htz-2.jpg', caption: '幻唐志 — live-ops content' },
      { src: 'assets/images/projects/game-lzg-1.jpg', caption: '龙之国物语 (Dragon Kingdom Story) — Zlong Games, 2021' },
      { src: 'assets/images/projects/game-lzg-2.jpg', caption: '龙之国物语 — economy design' },
      { src: 'assets/images/projects/game-gcld-1.jpg', caption: '攻城掠地 (Conquer the Castle) — Aoshitang, 2023' },
      { src: 'assets/images/projects/game-gcld-2.jpg', caption: '攻城掠地 — large-scale strategy systems' },
      { src: 'assets/images/projects/game-hlw-1.jpg', caption: '葫芦娃 (Calabash Brothers) — Aoshitang, 2023' },
      { src: 'assets/images/projects/game-hlw-2.jpg', caption: '葫芦娃 — live-ops events' },
    ],
    links: [{ label: 'Design documents available on request' }],
  },
  'sfm': {
    badge: 'Computer Vision · Perception',
    title: '2D Structure-from-Motion with Planar Homographies',
    desc: 'A 2D Structure-from-Motion pipeline that reconstructs planar scenes from multiple images, built from scratch in Python and evaluated on four standard datasets (graf, wall, bark, boat).\n\nPipeline stages: SIFT feature extraction and brute-force matching with Lowe\'s ratio test, homography estimation with normalized DLT inside a RANSAC loop, and incremental registration of images into a global frame starting from the pair with most inliers. An advanced stage builds multi-image feature tracks and refines the reconstruction with Gauss-Newton bundle adjustment. The basic pipeline achieved 2.13 px reprojection error on the wall dataset — these estimation techniques (robust fitting, incremental mapping, BA) are foundational to visual SLAM and AV perception.',
    tags: ['Python', 'OpenCV', 'SIFT', 'RANSAC', 'Homography', 'Bundle Adjustment', 'Computer Vision'],
    images: [
      { src: 'assets/images/projects/sfm-1.png', caption: 'Graf dataset — reconstruction vs ground truth' },
      { src: 'assets/images/projects/sfm-2.png', caption: 'Wall dataset — best result (2.13 px error)' },
      { src: 'assets/images/projects/sfm-3.png', caption: 'Bark dataset — zoom and rotation changes' },
      { src: 'assets/images/projects/sfm-4.png', caption: 'Boat dataset — large camera motion' },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/Jiayoua-Panda/SSY098-Image-analysis/tree/main/Project', icon: 'github' }],
  },
  'ride-comfort': {
    badge: 'Data-Driven · Vehicle Dynamics',
    title: 'Ride Comfort Analysis — Volvo 7900 Electric Bus',
    desc: 'Data-driven suspension analysis of the Volvo 7900 Electric city bus (MMS210, Connected Fleets in Data-Driven Engineering). Real vertical-acceleration data was collected with an IMU mounted inside a bus on its regular route in Gothenburg during normal daily operation.\n\nThe pipeline: signal filtering of the raw IMU data, estimation of the road excitation power spectral density (PSD), then feeding the extracted road profile into a quarter-car suspension model. Suspension stiffness and damping were optimized to reduce body-acceleration RMS while keeping suspension deflection and dynamic tire force within acceptable bounds — a direct link from real fleet measurement to chassis parameter tuning.',
    tags: ['Python', 'Signal Processing', 'PSD Estimation', 'Quarter-Car Model', 'Suspension Optimization', 'IMU', 'Volvo'],
    images: [
      { src: 'assets/images/projects/ride-comfort-1.png', caption: 'Measured IMU data from the bus route' },
      { src: 'assets/images/projects/ride-comfort-2.png', caption: 'IMU accelerometer signal' },
      { src: 'assets/images/projects/ride-comfort-3.png', caption: 'Quarter-car suspension model' },
      { src: 'assets/images/projects/ride-comfort-4.png', caption: 'Suspension performance comparison after optimization' },
    ],
    links: [{ label: 'Full report available on request' }],
  },
  'bicycle-safety': {
    badge: 'Active Safety · Field Experiment',
    title: 'Cars Overtaking Cyclists — Active Safety Field Study',
    desc: 'Field study of driver behaviour when overtaking cyclists (TME202 Active Safety). A pilot experiment used an instrumented bicycle equipped with LIDAR sensors (tested in side and rear mounting configurations), IMU, GPS, and front/rear cameras to measure the minimum lateral clearance drivers leave when passing.\n\nThe analysis decomposed the overtaking manoeuvre into approach, steer-away, pass, and return phases, and quantified how the presence of oncoming traffic compresses lateral safety margins — the driver comfort-zone boundaries that active safety systems must respect. Findings inform ADAS intervention logic for protecting cyclists, a primary vulnerable road user group in urban traffic.',
    tags: ['Active Safety', 'LIDAR', 'Field Experiment', 'Driver Behaviour', 'ADAS', 'Vulnerable Road Users'],
    images: [
      { src: 'assets/images/projects/bicycle-safety-1.png', caption: 'Overtaking manoeuvre analysis' },
      { src: 'assets/images/projects/bicycle-safety-2.png', caption: 'Instrumented bicycle measurement setup' },
      { src: 'assets/images/projects/bicycle-safety-3.png', caption: 'Lateral clearance results' },
    ],
    links: [{ label: 'Full report available on request' }],
  },
  'crash-pulse': {
    badge: 'Passive Safety · Crash Analysis',
    title: 'Crash Pulse & Restraint Systems — Occupant Injury Risk',
    desc: 'Simulation study of how the vehicle crash pulse and restraint systems determine occupant injury risk (TME202 Passive Safety). Parameter studies varied front-structure stiffness, impact speed, and vehicle mass, and traced their effect on the deceleration pulse, structural deformation, and energy conversion — including why a vehicle rebounds rather than stopping dead, and how doubling kinetic energy drives deformation into the passenger compartment.\n\nThe restraint-system analysis examined how seatbelt properties and airbag interaction shape occupant kinematics within the envelope set by the crash pulse, connecting structural crashworthiness design to biomechanical injury criteria.',
    tags: ['Passive Safety', 'Crash Pulse', 'Restraint Systems', 'Energy Analysis', 'Biomechanics', 'Injury Risk'],
    images: [
      { src: 'assets/images/projects/crash-pulse-1.png', caption: 'Crash pulse parameter study' },
      { src: 'assets/images/projects/crash-pulse-2.png', caption: 'Structural deformation comparison' },
      { src: 'assets/images/projects/crash-pulse-3.png', caption: 'Occupant response with restraint systems' },
    ],
    links: [{ label: 'Full report available on request' }],
  },
  'hybrid-model': {
    badge: 'Powertrain · Electrification',
    title: 'Series & Parallel HEV Powertrain Design',
    desc: 'Designed and simulated complete series and parallel hybrid powertrains in MATLAB/QSS for a Class M reference vehicle (Ford S-MAX 2.0L, 240 PS) across four lab projects (TME095 Electric & Hybrid Vehicles).\n\nWork covered component sizing from first principles (180 kW motor/generator sized against top-speed and 0-100 km/h requirements), battery SoC management, engine operating-point placement on the efficiency map, and energy-flow analysis over both the NEDC cycle and a custom-designed driving cycle. The series architecture decouples the engine from the wheels for sweet-spot operation; the parallel architecture trades that for direct mechanical drive — the comparison quantifies fuel-consumption and sizing trade-offs between the two.',
    tags: ['MATLAB', 'QSS', 'Hybrid Powertrain', 'Component Sizing', 'Energy Management', 'NEDC', 'Driving Cycles'],
    images: [
      { src: 'assets/images/projects/hybrid-1.png', caption: 'Series HEV power flow' },
      { src: 'assets/images/projects/hybrid-2.png', caption: 'Parallel HEV torque flow' },
      { src: 'assets/images/projects/hybrid-3.png', caption: 'ICE operating points on the efficiency map' },
      { src: 'assets/images/projects/hybrid-4.png', caption: 'Battery SoC over the custom driving cycle' },
      { src: 'assets/images/projects/hybrid-5.png', caption: 'Custom driving cycle design' },
      { src: 'assets/images/projects/hybrid-6.png', caption: 'NEDC driving cycle' },
    ],
    links: [{ label: 'Lab reports available on request' }],
  },
  'shortest-path': {
    badge: 'Python · Algorithms',
    title: 'Shortest-Path Navigation System with GUI',
    desc: 'Python application with a graphical interface for computing and visualising shortest paths on a map graph, built for the Chalmers object-oriented programming in Python course.\n\nImplements Dijkstra\'s algorithm over a custom graph data structure with an interactive UI: users pick source and destination nodes and the computed route is highlighted on the map in real time. A compact exercise in object-oriented design, algorithm implementation, and UI integration — the same route-optimisation problem at the core of logistics and fleet routing.',
    tags: ['Python', 'OOP', 'Graph Algorithms', 'Dijkstra', 'GUI', 'Jupyter'],
    images: [
      { src: 'assets/images/projects/shortest-path-1.png', caption: 'Shortest path computed and highlighted in the GUI' },
    ],
    links: [{ label: 'Notebook available on request' }],
  },
  'bsc-thesis': {
    badge: 'Mechanical Design · Aerospace',
    title: 'Air-Bearing Platform — Design & Implementation (BSc Thesis)',
    desc: 'BSc thesis at NUAA (Aircraft Manufacturing Engineering): structural design and physical implementation of an aerostatic air-bearing platform using ring-orifice (annular throttling) air bearings — the friction-free platform type used for spacecraft ground simulation.\n\nThe work spans the full design chain: working principle of the annular-orifice aerostatic bearing, theoretical analysis and numerical calculation of load capacity and stiffness, structural design of the platform body in CAD, and fabrication of a physical model with experimental verification. A complete mechanical engineering exercise from theory to working hardware.',
    tags: ['Mechanical Design', 'Aerostatic Bearings', 'CAD', 'Numerical Analysis', 'NUAA', 'Prototype'],
    images: [
      { src: 'assets/images/projects/bsc-thesis-1.png', caption: 'Main structure of the air-bearing platform' },
      { src: 'assets/images/projects/bsc-thesis-2.png', caption: 'CAD model of the platform' },
      { src: 'assets/images/projects/bsc-thesis-3.png', caption: 'Fabricated physical platform' },
    ],
    links: [{ label: 'Thesis & defence slides available on request' }],
  },
  'cpp-grades': {
    badge: 'C++ · Course Project',
    title: 'Student Grade Management System (C++)',
    desc: 'Console-based student grade management system written in C++ as an undergraduate course design project at NUAA. Supports student record creation, grade entry, queries, sorting, and statistics, with records persisted to file.\n\nAn early exercise in structured program design: data structures for student records, file I/O for persistence, and a menu-driven interface — the starting point of a programming foundation later extended through Python, MATLAB, and data-analysis work.',
    tags: ['C++', 'Data Structures', 'File I/O', 'Course Design', 'NUAA'],
    images: [
      { src: 'assets/images/projects/cpp-grades-1.png', caption: 'Menu-driven console interface' },
      { src: 'assets/images/projects/cpp-grades-2.png', caption: 'Grade query and statistics output' },
    ],
    links: [{ label: 'Source & report available on request' }],
  },
  'avic-patent': {
    badge: 'Patent · Aircraft Final Assembly',
    title: 'Portable Weight-on-Wheels Switch Inspection Device',
    desc: 'Granted utility model patent CN 210090631 U (first inventor), with a parallel invention patent application CN 201910201148.4 — developed while working as a final assembly engineer at AVIC Chengdu Aircraft.\n\nThe weight-on-wheels (WOW) switch on the landing gear tells the aircraft whether it is on the ground — many flight-critical systems gate on its signal, so verifying it during final assembly is mandatory. The patented device makes that check portable and repeatable on the assembly line, replacing an awkward manual procedure: a practical piece of test equipment born from identifying a real bottleneck on the shop floor and engineering it away. Patent holder: AVIC Chengdu Aircraft Industrial (Group) Co., Ltd.',
    tags: ['Patent', 'Test Equipment', 'Aircraft Assembly', 'Landing Gear Systems', 'Process Engineering'],
    images: [
      { src: 'assets/images/projects/patent-wow-switch.png', caption: 'Weight-on-wheels switch inspection — patent schematic' },
      { src: 'assets/images/projects/avic-j10.jpg', caption: 'Chengdu J-10 — built at AVIC Chengdu Aircraft' },
      { src: 'assets/images/projects/avic-j20.jpg', caption: 'Chengdu J-20 — built at AVIC Chengdu Aircraft' },
    ],
    links: [{ label: 'Patent documents: CN 210090631 U · CN 201910201148.4' }],
  },
};

// ── Profile photo fallback ──────────────────────────────────
const avatarPhoto = document.querySelector('.avatar-photo');
if (avatarPhoto) {
  if (avatarPhoto.complete && avatarPhoto.naturalWidth > 0) {
    avatarPhoto.classList.add('loaded');
  } else {
    avatarPhoto.addEventListener('load', () => avatarPhoto.classList.add('loaded'));
    avatarPhoto.addEventListener('error', () => avatarPhoto.remove());
  }
}

// ── Hero typewriter intro ───────────────────────────────────
// Types "Shuwen Gong" then the tagline, letter by letter; once done, the rest
// of the hero (badge, tags, identity, buttons, avatar) fades in together.
(function () {
  const hero = document.getElementById('hero');
  if (!hero || !document.documentElement.classList.contains('hero-js')) return;
  const nameEl = hero.querySelector('.hname');
  const titleEl = hero.querySelector('.htitle');
  if (!nameEl || !titleEl) return;

  const reveal = () => hero.classList.add('hero-go');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // name preserves the <em> on "Gong"
  const nameSegs = [{ t: 'Shuwen ', em: false }, { t: 'Gong', em: true }];
  const titleText = titleEl.textContent.trim();
  const nameChars = [];
  nameSegs.forEach(s => [...s.t].forEach(ch => nameChars.push({ ch, em: s.em })));

  function renderName(n) {
    let html = '', i = 0;
    while (i < n) {
      const em = nameChars[i].em; let run = '';
      while (i < n && nameChars[i].em === em) { run += nameChars[i].ch; i++; }
      run = run.replace(/ /g, '&nbsp;');
      html += em ? `<em>${run}</em>` : run;
    }
    return html;
  }

  // reduced motion: skip the animation, show everything at once
  if (reduce) {
    nameEl.style.visibility = titleEl.style.visibility = 'visible';
    titleEl.classList.add('caret');
    reveal();
    return;
  }

  nameEl.innerHTML = ''; titleEl.textContent = '';
  nameEl.style.visibility = 'visible';

  let i = 0;
  (function typeName() {
    i++;
    nameEl.innerHTML = renderName(i);
    nameEl.classList.add('caret');
    if (i < nameChars.length) setTimeout(typeName, 72);
    else { nameEl.classList.remove('caret'); titleEl.style.visibility = 'visible'; setTimeout(typeTitle, 260); }
  })();

  let j = 0;
  function typeTitle() {
    j++;
    titleEl.textContent = titleText.slice(0, j);
    titleEl.classList.add('caret');
    if (j < titleText.length) setTimeout(typeTitle, 34);
    else setTimeout(reveal, 220);   // caret keeps blinking at the end of the tagline
  }
})();

// ── Lightbox (for standalone image zoom, kept for future use) ──
(function () {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  const lbImg = lb.querySelector('.lb-img');
  const lbCaption = lb.querySelector('.lb-caption');
  const lbPrev = lb.querySelector('.lb-prev');
  const lbNext = lb.querySelector('.lb-next');
  let items = [], cur = 0;

  function show(i) {
    cur = (i + items.length) % items.length;
    lbImg.src = items[cur].src;
    lbImg.alt = items[cur].caption;
    lbCaption.textContent = items[cur].caption;
    lbPrev.hidden = items.length <= 1;
    lbNext.hidden = items.length <= 1;
  }

  function open(group, idx) {
    items = [...document.querySelectorAll(`.lb-trigger[data-group="${group}"]`)]
      .map(el => ({ src: el.dataset.src || el.src, caption: el.dataset.caption || el.alt || '' }));
    if (!items.length) return;
    show(idx);
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => { lbImg.src = ''; }, 200);
  }

  lb.querySelector('.lb-close').addEventListener('click', close);
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  lbPrev.addEventListener('click', () => show(cur - 1));
  lbNext.addEventListener('click', () => show(cur + 1));
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('active')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(cur - 1);
    if (e.key === 'ArrowRight') show(cur + 1);
  });
  let tx = 0;
  lb.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1));
  });
  document.querySelectorAll('.lb-trigger').forEach(el => {
    el.addEventListener('click', function () {
      const group = this.dataset.group || 'default';
      open(group, [...document.querySelectorAll(`.lb-trigger[data-group="${group}"]`)].indexOf(this));
    });
  });
})();

// ── Project modal ───────────────────────────────────────────
(function () {
  const overlay = document.getElementById('project-modal');
  if (!overlay) return;

  const pmCard    = overlay.querySelector('.pm-card');
  const pmBadge   = overlay.querySelector('.pm-badge');
  const pmClose   = overlay.querySelector('.pm-close');
  const pmMain    = overlay.querySelector('.pm-main');
  const pmPh      = overlay.querySelector('.pm-ph');
  const pmThumbs  = overlay.querySelector('.pm-thumbs');
  const pmTitle   = overlay.querySelector('.pm-title');
  const pmDesc    = overlay.querySelector('.pm-desc');
  const pmTags    = overlay.querySelector('.pm-tags');
  const pmLinks   = overlay.querySelector('.pm-links');

  const GITHUB_SVG = `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`;

  function setImg(idx, imgs) {
    pmMain.querySelectorAll('.pm-main-img').forEach((el, i) => el.classList.toggle('active', i === idx));
    pmThumbs.querySelectorAll('.pm-thumb').forEach((el, i) => el.classList.toggle('active', i === idx));
  }

  function open(projectId) {
    const data = PROJECTS[projectId];
    if (!data) return;

    pmBadge.textContent = data.badge;
    pmTitle.textContent = data.title;
    pmDesc.textContent  = data.desc;
    pmTags.innerHTML    = data.tags.map(t => `<span class="tag">${t}</span>`).join('');
    pmLinks.innerHTML   = data.links.map(l =>
      l.href
        ? `<a class="pm-link" href="${l.href}" target="_blank" rel="noopener">${l.icon === 'github' ? GITHUB_SVG : ''}${l.label}</a>`
        : `<span class="pm-note">${l.label}</span>`
    ).join('');

    // Clear previous images
    pmMain.querySelectorAll('.pm-main-img').forEach(el => el.remove());
    pmThumbs.innerHTML = '';

    const validImgs = (data.images || []);
    let loaded = 0;

    if (validImgs.length === 0) {
      pmPh.style.display = 'flex';
    } else {
      pmPh.style.display = 'none';
      validImgs.forEach((imgData, i) => {
        const img = Object.assign(document.createElement('img'), {
          className: 'pm-main-img' + (i === 0 ? ' active' : ''),
          src: imgData.src,
          alt: imgData.caption,
        });
        img.addEventListener('error', () => {
          img.remove();
          if (i === 0) pmPh.style.display = 'flex';
        });
        pmMain.appendChild(img);

        if (validImgs.length > 1) {
          const thumb = document.createElement('div');
          thumb.className = 'pm-thumb' + (i === 0 ? ' active' : '');
          thumb.innerHTML = `<img src="${imgData.src}" alt="${imgData.caption}" loading="lazy">`;
          const idx = i;
          thumb.addEventListener('click', () => setImg(idx, validImgs));
          pmThumbs.appendChild(thumb);
        }
      });
    }

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    pmCard.scrollTop = 0;
  }

  function close() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  pmClose.addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) close();
  });

  document.querySelectorAll('.pm-trigger').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      open(btn.dataset.project);
    });
  });

  // Click anywhere on card to open modal (not just the trigger button)
  document.querySelectorAll('.fc, .pc').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', e => {
      if (e.target.closest('a[href]')) return; // let real links navigate normally
      const trigger = card.querySelector('.pm-trigger');
      if (trigger) open(trigger.dataset.project);
    });
  });
})();

// ── Scroll fade-in ──────────────────────────────────────────
(function () {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in-view');
      io.unobserve(e.target);
    });
  }, { threshold: 0.1 });

  const groups = [
    { sel: '.lbl',        delays: [0] },
    { sel: 'h2.sh',       delays: [.06] },
    { sel: '.ssub',       delays: [.12] },
    { sel: '.ink-rule',   delays: [.18] },
    { sel: '.wc',         delays: [.05, .10, .15, .20] },
    { sel: '.fc',         delays: [.05, .12, .19, .26] },
    { sel: '.pc',         delays: [.05, .10, .15] },
    { sel: '.eng-co',     delays: [.08, .16, .24] },
    { sel: '.gtl-stop',   delays: [.05, .15, .25] },
  ];

  groups.forEach(({ sel, delays }) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('anim');
      el.style.transitionDelay = (delays[Math.min(i, delays.length - 1)]) + 's';
      io.observe(el);
    });
  });

  document.querySelectorAll('.ink-rule').forEach(el => io.observe(el));
})();

// ── Count-up animation ──────────────────────────────────────
(function () {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      const dur = 1100;
      const t0 = performance.now();
      function tick(now) {
        const p = Math.min((now - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (Number.isInteger(target) ? Math.round(eased * target) : (eased * target).toFixed(1)) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-target]').forEach(el => io.observe(el));
})();

// ── Street-scene background (sparse traffic + sky) ─────────────────────────
// A road runs near the bottom with sparse ground traffic (pedestrian, car,
// bus, truck); aircraft (airliner, fighter, paper plane) drift across the sky
// above. A global fixed canvas (dark) covers the light sections; each dark
// section gets its own canvas (light) painted above the dark fill, below content.
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function rr(c, x, y, w, h, r) {
    c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r);
  }
  function circ(c, x, y, r) { c.moveTo(x + r, y); c.arc(x, y, r, 0, 6.2832); }
  function wheel(c, x, y, r, a) { c.moveTo(x + r, y); c.arc(x, y, r, 0, 6.2832); c.moveTo(x + Math.cos(a) * r * .62, y + Math.sin(a) * r * .62); c.lineTo(x - Math.cos(a) * r * .62, y - Math.sin(a) * r * .62); }
  function tree(c, x, y, s) {
    c.lineWidth = Math.max(1, s * .1);
    c.beginPath(); c.arc(x, y - s * 1.15, s * .72, 0, 6.2832); c.stroke();
    c.beginPath(); c.moveTo(x, y - s * .5); c.lineTo(x, y); c.stroke();
  }
  // cloud as a single scalloped outline (bumps on top, flatter base)
  function cloudPath(c, x, y, s) {
    c.beginPath();
    c.moveTo(x - s * .9, y + s * .18);
    c.bezierCurveTo(x - s * 1.12, y - s * .2, x - s * .72, y - s * .52, x - s * .38, y - s * .34);
    c.bezierCurveTo(x - s * .28, y - s * .74, x + s * .28, y - s * .74, x + s * .4, y - s * .32);
    c.bezierCurveTo(x + s * .74, y - s * .56, x + s * 1.12, y - s * .12, x + s * .86, y + s * .18);
    c.closePath();
  }

  // ground vehicles (line-art outlines): origin at road contact (y = 0), facing right
  const GROUND = {
    ped(c, h, a) {
      c.lineWidth = Math.max(1, h * .085);
      const sw = Math.sin(a) * .55, aw = Math.sin(a) * .42;
      c.beginPath(); c.arc(0, -h * .86, h * .16, 0, 6.2832); c.stroke();
      c.beginPath();
      c.moveTo(0, -h * .68); c.lineTo(0, -h * .32);                         // torso
      c.moveTo(0, -h * .32); c.lineTo(h * (-.04 + sw * .26), 0);            // back leg
      c.moveTo(0, -h * .32); c.lineTo(h * (.04 - sw * .26), 0);             // front leg
      c.moveTo(0, -h * .56); c.lineTo(h * (-.04 - aw * .22), -h * .34);     // back arm
      c.moveTo(0, -h * .56); c.lineTo(h * (.04 + aw * .22), -h * .34);      // front arm
      c.stroke();
    },
    car(c, h, a) {
      const w = h * 2.3, rw = h * .2; c.lineWidth = Math.max(1, h * .07);
      c.beginPath(); rr(c, -w / 2, -h * .72, w, h * .5, h * .16); c.stroke();
      c.beginPath(); c.moveTo(-w * .24, -h * .72); c.lineTo(-w * .12, -h * 1.02);
      c.lineTo(w * .14, -h * 1.02); c.lineTo(w * .26, -h * .72); c.stroke();
      c.beginPath(); wheel(c, -w * .28, -rw, rw, a); wheel(c, w * .28, -rw, rw, a); c.stroke();
    },
    bus(c, h, a) {
      const w = h * 3.0, rw = h * .2; c.lineWidth = Math.max(1, h * .06);
      c.beginPath(); rr(c, -w / 2, -h * 1.0, w, h * .82, h * .14); c.stroke();
      c.beginPath(); c.moveTo(-w * .36, -h * .78); c.lineTo(w * .36, -h * .78); c.stroke();
      c.beginPath(); wheel(c, -w * .3, -rw, rw, a); wheel(c, w * .3, -rw, rw, a); c.stroke();
    },
    truck(c, h, a) {
      const w = h * 3.3, rw = h * .2; c.lineWidth = Math.max(1, h * .06);
      c.beginPath(); rr(c, -w * .5, -h * 1.2, w * .6, h * 1.02, h * .04); c.stroke();   // tall cargo box
      c.beginPath(); rr(c, w * .12, -h * .74, w * .36, h * .56, h * .03); c.stroke();   // squarer, shorter cab
      c.beginPath(); c.moveTo(w * .48, -h * .42); c.lineTo(w * .5, -h * .18); c.stroke(); // hood/grille hint
      c.beginPath(); wheel(c, -w * .3, -rw, rw, a); wheel(c, -w * .04, -rw, rw, a); wheel(c, w * .32, -rw, rw, a); c.stroke();
    },
  };

  // sky aircraft (line-art outlines): origin at centre, facing right
  const SKY = {
    airliner(c, s) {
      c.lineWidth = Math.max(1, s * .055);
      c.beginPath(); rr(c, -s, -s * .16, s * 2, s * .32, s * .16); c.stroke();
      c.beginPath(); c.moveTo(-s * .1, 0); c.lineTo(-s * .6, s * .52); c.lineTo(s * .12, s * .06); c.closePath(); c.stroke();
      c.beginPath(); c.moveTo(-s * .8, -s * .1); c.lineTo(-s * 1.05, -s * .5); c.lineTo(-s * .62, -s * .08); c.closePath(); c.stroke();
    },
    fighter(c, s) {
      c.lineWidth = Math.max(1, s * .055);
      c.beginPath(); c.moveTo(s * 1.2, 0); c.lineTo(-s * .5, -s * .15); c.lineTo(-s * .95, -s * .15);
      c.lineTo(-s * .72, 0); c.lineTo(-s * .95, s * .15); c.lineTo(-s * .5, s * .15); c.closePath(); c.stroke();
      c.beginPath(); c.moveTo(s * .1, 0); c.lineTo(-s * .7, -s * .72); c.lineTo(-s * .25, -s * .05); c.closePath(); c.stroke();
      c.beginPath(); c.moveTo(s * .1, 0); c.lineTo(-s * .7, s * .72); c.lineTo(-s * .25, s * .05); c.closePath(); c.stroke();
    },
    paper(c, s) {
      // origami dart: two wings + a centre crease + a folded keel fin (3D look)
      c.lineWidth = Math.max(1, s * .07);
      c.beginPath(); c.moveTo(s, 0); c.lineTo(-s * .92, -s * .5); c.lineTo(-s * .34, -s * .02); c.closePath(); c.stroke();  // upper wing
      c.beginPath(); c.moveTo(s, 0); c.lineTo(-s * .92, s * .5); c.lineTo(-s * .34, s * .02); c.closePath(); c.stroke();    // lower wing
      c.beginPath(); c.moveTo(s, 0); c.lineTo(-s * .34, 0); c.lineTo(-s * .5, s * .34); c.closePath(); c.stroke();          // keel fin
    },
  };

  function scene(cvs, opts) {
    const ctx = cvs.getContext('2d');
    const lc = `${opts.line.r},${opts.line.g},${opts.line.b}`;
    let W = 0, H = 0, t = 0, bandTop = 0, lanes = [], peds = [], farPeds = [], air = [], buildings = [], mountains = [], trees = [], clouds = [];
    const rnd = (a, b) => a + Math.random() * (b - a);

    // ground vehicle pool (pedestrians handled separately) — ~2× the old sizes
    const VEH = [
      { f: GROUND.car,   h: 32, base: 1.5 },
      { f: GROUND.bus,   h: 34, base: 1.0 },
      { f: GROUND.truck, h: 34, base: 0.95 },
    ];
    const ATYPES = [
      { f: SKY.airliner, s: 34, v: 1.3, trail: true },
      { f: SKY.fighter,  s: 30, v: 2.6, trail: true },
      { f: SKY.paper,    s: 26, v: 0.7, trail: false },
    ];

    function build() {
      const bandBottom = H - 30, sidewalkY = H - 16;
      const bandH = Math.min(240, H * 0.46);
      bandTop = bandBottom - bandH;

      // lanes: far (top, small, leftward) → near (bottom, large, rightward)
      const nLanes = 4;
      lanes = [];
      for (let i = 0; i < nLanes; i++) {
        const f = i / (nLanes - 1);
        const y = bandTop + Math.pow(f, 1.3) * (bandBottom - bandTop);
        const scale = 0.5 + 0.5 * f;
        const dir = i < nLanes / 2 ? -1 : 1;
        const lane = { y, scale, dir, vehicles: [] };
        const per = Math.max(1, Math.round(W / 1300));
        for (let j = 0; j < per; j++) {
          const ty = VEH[(i + j) % VEH.length];
          lane.vehicles.push({ f: ty.f, h: ty.h * scale, x: rnd(-150, W), v: ty.base * (0.55 + scale) * rnd(0.92, 1.1), phase: rnd(0, 6.28), wa: rnd(0, 6.28) });
        }
        lanes.push(lane);
      }

      peds = [];   // near sidewalk (bottom, large)
      for (let i = 0; i < 2; i++)
        peds.push({ x: rnd(0, W), y: sidewalkY, h: 26, v: 0.3 * rnd(0.8, 1.3), dir: Math.random() < .5 ? 1 : -1, wa: rnd(0, 6.28) });
      farPeds = [];   // far sidewalk (by the horizon, smaller for depth)
      const farY = bandTop - 4;
      for (let i = 0; i < 3; i++)
        farPeds.push({ x: rnd(0, W), y: farY, h: 16, v: 0.28 * rnd(0.8, 1.3), dir: Math.random() < .5 ? 1 : -1, wa: rnd(0, 6.28) });

      air = [];
      const an = Math.max(2, Math.round(W / 900));
      const skyTop = H * 0.05, skyBot = Math.max(skyTop + 50, bandTop - 40);
      for (let i = 0; i < an; i++) {
        const ty = ATYPES[i % ATYPES.length];
        air.push({ f: ty.f, s: ty.s, trail: ty.trail, x: rnd(-120, W), y: rnd(skyTop, skyBot), v: ty.v * rnd(0.9, 1.12), ph: Math.random() * Math.PI * 2 });
      }

      // city skyline along the horizon (fewer, larger buildings)
      buildings = [];
      let bx = -20;
      while (bx < W + 20) { const bw = rnd(26, 66); buildings.push({ x: bx, w: bw, h: rnd(30, 118) }); bx += bw + rnd(44, 122); }

      // rolling mountains behind the skyline (2 faint layers)
      mountains = [];
      for (let L = 0; L < 2; L++) {
        const n = Math.max(3, Math.round(W / 300)), pts = [], amp = 150 - L * 52;
        for (let i = 0; i <= n; i++) pts.push({ x: i / n * W, y: bandTop - amp * (0.35 + 0.65 * Math.random()) });
        mountains.push({ pts, alpha: 0.05 - L * 0.014 });
      }

      // trees dotted along the horizon
      trees = [];
      let tx = rnd(0, 90);
      while (tx < W) { trees.push({ x: tx, s: rnd(15, 27) }); tx += rnd(120, 250); }

      // drifting clouds in the sky
      clouds = [];
      const cn = Math.max(3, Math.round(W / 360));
      for (let i = 0; i < cn; i++) clouds.push({ x: rnd(0, W), y: rnd(H * 0.05, Math.max(H * 0.12, bandTop * 0.45)), s: rnd(28, 54), v: rnd(0.04, 0.12) });
    }

    function size() {
      W = cvs.width  = opts.viewport ? window.innerWidth  : (cvs.clientWidth  || cvs.offsetWidth);
      H = cvs.height = opts.viewport ? window.innerHeight : (cvs.clientHeight || cvs.offsetHeight);
      build();
    }

    function frame() {
      ctx.clearRect(0, 0, W, H);
      const SPD = opts.speed || 1;
      ctx.lineJoin = 'round'; ctx.lineCap = 'round';

      // distant scenery (all line-art): mountains → skyline → trees → clouds → horizon
      ctx.lineWidth = 1.2;
      mountains.forEach(m => {
        ctx.strokeStyle = `rgba(${lc},${Math.max(0, m.alpha * 3).toFixed(3)})`;
        ctx.beginPath(); ctx.moveTo(0, bandTop);
        m.pts.forEach(p => ctx.lineTo(p.x, p.y));
        ctx.lineTo(W, bandTop); ctx.stroke();
      });
      ctx.strokeStyle = `rgba(${lc},${opts.faint})`; ctx.lineWidth = 1.2;
      buildings.forEach(b => ctx.strokeRect(b.x, bandTop - b.h, b.w, b.h));
      trees.forEach(tt => tree(ctx, tt.x, bandTop, tt.s));
      clouds.forEach(cl => { cl.x += cl.v * SPD; if (cl.x > W + 50) cl.x = -50; cloudPath(ctx, cl.x, cl.y, cl.s); ctx.stroke(); });
      ctx.strokeStyle = `rgba(${lc},${opts.road})`; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, bandTop); ctx.lineTo(W, bandTop); ctx.stroke();

      // lane markings: solid centre divider + dashed lane separators
      const divY = (lanes[1].y + lanes[2].y) / 2;
      ctx.lineWidth = 1.1; ctx.beginPath();
      ctx.moveTo(0, divY - 2); ctx.lineTo(W, divY - 2); ctx.moveTo(0, divY + 2); ctx.lineTo(W, divY + 2); ctx.stroke();
      ctx.setLineDash([18, 24]); ctx.lineDashOffset = 0; ctx.lineWidth = 1.4;   // dashes stay still
      [(lanes[0].y + lanes[1].y) / 2, (lanes[2].y + lanes[3].y) / 2].forEach(y => {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      });
      ctx.setLineDash([]);

      // far-side pedestrians (by the horizon) — drawn before traffic so cars pass in front
      ctx.strokeStyle = `rgba(${lc},${opts.veh})`;
      farPeds.forEach(p => {
        p.x += p.dir * p.v * SPD;
        if (p.dir > 0 && p.x > W + 30) p.x = -30;
        if (p.dir < 0 && p.x < -30) p.x = W + 30;
        p.wa += 0.06;
        ctx.save(); ctx.translate(p.x, p.y); if (p.dir < 0) ctx.scale(-1, 1); GROUND.ped(ctx, p.h, p.wa); ctx.restore();
      });

      // traffic, drawn far → near so nearer vehicles overlap farther ones
      // each vehicle: rolling wheels (tied to distance) + a gentle suspension bob
      ctx.strokeStyle = `rgba(${lc},${opts.veh})`;
      lanes.forEach(lane => lane.vehicles.forEach(ve => {
        ve.x += lane.dir * ve.v * SPD;
        if (lane.dir > 0 && ve.x > W + 160) ve.x = -160;
        if (lane.dir < 0 && ve.x < -160) ve.x = W + 160;
        ve.wa += ve.v * SPD * 0.16;
        const bob = Math.sin(t * 0.09 + ve.phase) * ve.h * 0.0175;
        ctx.save(); ctx.translate(ve.x, lane.y + bob); if (lane.dir < 0) ctx.scale(-1, 1); ve.f(ctx, ve.h, ve.wa); ctx.restore();
      }));

      // pedestrians on the near sidewalk — walking leg/arm cycle
      peds.forEach(p => {
        p.x += p.dir * p.v * SPD;
        if (p.dir > 0 && p.x > W + 30) p.x = -30;
        if (p.dir < 0 && p.x < -30) p.x = W + 30;
        p.wa += 0.06;
        ctx.save(); ctx.translate(p.x, p.y); if (p.dir < 0) ctx.scale(-1, 1); GROUND.ped(ctx, p.h, p.wa); ctx.restore();
      });

      // aircraft + dashed contrails
      air.forEach(a => {
        a.x += a.v * SPD; if (a.x > W + 130) a.x = -130;
        ctx.save(); ctx.translate(a.x, a.y + Math.sin(t * 0.01 + a.ph) * 5);
        if (a.trail) {
          ctx.strokeStyle = `rgba(${lc},${opts.faint})`; ctx.setLineDash([8, 10]); ctx.lineWidth = 1.3;
          ctx.beginPath(); ctx.moveTo(-a.s * 1.1, 0); ctx.lineTo(-a.s * 5.5, -a.s * 0.12); ctx.stroke(); ctx.setLineDash([]);
        }
        ctx.strokeStyle = `rgba(${lc},${opts.veh})`;
        a.f(ctx, a.s); ctx.restore();
      });

      t++;
      if (!reduce) requestAnimationFrame(frame);
    }

    size();
    window.addEventListener('resize', () => { clearTimeout(cvs._rt); cvs._rt = setTimeout(size, 150); }, { passive: true });
    if (!opts.viewport && window.ResizeObserver)
      new ResizeObserver(() => { clearTimeout(cvs._rt); cvs._rt = setTimeout(size, 80); }).observe(cvs);
    frame();
  }

  // Cursor effects on a dedicated top layer — drawn in brand red so they stay
  // visible over BOTH light and dark sections (sits above content, below nav).
  function cursorFX(cvs) {
    const ctx = cvs.getContext('2d');
    const AC = '168,37,31';
    let W = 0, H = 0, mx = -9999, my = -9999;
    let idleAt = 0, forming = false, pHead = 0, pSize = 34;   // idle "forming" state
    const tr = [], TRAIL = 22, flyers = [];
    const rnd = (a, b) => a + Math.random() * (b - a);
    const clamp = v => v < 0 ? 0 : v > 1 ? 1 : v;
    const now = () => performance.now();

    function size() { W = cvs.width = window.innerWidth; H = cvs.height = window.innerHeight; }
    function chooseHead() { const dir = Math.random() < .5 ? 1 : -1; return (dir > 0 ? 0 : Math.PI) + rnd(-0.45, 0.45); }
    function launch(x, y, head, s) {
      if (x < -50 || y < -50) return;
      const sp = rnd(1.8, 2.55);
      flyers.push({ x, y, vx: Math.cos(head) * sp, vy: Math.sin(head) * sp, rot: head, s });
    }

    // three folded components of the origami dart (built into the current path)
    function comp(i, s) {
      ctx.beginPath();
      if (i === 0) { ctx.moveTo(s, 0); ctx.lineTo(-s * .92, -s * .5); ctx.lineTo(-s * .34, -s * .02); ctx.closePath(); }
      else if (i === 1) { ctx.moveTo(s, 0); ctx.lineTo(-s * .92, s * .5); ctx.lineTo(-s * .34, s * .02); ctx.closePath(); }
      else { ctx.moveTo(s, 0); ctx.lineTo(-s * .34, 0); ctx.lineTo(-s * .5, s * .34); ctx.closePath(); }
    }
    function planeFull(s) {
      ctx.lineWidth = Math.max(1.5, s * .06); ctx.lineJoin = 'round'; ctx.lineCap = 'round';
      ctx.fillStyle = `rgba(${AC},0.14)`; ctx.strokeStyle = `rgba(${AC},0.85)`;
      for (let i = 0; i < 3; i++) { comp(i, s); ctx.fill(); ctx.stroke(); }
    }
    // assemble the dart component-by-component as idle progresses (p: 0 → 1)
    function planeForming(s, p) {
      const gs = 0.82 + 0.18 * p;
      ctx.scale(gs, gs);
      ctx.lineWidth = Math.max(1.2, s * .06); ctx.lineJoin = 'round'; ctx.lineCap = 'round';
      const win = [[0, .42], [.3, .72], [.58, 1]];
      for (let i = 0; i < 3; i++) {
        const a = clamp((p - win[i][0]) / (win[i][1] - win[i][0]));
        if (a <= 0) continue;
        ctx.fillStyle = `rgba(${AC},${(0.14 * a).toFixed(3)})`;
        ctx.strokeStyle = `rgba(${AC},${(0.85 * a).toFixed(3)})`;
        comp(i, s); ctx.fill(); ctx.stroke();
      }
    }

    function frame() {
      ctx.clearRect(0, 0, W, H);

      // launched paper planes
      for (let i = flyers.length - 1; i >= 0; i--) {
        const fl = flyers[i]; fl.x += fl.vx; fl.y += fl.vy;
        if (fl.x < -130 || fl.x > W + 130 || fl.y < -130 || fl.y > H + 130) { flyers.splice(i, 1); continue; }
        ctx.save(); ctx.translate(fl.x, fl.y); ctx.rotate(fl.rot); planeFull(fl.s); ctx.restore();
      }

      // idle forming: assemble a plane at the cursor, then launch at 3s
      if (mx > -50) {
        const idle = now() - idleAt, START = 350, FULL = 3000;
        if (idle >= START && idle < FULL) {
          if (!forming) { forming = true; pHead = chooseHead(); pSize = rnd(28, 42); }
          ctx.save(); ctx.translate(mx, my); ctx.rotate(pHead); planeForming(pSize, (idle - START) / (FULL - START)); ctx.restore();
        } else if (idle >= FULL && forming) {
          launch(mx, my, pHead, pSize); forming = false; idleAt = now();   // fly off, then re-form
        } else if (idle < START) { forming = false; }
      }

      // cursor trail
      for (let i = tr.length - 1; i >= 0; i--) {
        const tp = tr[i]; tp.age++;
        const a = Math.max(0, .4 - tp.age * (.4 / TRAIL)), r = Math.max(0, 2.8 * (1 - tp.age / TRAIL));
        if (a > 0) { ctx.beginPath(); ctx.arc(tp.x, tp.y, r, 0, 6.2832); ctx.fillStyle = `rgba(${AC},${a.toFixed(3)})`; ctx.fill(); }
      }
      while (tr.length && tr[0].age > TRAIL) tr.shift();
      if (mx > -100) { ctx.beginPath(); ctx.arc(mx, my, 3.2, 0, 6.2832); ctx.fillStyle = `rgba(${AC},.55)`; ctx.fill(); }

      requestAnimationFrame(frame);
    }

    size(); idleAt = now(); window.addEventListener('resize', size, { passive: true });
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY; idleAt = now(); forming = false;   // moving cancels any forming plane
      tr.push({ x: e.clientX, y: e.clientY, age: 0 }); if (tr.length > TRAIL) tr.shift();
    });
    document.addEventListener('click', e => { launch(e.clientX, e.clientY, chooseHead(), rnd(28, 42)); idleAt = now(); forming = false; });
    document.addEventListener('mouseleave', () => { mx = my = -9999; forming = false; });
    frame();
  }

  // Global fixed background — dark line-art for light sections
  const bg = document.createElement('canvas');
  bg.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:0';
  document.body.insertBefore(bg, document.body.firstChild);
  scene(bg, { viewport: true, line: { r: 45, g: 45, b: 45 }, veh: 0.26, road: 0.08, faint: 0.05, speed: 0.281 });

  // Per dark section — light line-art, above the dark fill and below the content
  document.querySelectorAll('.section-dark').forEach(sec => {
    const c = document.createElement('canvas');
    c.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:-1';
    sec.insertBefore(c, sec.firstChild);
    scene(c, { viewport: false, line: { r: 230, g: 230, b: 230 }, veh: 0.3, road: 0.11, faint: 0.08, speed: 0.281 });
  });

  // Cursor paper planes + trail (red) on a top layer, visible over any section
  if (!reduce) {
    const fx = document.createElement('canvas');
    fx.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:40';
    document.body.appendChild(fx);
    cursorFX(fx);
  }
})();

// ── Card hover: cursor glow + card background blend ───────────────────────
(function () {
  document.querySelectorAll('.fc, .pc, .wc').forEach(card => {
    const dark = !!card.closest('.section-dark');
    const base = dark ? 'rgba(29,29,29,1)'
                      : `rgba(249,249,249,${card.classList.contains('pc') ? '.82' : '.88'})`;
    const glow = dark ? 'rgba(168,37,31,.16)' : 'rgba(168,37,31,.07)';
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      card.style.background =
        `radial-gradient(circle 220px at ${x}px ${y}px, ${glow}, transparent 65%), ${base}`;
    });
    card.addEventListener('mouseleave', () => { card.style.background = ''; });
  });
})();

// ── Featured card: 3D tilt on hover ───────────────────────────────────────
(function () {
  if (window.matchMedia('(hover:none)').matches) return; // skip touch devices

  document.querySelectorAll('.fc').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.willChange = 'transform';
      card.style.transition = 'box-shadow .25s, border-color .2s'; // suppress transform transition
    });

    card.addEventListener('mousemove', e => {
      const r  = card.getBoundingClientRect();
      const rx = ((e.clientY - r.top  - r.height / 2) / r.height) * -6; // ±3°
      const ry = ((e.clientX - r.left - r.width  / 2) / r.width )  *  6;
      card.style.transform  = `translateY(-5px) perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      card.style.boxShadow  = '0 20px 48px rgba(0,0,0,.13)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform .5s cubic-bezier(.25,.46,.45,.94), box-shadow .4s, border-color .2s';
      card.style.transform  = '';
      card.style.boxShadow  = '';
      setTimeout(() => {
        card.style.transition  = '';
        card.style.willChange  = '';
      }, 520);
    });
  });
})();

// ── Dark sections: expand from inset rounded block → full-bleed on scroll ──
(function () {
  const darks = [...document.querySelectorAll('.section-dark')];
  if (!darks.length) return;
  let ticking = false;
  function update() {
    const vh = window.innerHeight;
    const start = vh * 0.92;   // section top here → fully collapsed (inset block)
    const end   = vh * 0.40;   // section top here → fully expanded (full-bleed)
    darks.forEach(el => {
      const top = el.getBoundingClientRect().top;
      let p = (start - top) / (start - end);
      p = p < 0 ? 0 : p > 1 ? 1 : p;
      el.style.setProperty('--expand', p.toFixed(3));
    });
    ticking = false;
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
})();

// ── Nav: collapse "Shuwen Gong" → "SG" on scroll ──────────────────────────
(function () {
  const nav = document.querySelector('nav');
  function update() {
    const y = window.scrollY;
    const nearBottom = window.innerHeight + y >= document.body.scrollHeight - 140;
    // collapse to "SG" only in the middle; expand to full name at top and bottom
    nav.classList.toggle('scrolled', y > 80 && !nearBottom);
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
})();

