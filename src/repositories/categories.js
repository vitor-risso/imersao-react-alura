import  {URL_BACKEND} from '../config';

const URL_CATEGORIES = `${URL_BACKEND}/categorias`

function getAllWithVideos() {
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
      .then(async (respostaDoServidor) => {
        if (respostaDoServidor.ok) {
          const resposta = await respostaDoServidor.json();
          return resposta;
        }
  
        throw new Error('Não foi possível pegar os dados :(');
      });
  }


export default {
    getAllWithVideo(),
};