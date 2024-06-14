import { resultVariables } from "./useMakeVariables.js";
const setName = [];
const setId = [];
resultVariables().forEach((item) => {
  setName.push(item._name);
  setId.push(item._id);
});
for (let i = 0; i < setName.length; i++) {
  setName[i] = document.getElementById(`${setId[i]}`);
  console.log(setName[i]);
}
setName[1].style.backgroundColor = "red";

//AJAX 사용
const getMovieAJAX = () => {
  const xhr = new XMLHttpRequest();
  const key = `583ae85ee3d661098b9bed3b3c43ec4b`;
  const pageNumber = 1;
  for (let i = 0; i < 6; i++) {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=ko-KR&page=${i}`;
    xhr.open("GET", url);
  }
  xhr.addEventListener("load", () => {
    if (xhr.status === 200) {
      const result = JSON.parse(xhr.responseText);
      console.dir(result);
      console.dir(result.results);
    }
  });
  xhr.send();
};
getMovieAJAX();
