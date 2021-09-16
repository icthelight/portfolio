import styled, {css} from 'styled-components';

import InView from "../../../shared/components/inView";
import {useRouter} from "next/router";


const Section = ({children, id}) => {
  const location = useRouter();
  const isBlogId = location.pathname === '/blog/[id]'

  return (
    <InView>
      <Container id={id} isBlogId={isBlogId}>
        {children}
      </Container>
    </InView>
  )
}

const Container = styled.section`
  height: 100vh;
  padding: 100px 0;
  border-bottom: 2px solid #fff;
  background: #eee;
  
  @media screen and (max-width: 980px) {
  height: unset;
}

  ${p => p.isBlogId && css`
    height: unset;
  `}
`;
export default Section;
