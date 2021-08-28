import React from 'react';
import styled from 'styled-components';
import {Animated} from "react-animated-css";


const SkillItem = () => {
  return (
    <Container>
      <Skill>
        <Title>HTML/CSS</Title>
        <Content></Content>
      </Skill>
      <Skill>
        <Title>Javascript</Title>
        <Content></Content>
      </Skill>
      <Skill>
        <Title>ReactJS</Title>
        <Content></Content>
      </Skill>
      <Skill>
        <Title>NextJS</Title>
        <Content></Content>
      </Skill>
      <Skill>
        <Title>Redux</Title>
        <Content></Content>
      </Skill>

    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Skill = styled.div`
  margin: 20px;
`;

const Title = styled.div`

`;

const Content = styled.div`

`;
export default SkillItem;
