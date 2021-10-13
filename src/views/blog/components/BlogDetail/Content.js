import styled from 'styled-components';
import Image from 'next/image';

import defaultThumb from '../../../../images/Blog/default thumb.png'
import Tags from "./Tags";


const Content = ({content = []}) => {
  return (
    <Container>
      <Header>
        <TopHeader>
          <h3> {content.author}</h3>
          <span/>
          <p> {content.publishedAt}</p>
        </TopHeader>
        <TagBox>
          관련 키워드 <Tags tags={content.tags}/>
        </TagBox>
      </Header>
      <ImageBox>
        <Image src={content?.thumbnail || defaultThumb}/>
        <h3>{content.description}</h3>
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

const TagBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #6BA4DE;
`;

const ImageBox = styled.div`
  margin: 20px auto;
  text-align: center;
   img {
     width: 100%;
     height: 190px;
   }
  
  color: #767676;
  h3 {
    margin-top: 20px;
  }
`;

const Desc = styled.div`

`;
export default Content;
