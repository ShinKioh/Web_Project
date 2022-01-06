// alert('테스트');
// 상수 const로 태그 객체를 저장한다.
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const h1 = document.querySelector('h1');

// 랜덤 숫자를 만들어서 그 숫자값의 주사위를 출력한다.
// 변수 let(자바스크립트는 타입이 필요없음)
let n1 = Math.floor(Math.random() * 6) + 1;
let n2 = Math.floor(Math.random() * 6) + 1;

console.log(n1);
console.log(n2);

img1.setAttribute('src', 'images/dice' + n1 + '.png');
img2.setAttribute('src', 'images/dice' + n2 + '.png');

if (n1 > n2) {
  h1.textContent = '🚩Play1 Win';
} else if (n1 < n2) {
  h1.textContent = '🚩Play2 Win';
} else {
  h1.textContent = 'Draw';
}
