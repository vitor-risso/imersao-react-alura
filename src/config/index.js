const URL_BACKEND = window.location.href.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://pipocaflix.herokuapp.com';

export default {
  URL_BACKEND,
};
