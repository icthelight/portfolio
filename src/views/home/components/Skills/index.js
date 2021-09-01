import React from 'react';
import styled from 'styled-components';

import Section from "../shared/Section";
import SectionTitle from "../shared/SectionTitle";
import SkillItem from "./SkillItem";


const Skills = () => {
    return (
        <Container id={'skills'}>
          <SectionTitle>Skills</SectionTitle>
          <SkillItem/>
        </Container>
    )
}

const Container = styled(Section)`

`;
export default Skills;
