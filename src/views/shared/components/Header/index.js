import styled from 'styled-components';
import Gnb from "./Gnb";


const Header = () => {
  return (
    <Container>
      <Logo>김형지</Logo>
      <Gnb/>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;

const Logo = styled.div`
  font-size: 20px;
  color: #fff;
  font-weight: 500;
`;
export default Header;
