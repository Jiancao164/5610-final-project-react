export const findMovieById = (mid) =>
    fetch(`https://api.themoviedb.org/3/movie/${mid}?api_key=96bf64810bb08ac090ee8a60602af234`, {
    }).then(response => response.json());