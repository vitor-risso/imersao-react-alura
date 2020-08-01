const URL_BACKEND = window.location.href.includes('localhost')
  ? 'https://localhost8080'
  : 'https://pipocaflix.herokuapp.com/categorias';

export default {
  URL_BACKEND,
};
