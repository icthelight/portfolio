import styled from 'styled-components';
import {useEffect, useState} from "react";
import cn from 'classnames';

import Gnb from "./Gnb";
import {boxShadow} from "../../../../styled/mixin";
import {useMyRef} from "../../../../hook/useMyRef";


const Header = () => {

  const scrolled = useMyRef(700)

  return (
    <Container className={cn({scrolled})}>
      <Logo>
        김형지
      </Logo>
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
  transition: 0.3s;


  &.scrolled {
    background: #fff;
    box-shadow: ${boxShadow()};
    &:hover {
      box-shadow: ${boxShadow(3)};
    }
  }
`;

const Logo = styled.div`
  font-size: 24px;
  color: #fff;
  font-weight: 500;

  .scrolled & {
    color: #333;
  }
`;
export default Header;
