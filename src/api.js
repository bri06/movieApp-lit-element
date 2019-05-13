const api = (API_URL = 'https://www.omdbapi.com/?') => {
  const API_KEY = 'e477ed6a';
  const FILM_URL = `${API_URL}apikey=${API_KEY}`;
  return {
    getFilmsByName: (filmName) => {
      return fetch(`${FILM_URL}&s=${filmName}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.Response === 'True') {
            return data.Search;
          } else {
            return data.Response;
          }
        })
        .catch((err) => console.err(err));
    },
    getFilmDetail: (id) => {
      return fetch(`${FILM_URL}&i=${id}`)
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.err(err));
    }
  };
};

export default api;
