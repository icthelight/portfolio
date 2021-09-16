import styled from 'styled-components';
import Link from 'next/link';

const Gnb = () => {
  return (
    <Container>
      <NavItem>
        <Link href={'/'}>
          <NavLink>Home</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href={'/about'}>
          <NavLink>About</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href={'/blog'}>
          <NavLink>Blog</NavLink>
        </Link>
      </NavItem>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled.div`

`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0 20px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
  cursor: pointer;
  .scrolled & {
    color: #333;
  }
`;
export default Gnb;
