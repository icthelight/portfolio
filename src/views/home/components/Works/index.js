import styled from 'styled-components';

import Section from "../shared/Section";
import SectionTitle from "../shared/SectionTitle";
import Project from "./Project";


const Works = () => {
    return (
        <Container id={'works'}>
          <SectionTitle>Works</SectionTitle>
          <Project/>
        </Container>
    )
}

const Container = styled(Section)`

`;
export default Works;
