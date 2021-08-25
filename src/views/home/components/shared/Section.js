import styled from 'styled-components';
import SectionTitle from "./SectionTitle";


const Section = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.section`
  height: 100vh;
  padding: 100px 0;
  border-bottom: 2px solid #fff;
  background: #EDEEED;
`;
export default Section;
