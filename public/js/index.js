import { resultVariables } from "./useMakeVariables.js";
//만들어진 객체의 배열을 forEach를 활용해 새로운 배열에 값을 나눠줌
const setName = [];
const setId = [];
resultVariables().forEach((item) => {
  setName.push(item._name);
  setId.push(item._id);
});
//배열을 이용한 변수 할당
for (let i = 0; i < setName.length; i++) {
  setName[i] = document.getElementById(`${setId[i]}`);
}
setName[1].innerHTML = "자본주의식 영화 맞추기";
//랜덤 숫자를 뽑기 위해 random, floor 메서드 사용
const numberRandom = [];
for (let i = 0; i < 11; i++) {
  const randomIndex = Math.floor(Math.random() * 101);
  if (numberRandom[i] !== randomIndex) {
    numberRandom.push(randomIndex);
  }
}
console.log(numberRandom);
//AJAX 사용
const getMovieAJAX = (page) => {
  const xhr = new XMLHttpRequest();
  const key = `583ae85ee3d661098b9bed3b3c43ec4b`;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=ko-KR&page=${page}`;
  xhr.open("GET", url);
  //load 될 때 이벤트 발생
  xhr.addEventListener("load", () => {
    if (xhr.status === 200) {
      const result = JSON.parse(xhr.responseText);
      const listArray = [];
      //받아온 데이터의 results를 forEach를 활용해 list 만듦
      result.results.forEach((item) => {
        listArray.push(
          `<li>제목 : ${item.title} <br> 소개글 : ${item.overview} <br>        <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" alt="${item.title}poster">
          </li>`
        );
      });
      //list의 innerHTML에 할당해줌
      setName[3].innerHTML += `<ul>${listArray.join("")}</ul>`;
      //여러 페이지의 정보를 받기 위해, 해당 페이지가 될 때 까지 반복
      if (page < 8) {
        getMovieAJAX(page + 1);
      }
    }
  });
  xhr.send();
};
//AJAX 함수 호출
getMovieAJAX(1);
