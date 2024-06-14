const getMovieAJAX = () => {
  const xhr = new XMLHttpRequest();
  const url = ` https://api.themoviedb.org/3/movie/popular?language=ko&page=1`;
  xhr.open("GET", url);
  xhr.addEventListener("load", () => {
    if (xhr.status === 200) {
      console.log("데이터 조회");
      console.dir(xhr);
    }
  });
  xhr.send();
};
getMovieAJAX();
