// 열기,닫기 버튼 객체, 컨테이너 객체
const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

// 열기 버튼을 클릭하면 show-nav 클래스 추가
open.addEventListener('click', () => {
  container.classList.add('show-nav');
});

// 닫기 버튼을 클릭하면 show-nav 클래스 제거
close.addEventListener('click', () => {
  container.classList.remove('show-nav');
});
