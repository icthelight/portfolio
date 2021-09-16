import styled, {css} from 'styled-components';
import {useRouter} from "next/router";

import Desc from "./Desc";

const Footer = () => {
  const location = useRouter();
  const isHome = location.asPath === '/'
  const isAbout = location.asPath === '/about'
  const isBlog = location.asPath === '/blog'
  const isBlogId = location.pathname === '/blog/[id]'

  return (
    <Container id={'contact'} isBlog={isBlog} isAbout={isAbout} isBlogId={isBlogId}>
      <Desc/>
    </Container>
  )
}

const Container = styled.div`

  ${p => p.isAbout && css`
    background: rgb(0, 173, 181);
    color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  `}

  ${p => p.isBlog && css`
    position: relative;
    background: rgb(0, 173, 181);
    color: #fff;
  `}

  ${p => p.isBlogId && css`

    background: rgb(0, 173, 181);
    color: #fff;
  `}
`;
export default Footer;
