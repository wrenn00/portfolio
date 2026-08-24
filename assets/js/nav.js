/* 탭 사이를 옮겨 다니는 알약 인디케이터
   — 호버하면 미리 따라오고, 클릭하면 도착한 뒤 페이지를 넘김 */
(function () {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const links = [...nav.querySelectorAll('a')];
  const active = nav.querySelector('[aria-current="page"]') || links[0];
  const pill = document.createElement('span');
  pill.className = 'nav-pill';
  pill.setAttribute('aria-hidden', 'true');
  nav.prepend(pill);

  let settled = false;

  function moveTo(el, animate) {
    pill.style.transition = animate ? '' : 'none';
    pill.style.width = el.offsetWidth + 'px';
    pill.style.transform = `translateX(${el.offsetLeft}px)`;
    links.forEach(a => a.classList.toggle('is-lit', a === el));
    if (!animate) requestAnimationFrame(() => { pill.style.transition = ''; });
  }

  // 초기 위치는 애니메이션 없이 잡아 로드 시 미끄러지지 않도록
  moveTo(active, false);
  requestAnimationFrame(() => { settled = true; pill.classList.add('is-ready'); });

  links.forEach(a => {
    a.addEventListener('mouseenter', () => settled && moveTo(a, true));
    a.addEventListener('focus',      () => settled && moveTo(a, true));
    a.addEventListener('click', e => {
      if (a === active) return;
      // 알약이 자리를 잡은 뒤 이동해 페이지 전환이 이어져 보이도록
      e.preventDefault();
      moveTo(a, true);
      setTimeout(() => { location.href = a.href; }, 200);
    });
  });

  nav.addEventListener('mouseleave', () => settled && moveTo(active, true));
  addEventListener('resize', () => moveTo(nav.querySelector('.is-lit') || active, false));
})();
