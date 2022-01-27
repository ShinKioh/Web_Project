// 본인 api_key 입력하고 인기도 순으로 영화 정보 주소
const API_URL =
  'https://api.themoviedb.org/3/discover/movie?api_key=eeb3ab89ab48bbe939491abdcf01dae7&language=ko&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
// 포스터 이미지 앞의 주소
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=eeb3ab89ab48bbe939491abdcf01dae7&language=ko&query="';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

// 영화 정보를 가져옴
async function getMovies(url) {
  const res = await fetch(url); // url 주소로 요청해서 데이터를 전송받음, await는 다 받을때까지 대기
  const data = await res.json(); // 데이터 문자열을 json으로 변환해서 data로 저장, await로 대기
  console.log(data.results);

  영화보여주기(data.results); // 필요한 영화 정보만 배열로 출력
}

// 검색창으로 검색했을때(이벤트)
form.addEventListener('submit', (e) => {
  e.preventDefault(); // 원래 이벤트 제거, 폼 submit 이벤트는 서버로 입력 데이터를 보냄
  const searchTerm = search.value;
  // console.log(searchTerm);
  if (searchTerm && searchTerm !== '') {
    // 입력 내용이 공백이 아닐 경우 처리
    getMovies(SEARCH_API + searchTerm);
    search.value = '';
  } else {
    window.location.reload(); // 새로고침
  }
});

function 영화보여주기(movies) {
  main.innerHTML = ''; // 처음에 비우기

  movies.forEach((movie) => {
    const title = movie.title;
    const poster_path = movie.poster_path;
    const vote_average = movie.vote_average;
    const overview = movie.overview;

    const movieEl = document.createElement('div'); // div 태그 생성
    movieEl.classList.add('movie');

    movieEl.innerHTML = `
        <img
        src = "${IMG_PATH + poster_path}"
        alt = "${title}"
        />
        <div class="movie-info">
        <h3>${title}</h3>
        <span class="${평점색선택(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>상세 보기</h3>
          ${overview}
      </div>
        `;
    main.appendChild(movieEl);
  });
}

function 평점색선택(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 6) {
    return 'orange';
  } else {
    return 'red';
  }
}
