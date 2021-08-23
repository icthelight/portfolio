import Header from "../src/views/shared/components/Header";
import Footer from "../src/views/shared/components/Footer";
import styled from 'styled-components';
import '../src/styled/reset.css'

function MyApp({Component, pageProps}) {

  return (
    <Container>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
    </Container>

  )
}

const Container = styled.div`
    
`;
export default MyApp
