import styled from 'styled-components';

import InView from "../../../shared/components/inView";


const Section = ({children, id}) => {
  return (
    <InView>
      <Container id={id}>
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
`;
export default Section;
