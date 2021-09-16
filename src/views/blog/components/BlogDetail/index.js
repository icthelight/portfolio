import styled from 'styled-components';

import {blogData} from "../../../../data/Blog";
import Content from "./Content";

const BlogDetail = ({id}) => {
  const blogContent = blogData.find((item) => item.title === id)
    return (
        <Container>
          <Content content={blogContent}/>
        </Container>
    )
}

const Container = styled.div`

`;
export default BlogDetail;
