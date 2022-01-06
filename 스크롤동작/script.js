// 모든 box 클래스 객체를 담기
const boxes = document.querySelectorAll('.box');

// 스크롤 이벤트 어디서? window
window.addEventListener('scroll', checkBoxes);

// 처음에 한번 실행
checkBoxes();

function checkBoxes() {
  //   console.log(window.innerHeight); // 화면 창의 높이
  const triggerBottom = (window.innerHeight / 5) * 4; // 화면의 4/5 정도의 아래 높이

  // 모든 박스에게 trigger 높이보다 작으면 보이게
  boxes.forEach((box) => {
    // 모든 박스의 상단의 높이
    const boxTop = box.getBoundingClientRect().top; // 박스의 상단 높이
    // 박스 높이 < trigger 포인트 => 박스를 다시 원위치 보이게 (class show 추가)
    if (boxTop < triggerBottom) {
      // 박스 보이게
      box.classList.add('show');
    } else {
      // 박스 안보이게 (show 삭제)
      box.classList.remove('show');
    }
  });
}
