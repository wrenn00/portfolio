/* 메인 그리드 렌더링 + 카테고리 필터 */
(function () {
  const grid = document.querySelector('[data-grid]');
  const bar  = document.querySelector('[data-filters]');
  if (!grid || typeof PROJECTS === 'undefined') return;

  const used = new Set(PROJECTS.map(p => p.category));
  const cats = CATEGORIES.filter(c => c.id === 'all' || used.has(c.id));

  bar.innerHTML = cats.map((c, i) =>
    `<button class="filter" type="button" data-cat="${c.id}"
       aria-pressed="${i === 0}">${c.label}</button>`
  ).join('');

  const io = 'IntersectionObserver' in window
    ? new IntersectionObserver((es, o) => {
        es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); o.unobserve(e.target); } });
      }, { rootMargin: '0px 0px -8% 0px' })
    : null;

  function card(p) {
    const thumb = p.thumb
      ? `<img src="${p.thumb}" alt="${p.title} 썸네일" loading="lazy">`
      : `<div class="ph">IMAGE</div>`;
    const wip   = p.url ? '' : `<span class="badge">준비중</span>`;
    const tags  = (p.tags || []).map(t => `<li>${t}</li>`).join('');
    const inner = `
      <div class="card-thumb">${thumb}${wip}</div>
      <div class="card-body">
        <h3 class="card-title">${p.title}</h3>
        <p class="card-summary">${p.summary || ''}</p>
        <ul class="card-tags">${tags}</ul>
      </div>`;
    const cls = 'card';
    return p.url
      ? `<a class="${cls}" href="${p.url}">${inner}</a>`
      : `<div class="${cls}" aria-disabled="true">${inner}</div>`;
  }

  function render(cat) {
    const list = cat === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === cat);
    grid.innerHTML = list.length
      ? list.map(card).join('')
      : `<p class="empty">해당 카테고리의 작업물이 아직 없습니다.</p>`;
    grid.querySelectorAll('.card').forEach((el, i) => {
      el.style.transitionDelay = Math.min(i * 45, 300) + 'ms';
      io ? io.observe(el) : el.classList.add('in');
    });
  }

  bar.addEventListener('click', e => {
    const btn = e.target.closest('.filter');
    if (!btn) return;
    bar.querySelectorAll('.filter').forEach(b => b.setAttribute('aria-pressed', b === btn));
    render(btn.dataset.cat);
  });

  render('all');
})();
