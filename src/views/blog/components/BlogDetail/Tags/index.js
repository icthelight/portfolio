import styled from 'styled-components';

const Tags = ({tags = []}) => {
  return (
    <Container>
      {
        tags.map((tag, index) => <Title key={index}>{tag}</Title>)
      }
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 14px 10px;
`;

const Title = styled.div`
  padding: 0 16px;
  margin: 0 14px;
  border-radius: 16px;
  color: #6BA4DE;
  background-color: #CBDFF4;
  
  font-size: 16px;
  font-weight: bold;
  line-height: 32px;

  &:first-child {
    margin-left: 0;
  }
`;
export default Tags;
