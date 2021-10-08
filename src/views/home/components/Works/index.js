import styled from 'styled-components';

import Section from "../shared/Section";
import SectionTitle from "../shared/SectionTitle";
import ProjectsSlick from "./Slick/ProjectsSlick";


const Works = () => {
    return (
        <Container id={'works'}>
          <SectionTitle>Works</SectionTitle>
          <ProjectsSlick/>
        </Container>
    )
}

const Container = styled(Section)`

`;
export default Works;
