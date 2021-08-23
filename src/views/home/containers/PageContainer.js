import styled from 'styled-components';
import Visual from "../components/Visual";
import Bio from "../components/Bio";
import Works from "../components/Works";
import Skills from "../components/Skills";


const PageContainer = () => {
    return (
        <Container>
            <Visual/>
          <Bio/>
          <Works/>
          <Skills/>
        </Container>
    )
}

const Container = styled.div`

`;
export default PageContainer;
