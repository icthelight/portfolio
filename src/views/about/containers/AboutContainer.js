import styled from 'styled-components';

import KoreanCV from "../components/KoreanCV";
import EnglishCV from "../components/EnglishCV";

const AboutContainer = () => {
  return (
    <Container>
      <KoreanCV/>
      <EnglishCV/>
    </Container>
  )
}

const Container = styled.div`

`;
export default AboutContainer;
