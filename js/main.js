// ── Project data ───────────────────────────────────────────
// images[]: put your screenshots in assets/images/projects/
// Use descriptive filenames, e.g. truck-reversing-1.jpg
const PROJECTS = {
  'truck-reversing': {
    badge: 'Vehicle Dynamics · ADAS',
    title: 'Reversing Aid for Articulated Trucks',
    desc: 'Model-based reversing assistance system for semi-trailer trucks, built in MATLAB/Simulink. Kinematically models the articulated joint geometry to compute real-time steering guidance for precise low-speed manoeuvring in constrained environments such as loading docks and freight terminals — directly relevant to autonomous freight operations.\n\nThe controller accounts for the geometric relationship between tractor and trailer, computing the required steering angle at each timestep to guide the combination along a target reverse path. Validated across multiple trailer configurations and initial conditions via simulation.',
    tags: ['Simulink', 'MATLAB', 'Vehicle Dynamics', 'Control Systems', 'ADAS', 'Articulated Vehicles'],
    images: [
      { src: 'assets/images/projects/truck-reversing-1.jpg', caption: 'Simulink model — full system overview' },
      { src: 'assets/images/projects/truck-reversing-2.jpg', caption: 'Simulation results — steering angle vs time' },
      { src: 'assets/images/projects/truck-reversing-3.jpg', caption: 'Trailer path tracking in constrained space' },
    ],
    links: [{ label: 'Report available on request' }],
  },
  'shard-engine': {
    badge: 'C++ · Real-time Systems',
    title: 'Real-time Systems Engineering — Shard Game Engine',
    desc: 'Led performance engineering on the Shard C++ engine across multiple shipped live-service titles. Profiled and resolved frame-time bottlenecks in render and physics subsystems, redesigned data layouts for cache efficiency, and enforced strict latency budgets under production constraints.\n\nKey interventions included eliminating hotspots in the physics broadphase, restructuring entity-component memory layout for spatial locality, and reducing synchronisation overhead in the render thread. The same determinism discipline — minimising jitter, maximising throughput under hard deadlines — applies directly to AV embedded stacks and safety-critical ADAS pipelines.',
    tags: ['C++', 'Performance Profiling', 'Real-time Systems', 'Cache Optimization', 'Latency Engineering', 'Physics Engine', 'Rendering'],
    images: [
      { src: 'assets/images/projects/shard-engine-1.jpg', caption: 'Profiler output — frame time breakdown' },
      { src: 'assets/images/projects/shard-engine-2.jpg', caption: 'Memory layout before/after optimisation' },
    ],
    links: [{ label: 'Shipped titles available on request' }],
  },
  'sfm': {
    badge: 'Computer Vision · Perception',
    title: '2D Structure-from-Motion with Planar Homographies',
    desc: 'Implemented a Structure-from-Motion pipeline using planar homographies to reconstruct scene geometry from monocular image sequences. Built from scratch in Python.\n\nPipeline stages: feature detection and matching (SIFT/ORB), homography estimation with RANSAC outlier rejection, camera pose recovery from homography decomposition, and sparse 3D point triangulation. These techniques are foundational to monocular depth estimation and ego-motion in autonomous vehicles.',
    tags: ['Python', 'OpenCV', 'Computer Vision', '3D Reconstruction', 'Homography', 'RANSAC', 'SIFT'],
    images: [
      { src: 'assets/images/projects/sfm-1.jpg', caption: 'Feature matching across image pair' },
      { src: 'assets/images/projects/sfm-2.jpg', caption: 'Reconstructed 3D point cloud' },
      { src: 'assets/images/projects/sfm-3.jpg', caption: 'Camera trajectory and scene geometry' },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/Jiayoua-Panda', icon: 'github' }],
  },
  'ride-comfort': {
    badge: 'Data-Driven · NVH',
    title: 'Ride Comfort Analysis — Volvo 7900 Electric Bus',
    desc: 'Signal processing and statistical analysis on vibration data from Volvo 7900 Electric City Buses, benchmarked against ISO 2631. Quantified how the electric powertrain\'s torque delivery profile alters cabin vibration characteristics versus combustion counterparts.\n\nMeasured acceleration data was processed with frequency-weighted filters per ISO 2631-1. Statistical comparison of RMS values and vibration dose values between electric and diesel variants revealed characteristic differences in low-frequency vibration content attributable to the torque ripple profile of the electric motor.',
    tags: ['Python', 'Signal Processing', 'NVH', 'ISO 2631', 'Volvo', 'Data Analysis'],
    images: [
      { src: 'assets/images/projects/ride-comfort-1.jpg', caption: 'Frequency-weighted acceleration spectrum' },
      { src: 'assets/images/projects/ride-comfort-2.jpg', caption: 'ISO 2631 comfort comparison — electric vs diesel' },
    ],
    links: [{ label: 'Report available on request' }],
  },
  'bicycle-safety': {
    badge: 'Active Safety · ADAS',
    title: 'Bicycle Overtaking — Active Safety Analysis',
    desc: 'Studied driver behaviour and vehicle dynamics during bicycle overtaking manoeuvres to establish safe lateral clearance requirements and collision risk thresholds across varying speeds and road conditions.\n\nAnalysis covered the influence of vehicle speed, bicycle speed, road width, and driver reaction time on the risk envelope. Findings directly inform ADAS intervention trigger logic for urban mixed-traffic scenarios, where cyclists are a primary vulnerable road user group.',
    tags: ['Active Safety', 'ADAS', 'Vehicle Dynamics', 'Risk Analysis', 'Vulnerable Road Users'],
    images: [
      { src: 'assets/images/projects/bicycle-safety-1.jpg', caption: 'Lateral clearance requirements by speed' },
      { src: 'assets/images/projects/bicycle-safety-2.jpg', caption: 'Risk envelope — speed vs lateral separation' },
    ],
    links: [{ label: 'Report available on request' }],
  },
  'crash-pulse': {
    badge: 'Passive Safety · Biomechanics',
    title: 'Crash Pulse & Restraint Systems — Occupant Injury Risk',
    desc: 'Analysed the relationship between vehicle crash pulse characteristics and occupant injury risk. Examined how seatbelt force limiters, airbag timing, and crash severity interact to determine injury outcomes.\n\nFocus on crash pulse shape (peak deceleration, pulse duration, impulse area) as the primary driver of occupant kinematics, and how restraint system tuning reduces HIC, chest deflection, and femur load within the constraints set by the pulse.',
    tags: ['Passive Safety', 'Biomechanics', 'Restraint Systems', 'Crash Analysis', 'HIC', 'Injury Risk'],
    images: [
      { src: 'assets/images/projects/crash-pulse-1.jpg', caption: 'Crash pulse shape comparison' },
      { src: 'assets/images/projects/crash-pulse-2.jpg', caption: 'Occupant response — restraint system variants' },
    ],
    links: [{ label: 'Report available on request' }],
  },
  'hybrid-model': {
    badge: 'Powertrain · Simulink',
    title: 'Series / Parallel Hybrid Powertrain Model',
    desc: 'Modelled and compared series and parallel hybrid architectures in Simulink, evaluating energy flow efficiency and component sizing trade-offs across WLTP and NEDC drive cycles.\n\nThe series model routes all traction power through the electric motor (ICE charges battery), while the parallel model allows direct mechanical drive. Comparison focused on system efficiency, battery sizing, and regenerative braking recovery under urban and highway segments.',
    tags: ['Simulink', 'MATLAB', 'Hybrid Powertrain', 'Energy Management', 'WLTP', 'NEDC', 'EV'],
    images: [
      { src: 'assets/images/projects/hybrid-1.jpg', caption: 'Series hybrid architecture — Simulink model' },
      { src: 'assets/images/projects/hybrid-2.jpg', caption: 'Energy flow comparison — series vs parallel' },
    ],
    links: [{ label: 'Report available on request' }],
  },
  'shortest-path': {
    badge: 'Python · Algorithms',
    title: 'Shortest Path Navigation System',
    desc: 'Python application with a GUI for computing and visualising shortest paths on map graphs. Implements Dijkstra\'s algorithm with interactive route display.\n\nBuilt with tkinter for the GUI and a custom graph data structure. Users load a map graph, set source and destination nodes, and visualise the computed shortest path with real-time highlighting. Demonstrates route optimisation applicable to logistics and fleet routing problems.',
    tags: ['Python', 'tkinter', 'Graph Algorithms', 'Dijkstra', 'Logistics', 'UI'],
    images: [
      { src: 'assets/images/projects/shortest-path-1.jpg', caption: 'GUI — route visualisation' },
      { src: 'assets/images/projects/shortest-path-2.jpg', caption: 'Shortest path computed on map graph' },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/Jiayoua-Panda', icon: 'github' }],
  },
  'bsc-thesis': {
    badge: 'Control Systems · Aerospace',
    title: 'Air-bearing Platform Attitude Control (BSc Thesis)',
    desc: 'Designed attitude control algorithms for a friction-free air-bearing spacecraft simulator at NUAA, enabling hardware-in-the-loop validation of satellite attitude control strategies.\n\nThe air-bearing platform provides a near-frictionless environment for testing attitude control without the complexity of actual space deployment. The controller maintains platform orientation under disturbance torques — foundation in closed-loop control theory carried forward through all subsequent engineering work.',
    tags: ['MATLAB', 'Control Systems', 'Aerospace', 'NUAA', 'Hardware-in-the-loop'],
    images: [
      { src: 'assets/images/projects/bsc-thesis-1.jpg', caption: 'Air-bearing platform setup' },
      { src: 'assets/images/projects/bsc-thesis-2.jpg', caption: 'Control system block diagram' },
    ],
    links: [{ label: 'Report available on request' }],
  },
};

// ── Profile photo fallback ──────────────────────────────────
const avatarPhoto = document.querySelector('.avatar-photo');
if (avatarPhoto) {
  avatarPhoto.addEventListener('load', () => avatarPhoto.classList.add('loaded'));
  avatarPhoto.addEventListener('error', () => avatarPhoto.remove());
}

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
    { sel: '.fc',                        delays: [.05, .12, .19] },
    { sel: '.pc',                        delays: [.05, .08, .11, .14, .17, .20] },
    { sel: '.ti',                        delays: [0, .08, .16, .24] },
    { sel: '.skb',                       delays: [.05, .10, .15, .20, .25, .30] },
    { sel: '.sc',                        delays: [.05, .10, .15, .20] },
    { sel: '.pb',                        delays: [.22] },
    { sel: '.vid-placeholder,.vid-embed',delays: [.05, .12] },
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
