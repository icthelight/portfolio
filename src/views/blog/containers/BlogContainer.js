import styled from 'styled-components';

import List from "../components/List";
import {ContentContainer} from "../../shared/components/LayoutStyled";
import BlogProfile from "../components/BlogProfile";

const BlogContainer = () => {
  return (
    <Container>
      <ContentContainer>
        <BlogProfile/>
        <List/>
      </ContentContainer>
    </Container>
  )
}

const Container = styled.div`
`;
export default BlogContainer;
