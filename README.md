# Portfolio

AI-Native Product Designer 포트폴리오 (정적 사이트). **첫 화면에서 바로 작업물 그리드**가 보이도록 설계됨.

## 구조
```
index.html              메인 — 작업물 그리드 + 카테고리 필터
about.html              소개 / 이력 / 연락처
work/_template.html     케이스스터디 템플릿 (복사해서 사용)
work/project-01.html    샘플 케이스스터디
assets/js/projects.js   ★ 작업물 데이터 — 여기만 수정하면 됨
assets/js/main.js       그리드 렌더링 + 필터
assets/css/style.css    전체 스타일 (색은 :root 토큰)
assets/img/             이미지
```

## 작업물 추가하는 법
1. 썸네일을 `assets/img/`에 넣는다 (4:3, 1600×1200 권장).
2. `work/_template.html`을 복사해 `work/새이름.html`로 저장하고 내용을 채운다.
3. `assets/js/projects.js`의 `PROJECTS` 배열에 항목을 추가한다.
   - `url: ''` → "준비중" 배지가 붙고 클릭 불가.

## 커스터마이즈
- 이름/링크: 각 html의 `NAME`, footer 링크를 찾아 바꾸기.
- 색상/폰트: `assets/css/style.css` 상단 `:root`.
- 카테고리: `projects.js`의 `CATEGORIES` (사용 중인 카테고리만 필터에 자동 노출).

## 로컬 실행
```
python3 -m http.server 8000     # http://localhost:8000
```

## 배포 (GitHub Pages)
`<username>.github.io` 저장소를 만들어 이 폴더를 push → Settings > Pages > main 브랜치.
