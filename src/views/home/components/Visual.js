import styled from 'styled-components';


const Visual = () => {
  return (
    <Container>
      <Content>
        <Slogan>
          <h1>
            안녕하세요. <br/>
            신입 프론트엔드 개발자 김형지입니다.
          </h1>
        </Slogan>
      </Content>
      <Screen/>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  height: 750px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80') 50%/cover no-repeat;
`;

const Content = styled.div`
  position: relative;
  z-index: 100;
`;

const Slogan = styled.h1`
  font-size: 40px;
  color: #fff;
  font-weight: 500;
`;

const Screen = styled.div`
  position: absolute;
  top:0;
  bottom: 0;
  left:0;
  right: 0;
  pointer-events: none;
  background: rgba(0,0,0,0.5)
  
`;
export default Visual;
