import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer';
import Menu from '../Menu';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-right: 5%;
    padding-left: 5%;
`;

function PageDefault({ children }) {
  return (
    <>
      <Menu />

      <Main>

        {children}

      </Main>

      <Footer />
    </>

  );
}

export default PageDefault;
