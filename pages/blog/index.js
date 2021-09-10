import styled from 'styled-components';
import Head from 'next/head';

import BlogContainer from "../../src/views/blog/containers/BlogContainer";

const BlogList = () => {

    return (
        <Container>
            <Head>
              <title>포트폴리오 - Blog </title>
            </Head>
          <BlogContainer/>
        </Container>
    )
}

const Container = styled.div`

`;
export default BlogList;
