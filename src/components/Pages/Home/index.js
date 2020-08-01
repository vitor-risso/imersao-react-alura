import React, { useEffect } from 'react';
import Menu from '../../Menu';
import dadosIniciais from '../../../data/dados_iniciais.json';
import BannerMain from '../../BannerMain';
import Carousel from '../../Carousel';
import Footer from '../../Footer';

// import categoriesRepository from '../../../repositories';


function Home() {
  // useEffect(() => {
  // categoriesRepository.getAllWithVideo();

  // fetch(URL_BACKEND)
  //  .then(async (respostaDoServer) => {
  //  if (respostaDoServer.ok) {
  //  const resposta = await respostaDoServer.json();
  // setCategorias(resposta);
  // return;
  // }
  // throw new Error('Não foi possível pegar os dados');
  // });
  // });

  return (
    <div style={{ background: '#141414' }}>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Site de musica sertaneja desenvolvido junto com a Alura durante a imersao React!"
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}
      />

      <Footer />
    </div>
  );
}

export default Home;
