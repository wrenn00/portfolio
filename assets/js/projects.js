/* ------------------------------------------------------------------
   작업물 데이터 — 여기만 수정하면 메인 그리드가 자동으로 갱신됩니다.
   새 작업 추가 = 아래 배열에 객체 하나 추가.

   category : 'ai' | 'digital' | 'brand' | 'experimental' | 'graduation'
              (카테고리 이름은 CATEGORIES에서 바꿀 수 있음)
   thumb    : assets/img/ 안의 이미지 경로 (없으면 placeholder 표시)
   url      : work/xxx.html  (아직 없으면 빈 문자열 '' → '준비중'으로 표시)
------------------------------------------------------------------- */

const CATEGORIES = [
  { id: 'all',          label: 'All' },
  { id: 'ai',           label: 'AI Product' },
  { id: 'digital',      label: 'Digital Product' },
  { id: 'brand',        label: 'Brand Experience' },
  { id: 'experimental', label: 'Experimental' },
  { id: 'graduation',   label: 'Graduation' },
];

const PROJECTS = [
  {
    id: 'project-01',
    title: '알바몬 계약 경험 개선 프로젝트',
    summary: '채용과 단절돼 있던 근로계약 과정을 채팅 안으로 연결한 경험 재설계',
    category: 'ai',
    tags: ['Mobile App', 'UX·UI', 'AI', '2026'],
    year: '2026',
    thumb: '',
    url: 'work/project-01.html',
  },
  {
    id: 'project-02',
    title: '두 번째 작업물',
    summary: '썸네일은 1600×1200(4:3) 정도를 권장합니다.',
    category: 'brand',
    tags: ['Branding', 'Graphic'],
    year: '2025',
    thumb: '',
    url: '',
  },
  {
    id: 'project-03',
    title: '세 번째 작업물',
    summary: '작업이 늘어나면 이 배열에 계속 추가하세요.',
    category: 'experimental',
    tags: ['Type', 'Motion'],
    year: '2025',
    thumb: '',
    url: '',
  },
  {
    id: 'project-04',
    title: '졸업 작품',
    summary: '카테고리 필터는 자동으로 동작합니다.',
    category: 'graduation',
    tags: ['Research', 'Service Design'],
    year: '2025',
    thumb: '',
    url: '',
  },
];
