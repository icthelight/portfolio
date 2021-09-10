import styled from 'styled-components';

const BlogProfile = () => {
  return (
    <Container>
      <Content>
        앞서 소개된 Unsplash, YouTube 등의 사이트를 만들면서 각 기능들을 어떻게 구현했는지 소개하는 블로그 페이지입니다.
      </Content>
    </Container>
  )
}

const Container = styled.div`
  margin: 100px 0 30px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;
export default BlogProfile;
