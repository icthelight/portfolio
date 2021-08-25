import styled from 'styled-components';

import Section from "../shared/Section";
import SectionTitle from "../shared/SectionTitle";
import DescItem from "./DescItem";


const Bio = () => {
  return (
    <Container>
      <SectionTitle>Bio</SectionTitle>
      <Contents>
        <ImageBox>
          <img src="https://media-exp1.licdn.com/dms/image/C5603AQEtKs_2_YLgVQ/profile-displayphoto-shrink_800_800/0/1596814966945?e=1635379200&v=beta&t=BAyIVXWdy3fs27QnBUdGlsdkoMZ58lODDujHIdoTkn0" alt=""/>
        </ImageBox>
        <Desc>
          <DescItem/>
        </Desc>
      </Contents>
    </Container>
  )
}

const Container = styled(Section)`

`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageBox = styled.div`
  margin: 0 100px;
img {
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
`;

const Desc = styled.div`

`;
export default Bio;
