import styled from 'styled-components';
import Image from 'next/image'

import marketer from '../../../../images/marketer.png'


const WorkItems = () => {
  return (
    <Container>
      <Grid>
        <GridItem>
          <Item>
            <Thumb href={'https://github.com/icthelight/Marketer_rev.git'}>
              <Image src={marketer}></Image>
              <Screen/>
            </Thumb>
            <Desc>
              Html, SCSS 사용
            </Desc>
          </Item>
        </GridItem>
        <GridItem>
          <Item>

          </Item>
        </GridItem>
        <GridItem>
          <Item></Item>
        </GridItem>
      </Grid>
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
export default WorkItems;
