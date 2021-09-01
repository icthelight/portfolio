import styled from 'styled-components';
import { Link } from 'react-scroll'

const Nav = () => {
  const sectionNames = ['bio', 'works', 'skills', 'contact']
  return (
    <Container>
        {
          sectionNames.map((item, index) => (
            <NavItem key={index}>
              <Link activeClass="isActive"
                    to={item}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-100}
                    duration={500}
              >
                {item}
              </Link>
            </NavItem>
          ))
        }
    </Container>
  )
}

const Container = styled.nav`
  position: fixed;
  right:0;
  top: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #003B73;
  height: 100px;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  font-size: 24px;
  color: #fff;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
    font-size: 24px;
    color: #fff;
  }
`;
export default Nav;
