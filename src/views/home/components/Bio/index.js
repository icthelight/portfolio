import styled from 'styled-components';
import Link from 'next/link'

import Section from "../shared/Section";
import SectionTitle from "../shared/SectionTitle";
import DescItem from "./DescItem";


const Bio = () => {
  return (
    <Container>
      <SectionTitle className={'bio'}>
          Bio
      </SectionTitle>
      <Contents>
        <ImageBox>
          <img src="https://media-exp1.licdn.com/dms/image/C5603AQEtKs_2_YLgVQ/profile-displayphoto-shrink_800_800/0/1596814966945?e=1635379200&v=beta&t=BAyIVXWdy3fs27QnBUdGlsdkoMZ58lODDujHIdoTkn0" alt=""/>
        </ImageBox>
        <Desc>
          <DescItem/>
        </Desc>
      </Contents>
      <Intro>
        아마존에서 근무할 당시 다양한 툴과 프로그램을 접하며 프로그래밍에 대한 관심이 생겼습니다. <br/>
        저만의 사이트를 만들어보겠다는 생각으로 웹 프로그래밍에 뛰어들었고 <br/>
        지금은 React.js, Next.js, Redux, Redux-saga 등을 이용하여
        비동기통신하는 웹 사이트도 구성할 수 있게 되었습니다.
      </Intro>
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

const Intro = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: #767676;
  font-style: italic;
`;
export default Bio;
