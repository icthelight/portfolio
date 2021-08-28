import styled from 'styled-components';


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
  background: #eee;
`;
export default Section;
