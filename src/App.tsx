import React from 'react';
import { createGlobalStyle } from "styled-components";


import Table from './components/table';
import Footer from './components/footer';

function App() {

  const GlobalStyles = createGlobalStyle`
    @import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css); 
    
    body{
      font-family: 'Noto Sans KR', sans-serif;
    }
  `;

  return (
    <>
      <GlobalStyles />
      <Table />
      <Footer />
    </>
  );
}

export default App;
