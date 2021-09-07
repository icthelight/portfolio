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
  color: rgb(53,98,123);
  opacity: 0;
  transform: translateY(50px);
  transition: 0.4s;

  .inView & {
    opacity: 1;
    transform: none;
  }
`;
export default SectionTitle;
