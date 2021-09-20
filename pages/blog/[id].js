import styled from 'styled-components';
import {useRouter} from 'next/router';
import Head from 'next/head';

import {ContentContainer} from "../../src/views/shared/components/LayoutStyled";
import Section from "../../src/views/home/components/shared/Section";
import SectionTitle from "../../src/views/home/components/shared/SectionTitle";
import BlogDetail from "../../src/views/blog/components/BlogDetail";


const Blog = () => {

  const router = useRouter();
  const id  = router.query.id;

  return (
    <Container>
      <Head>
        <title>{id}</title>
      </Head>
      <ContentContainer>
        <SectionTitle>
          {id}
        </SectionTitle>
        <Contents>
          <BlogDetail id={id}/>
        </Contents>
      </ContentContainer>
    </Container>
)
}

const Container = styled(Section)`
    
`;

const Contents = styled.div`
    
`;

export default Blog;
