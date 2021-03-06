import styled from 'styled-components';
import {Link} from 'react-scroll'

import {sectionNames} from "../../../../data";

const Nav = () => {

  return (
    <Container>
      {
        sectionNames.map((item, index) => (
          <NavItem key={index} className={'navItem'}>
            <Link activeClass="isActive"
                  to={item.name}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-20}
                  duration={500}
            >
              <Icon>{item.icon}</Icon>
              {item.name}
            </Link>
          </NavItem>
        ))
      }
    </Container>
  )
}

const Container = styled.nav`
  position: fixed;
  right: -10px;
  top: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 5px;
  line-height: 35px;
  color: #fff;
  border-radius: 20px;
  background: rgba(0,173,172,0.7);
  transform: translateX(60%);
  transition: 0.4s;

  &:hover {
    transform: none;
  }


  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    font-size: 20px;
    color: #fff;
    text-transform: capitalize;
    cursor: pointer;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  svg {
    width: 24px;
    height: 24px;
  }
`;
export default Nav;
