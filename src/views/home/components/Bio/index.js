import styled from 'styled-components';
import Image from 'next/image';

import profile from '../../../../images/profile.jpeg';
import Section from "../shared/Section";
import SectionTitle from "../shared/SectionTitle";
import DescItem from "./DescItem";
import {ContentContainer} from "../../../shared/components/LayoutStyled";

const Bio = () => {
  return (
    <Container id={'bio'}>
      <SectionTitle className={'bio'}>
        Bio
      </SectionTitle>
      <ContentContainer>
        <Contents>
          <ImageBox>
            <Image src={profile}/>
          </ImageBox>
          <Desc>
            <DescItem/>
          </Desc>
        </Contents>
        <Intro>
          아마존에서 근무할 당시 다양한 툴과 프로그램을 접하며 프로그래밍에 대한 관심이 생겼습니다. <br/>
          저만의 사이트를 만들어보겠다는 생각으로 웹 프로그래밍에 뛰어들었고, <br/>
          지금은 React.js, Next.js, Redux, Redux-saga 등을 이용하여
          비동기통신 하는 웹 사이트도 제작할 수 있게 되었습니다.
        </Intro>
      </ContentContainer>
    </Container>
  )
}

const Container = styled(Section)`

`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 980px) {
    display: block;
  }
`;

const ImageBox = styled.div`
  flex-shrink: 0;
  margin: 0 100px;

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }

  @media screen and (max-width: 980px) {
    margin: 0;
    display: flex;
    justify-content: center;
    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
  }
`;

const Desc = styled.div`

`;

const Intro = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: #767676;
  font-style: italic;
`;
export default Bio;
