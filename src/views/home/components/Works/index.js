import React from 'react';
import styled from 'styled-components';
import Section from "../shared/Section";
import SectionTitle from "../shared/SectionTitle";
import Projects from "./Projects";


const Works = () => {
    return (
        <Container id={'works'}>
          <SectionTitle>Works</SectionTitle>
          <Projects/>
        </Container>
    )
}

const Container = styled(Section)`

`;
export default Works;
