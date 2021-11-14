import styled from 'styled-components';
import Link from 'next/link';

const Gnb = () => {
  return (
    <Container>
      <NavItem>
        <Link href={'/'}>
          <a>Home</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href={'/about'}>
          <a>About</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href={'/blog'}>
          <a>Blog</a>
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
 a{
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
 }
`;
export default Gnb;
