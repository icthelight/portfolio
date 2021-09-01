import styled from 'styled-components';
import Image from 'next/image'

import {works} from "../../../../data/works";
import {ContentContainer} from "../../../shared/components/LayoutStyled";

const Projects = () => {
  return (
    <Container>
      <ContentContainer>
        <Grid>
          {
            works.list.map((item, index) => (
              <GridItem key={index}>
                <Item>
                  <Thumb href={item.sourceUrl}>
                    <Image src={item.thumbnail} alt={'프로젝트 미리보기'}/>
                    <Screen/>
                  </Thumb>
                </Item>
              </GridItem>
            ))
          }
        </Grid>
      </ContentContainer>
    </Container>
  )
}

const Container = styled.div`

`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const GridItem = styled.div`
  width: 33.3333%;
  padding: 15px;
`;

const Item = styled.div`
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid #333;

`;

const Thumb = styled.a`
  display: block;
  position: relative;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Screen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: rgba(0, 0, 0, 0.3);
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const Desc = styled.div`
  padding: 10px 0;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Projects;
