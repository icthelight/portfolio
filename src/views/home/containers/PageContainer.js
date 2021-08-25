import styled from 'styled-components';
import Visual from "../components/Visual";
import Bio from "../components/Bio";
import Works from "../components/Works";
import Skills from "../components/Skills";
import Nav from "../components/shared/Nav";


const PageContainer = () => {
  return (
    <Container>
      <Visual/>
      <Nav/>
      <Bio/>
      <Works/>
      <Skills/>
    </Container>
  )
}

const Container = styled.div`

`;
export default PageContainer;
