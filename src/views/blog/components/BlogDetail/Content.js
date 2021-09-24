import styled from 'styled-components';
import Image from 'next/image';
import {format} from 'date-fns';

import Tags from "./Tags";


const Content = ({content = []}) => {
  return (
    <Container>
      <Header>
        <TopHeader>
          <h3> {content.author}</h3>
          <span/>
          <p> {format((content.publishedAt), 'yyyy/MM/dd')}</p>
        </TopHeader>
        <Tags tags={content.tags}/>
      </Header>
      <ImageBox>
        <Image src={content.thumbnail}/>
      </ImageBox>
      <Desc>
        {content.desc || null}
      </Desc>
    </Container>
  )
}

const Container = styled.div`
  
`;

const Header = styled.div`
  margin-bottom: 20px;
`;

const TopHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  h3 {
    color: #343A40;
    font-size: 17px;
    font-weight: bold;
  }

  p {
    color: #495057;
    font-size: 17px;
    font-weight: 600;
  }

  span {
    border-radius: 50%;
    width: 4px;
    height: 4px;
    background: #aaa;
    margin: 0 5px;
  }
`;

const ImageBox = styled.div`
  margin: 20px auto;
  text-align: center;
   img {
     width: 100%;
     height: 190px;
   }
`;

const Desc = styled.div`

`;
export default Content;
