import React, {Component} from "react";
import styled from 'styled-components';
import Image from 'next/image';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import earphones from '../../../../images/earphones.jpeg';
import soccer from '../../../../images/soccer.jpeg';
import puppy from '../../../../images/puppy.jpeg';
import jogging from '../../../../images/jogging.jpeg';
import passion from '../../../../images/passion.jpeg';

const items = [
  {id: 1, image: jogging, desc: '6km 정도는 거뜬히 산책을 할 정도로 한강 산책을 즐겨합니다.'},
  {id: 2, image: soccer, desc: '손흥민 선수가 소속된 토트넘을 응원하는 축구 팬이기도 합니다.'},
  {id: 3, image: earphones, desc: 'Coldplay, Ed Sheeran, Justin Bieber 의 음악을 좋아합니다'},
  {id: 4, image: puppy, desc: '유튜브로 동물농장을 보면서 힐링합니다'},
  {id: 5, image: passion, desc: '마음 먹은 것은 곧장 행동으로 옮기는 추진력이 있으며, 융통성이 있어서 변화나 새로운 시도를 주저하지 않습니다.'},
];

export default class AboutSlick extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
    };
    return (
      <Container>
        <h2> 저에 대한 TMI는 아래와 같습니다! </h2>
        <StyledSlider {...settings}
        >
          {items.map(item => {
            return (
              <div key={item.id}>
                <ImageContainer>
                  <Image src={item.image}/>
                  <p>{item.desc}</p>
                </ImageContainer>
              </div>
            );
          })}
        </StyledSlider>
      </Container>
    );
  }
}

const Container = styled.div`
  margin-top: 20px;

  .slick-arrow {
    color: rgba(0, 173, 181, 0.9);
  }

  h2 {
    font-weight: 500;
  }
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;

const ImageContainer = styled.div`
  margin: 0 16px;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  p {
    font-size: 17px;
  }
`;
