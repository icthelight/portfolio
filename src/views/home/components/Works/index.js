import React from 'react';
import styled from 'styled-components';
import Section from "../shared/Section";
import SectionTitle from "../shared/SectionTitle";
import WorkItems from "./WorkItems";


const Works = () => {
    return (
        <Container>
          <SectionTitle>Works</SectionTitle>
          <WorkItems/>
        </Container>
    )
}

const Container = styled(Section)`

`;
export default Works;
