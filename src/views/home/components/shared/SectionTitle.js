import styled from 'styled-components';


const SectionTitle = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
  color: #353866;
`;
export default SectionTitle;
