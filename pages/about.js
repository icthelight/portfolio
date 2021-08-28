import styled from 'styled-components';
import Head from 'next/head';
import AboutContainer from "../src/views/about/containers/AboutContainer";


const About = () => {
  return (
    <Container>
      <Head>
        <title>포트폴리오 - Bio</title>
      </Head>
      <AboutContainer/>
    </Container>
  )
}

const Container = styled.div`
    
`;

export default About;
