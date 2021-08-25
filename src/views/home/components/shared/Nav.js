import styled from 'styled-components';

const Nav = () => {
  return (
    <Container>
      <NavItem>Bio</NavItem>
      <NavItem>Works</NavItem>
      <NavItem>Skills</NavItem>
      <NavItem>Contact</NavItem>
    </Container>
  )
}

const Container = styled.nav`
  display: flex;
  justify-content: center;
  background:#191E32;
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
