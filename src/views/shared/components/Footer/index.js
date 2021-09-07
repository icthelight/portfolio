import styled, {css} from 'styled-components';
import {useRouter} from "next/router";

import Desc from "./Desc";

const Footer = () => {
  const location = useRouter();
  const isHome = location.asPath === '/'

  return (
    <Container id={'contact'} isHome={isHome}>
      <Desc/>
    </Container>
  )
}

const Container = styled.div`
  padding: 0 50px;

  ${p => !p.isHome && css`
    background: rgb(0, 173, 181);
    color: #fff;
  `}
`;
export default Footer;
