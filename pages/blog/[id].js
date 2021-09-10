import styled from 'styled-components';
import {useRouter} from 'next/router';


const Blog = () => {

  const router = useRouter();
  const id  = router.query.id;

  return (
    <Container>
      <Content>{id}</Content>
    </Container>
)
}

const Container = styled.div`
    
`;

const Content = styled.div`
  
`;

export default Blog;
