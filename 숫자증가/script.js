// counter 클래스가 있는 모든 객체들을 counters에 저장
const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.textContent = '0';
  업데이트카운터(counter);
});

function 업데이트카운터(counter) {
  const target = +counter.getAttribute('data-target');
  //   console.log(target);
  const c = +counter.textContent;

  const increment = target / 200; // 나누기 200한 비율로 증가

  if (c < target) {
    counter.textContent = `${Math.ceil(c + increment)}`;
    setTimeout(() => {
      업데이트카운터(counter);
    }, 1); // 타겟값보다 작으면 0.001초 뒤에 함수 실행
  } else {
    counter.textContent = target; // 타겟값 입력
  }
}
