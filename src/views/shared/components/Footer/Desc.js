import styled from 'styled-components';
import {AiOutlineHome, AiOutlineMail} from "react-icons/ai";
import {BiPhoneCall} from "react-icons/bi";

const Desc = () => {
  return (
    <Container id={'contact'}>
       <Item>
         <Title>
           <Icon>
             <AiOutlineMail/>
           </Icon>
           E-MAIL
         </Title>
         <Content>icthelight@naver.com</Content>
       </Item>
      <Item>
        <Title>
          <Icon>
            <BiPhoneCall/>
          </Icon>
          MOBILE
        </Title>
        <Content>+82-10-5495-4375</Content>
      </Item>
      <Item>
        <Title>
          <Icon>
            <AiOutlineHome/>
          </Icon>
          ADDRESS
        </Title>
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
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    width: 24px;
    height: 24px;
    margin-right: 4px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
`;
export default Desc;
