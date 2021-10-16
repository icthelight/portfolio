import styled from 'styled-components';

import Section from "../../home/components/shared/Section";
import AboutSlick from "./Slick/AboutSlick";

const KoreanCV = () => {
  return (
    <Container>
      <Content>
        <h1>
          안녕하세요, 신입 프론트엔드 개발자 김형지입니다.
        </h1>
        <p>
          사용자들이 이용하기에 편리하도록 웹페이지를 개발 및 개편하고 더 편리한 새로운 기능을 추가하는 등의 모습을 보며 프론트엔드 직무를 동경하게 되었습니다.
        </p>
        <p>
          <span className={'important'}> ReactJS</span>를 기반으로
          <span className={'important'}> Redux (Redux-Saga, Redux-toolkit)</span> 을 활용하여
          사진을 검색하고 필터링하는 <span className={'important'}>Unsplash</span>,
          동영상을 검색하는 <span className={'important'}>Youtube </span>
          등의 사이트를
           제작했습니다.
        </p>
        <p><span className={'important'}>Firebase</span> 를 활용하여 게시글을 작성하고 관리하는 CRUD 사이트도 제작하였습니다.</p>
        <p>
          <span className={'important'}>Jira, Fork, Github, Postman, ESLint </span> 등 실무에서 활용되는 프로그램을 적극적으로 활용하며 타겟을 맞추고, 애자일한 방식으로 일하는 것에 익숙해지려
          노력했습니다.
        </p>
        <p>
          다양한 프로젝트를 통해 계속해서 발전하는 프론트엔드 개발자가 되겠습니다.
        </p>
          <AboutSlick/>
      </Content>
    </Container>
  )
}

const Container = styled(Section)`

`;

const Content = styled.div`
  text-align: center;
  padding: 0 40px;
  font-size: 18px;
  line-height: 40px;
  color: #222426;

  h1 {
    font-weight: bold;
  }

  span {
    &.important {
      background: linear-gradient(to right top, rgba(0, 173, 181, 0.9), #00344a);
      color: transparent;
      -webkit-background-clip: text;
      font-weight: bold;
    }
  }
`;

export default KoreanCV;
