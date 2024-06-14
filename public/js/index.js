const getMovieAJAX = () => {
  const xhr = new XMLHttpRequest();
  const url = ` https://api.themoviedb.org/3/movie/popular?language=ko&page=1`;
  xhr.open("GET", url);
};
