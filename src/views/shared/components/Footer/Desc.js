import styled from 'styled-components';

const Desc = () => {
  return (
    <Container id={'contact'}>
       <Item>
         <Title>E-MAIL</Title>
         <Content>icthelight@naver.com</Content>
       </Item>
      <Item>
        <Title>MOBILE</Title>
        <Content>+82-10-5495-4375</Content>
      </Item>
      <Item>
        <Title>ADDRESS</Title>
        <Content>서울특별시 영등포구 당산2동</Content>
      </Item>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  
`;

const Item = styled.div`
  margin: 20px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  
`;
export default Desc;
