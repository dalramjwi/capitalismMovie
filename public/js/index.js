import { MakeVariables } from "./MakeVariables.js";
const test = new MakeVariables("root", "root");
console.log(test);
const getMovieAJAX = () => {
  const xhr = new XMLHttpRequest();
  const key = `583ae85ee3d661098b9bed3b3c43ec4b`;
  const pageNumber = 1;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=ko-KR&page=${pageNumber}`;
  xhr.open("GET", url);
  xhr.addEventListener("load", () => {
    if (xhr.status === 200) {
      console.log("데이터 조회");
      console.dir(xhr);
      const result = JSON.parse(xhr.responseText);
      console.dir(result);
      console.dir(result.results);
    }
  });
  xhr.send();
};
getMovieAJAX();
