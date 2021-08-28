import styled from 'styled-components';
import Link from 'next/link';

const Nav = () => {
  return (
    <Container>
      <NavItem>
        Bio
      </NavItem>
      <NavItem>Works</NavItem>
      <NavItem>Skills</NavItem>
      <NavItem>Contact</NavItem>
    </Container>
  )
}

const Container = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  background: #353866;
  height: 100px;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  font-size: 24px;
  color: #fff;
`;
export default Nav;
