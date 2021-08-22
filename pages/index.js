import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';

function Home() {
  return (
    <Container>
      <Head>
        <title>포트폴리오 -  메인</title>
      </Head>
      <div>app</div>
    </Container>
  )
}
const Container = styled.div`
    background: #3498db;
`;

export default Home;