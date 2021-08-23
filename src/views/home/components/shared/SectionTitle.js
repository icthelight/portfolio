import styled from 'styled-components';


const SectionTitle = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.h2`
  font-size: 20px;
  margin-bottom: 30px;
  text-align: center;
`;
export default SectionTitle;
