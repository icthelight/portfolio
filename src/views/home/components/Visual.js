import styled from 'styled-components';


const Visual = () => {
  return (
    <Container>
      <Content>
        <Slogan>할 수 있다</Slogan>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('https://images.unsplash.com/photo-1553044707-b710ee53ffbd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2880&q=80') 50%/cover no-repeat;
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
  background: rgba(0,0,0,0.3)
  
`;
export default Visual;
