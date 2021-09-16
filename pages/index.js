import Head from 'next/head'
import styled from 'styled-components';

import PageContainer from "../src/views/home/containers/PageContainer";

function Home() {
  return (
    <Container>
      <Head>
        <title>포트폴리오 - 메인</title>
      </Head>
      <PageContainer/>
    </Container>
  )
}

const Container = styled.div`
`;

export default Home;
