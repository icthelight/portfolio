import styled from 'styled-components';
import Image from 'next/image'

import {works} from "../../../../data/works";
import {ContentContainer} from "../../../shared/components/LayoutStyled";
import {RiArrowLeftSLine, RiArrowRightSLine, RiGithubFill} from "react-icons/ri";

const Projects = () => {
  return (
    <Container>
      <ContentContainer>
        <Icon className={'left'}>
          <RiArrowLeftSLine/>
        </Icon>
        <Scroll>
        <Grid>
          {
            works.list.map((item, index) => (
              <GridItem key={index}>
                <Item>
                  <Thumb href={item.sourceUrl}>
                    <Image src={item.thumbnail} alt={'프로젝트 미리보기'}/>
                    <Screen>
                      <Button>
                        <p>
                            Click here to view source
                        </p>
                        <RiGithubFill/>
                      </Button>
                    </Screen>
                  </Thumb>
                  <Desc>
                    {item.desc}
                  </Desc>
                </Item>
              </GridItem>
            ))
          }
        </Grid>
        </Scroll>
        <Icon className={'right'}>
          <RiArrowRightSLine/>
        </Icon>
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
  border: 1px solid #767676;

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
  background: rgba(0, 0, 0, 0.7);
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const Desc = styled.div`
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Scroll = styled.div`

`;

const Icon = styled.div`
  position: absolute;
  top:0;
  bottom: 0;
  display: flex;
  align-items: center;
  
  &.left {
    left:0;
  }
  
  &.right {
    right: 0;
  }
  
  svg {
    width: 20px;
    height: 20px;
    fill: #fff;
  }
`;

const Button = styled.div`
  color: #fff;
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 30px;
    height: 30px;
    fill: #fff;
  }
`;
export default Projects;
