import styled from 'styled-components';

import {skills} from "../../../../data/skills";
import {ContentContainer} from "../../../shared/components/LayoutStyled";

const SkillItem = () => {
  return (
    <Container>
      <ContentContainer>
        {
          skills.map((item) => (
            <Skill key={item.title}>
              <Title>
                {item.title}
              </Title>
              <Content>
                {item.desc}
              </Content>
            </Skill>
          ))
        }
      </ContentContainer>
    </Container>
  )
}

const Container = styled.div`

`;

const Skill = styled.div`
  padding: 20px;
  margin: 40px 0;
  border: 1px solid rgb(0,173,172);
  border-radius: 20px;
  
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: rgb(0,173,172);
  margin-bottom: 10px;
`;

const Content = styled.div`
  font-weight: bold;
`;
export default SkillItem;
