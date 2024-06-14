import { resultVariables } from "./useMakeVariables.js";
//변수 이름 할당
const setName = [];
const setId = [];
resultVariables().forEach((item) => {
  setName.push(item._name);
  setId.push(item._id);
});
for (let i = 0; i < setName.length; i++) {
  setName[i] = document.getElementById(`${setId[i]}`);
}

//AJAX 사용
const getMovieAJAX = (page) => {
  const xhr = new XMLHttpRequest();
  const key = `583ae85ee3d661098b9bed3b3c43ec4b`;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=ko-KR&page=${page}`;
  xhr.open("GET", url);
  xhr.addEventListener("load", () => {
    if (xhr.status === 200) {
      const result = JSON.parse(xhr.responseText);
      const listArray = [];
      result.results.forEach((item) => {
        listArray.push(
          `<li>제목 : ${item.title} <br> 소개글 : ${item.overview} <br>        <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" alt="${item.title}poster">
          </li>`
        );
      });
      setName[3].innerHTML += `<ul>${listArray.join("")}</ul>`;
      if (page < 8) {
        getMovieAJAX(page + 1);
      }
    }
  });
  xhr.send();
};
getMovieAJAX(1);
