import styled from 'styled-components';

import Header from "../src/views/shared/components/Header";
import Footer from "../src/views/shared/components/Footer";
import '../src/styled/reset.css'
import BackTop from "../src/views/shared/components/BackTop";

function MyApp({Component, pageProps}) {

  return (
    <Container>
      <Header/>
      <Component {...pageProps} />
      <BackTop/>
      <Footer/>
    </Container>

  )
}

const Container = styled.div`

`;
export default MyApp
