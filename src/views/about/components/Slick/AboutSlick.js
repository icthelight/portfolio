import styled from 'styled-components';
import Image from 'next/image';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {ContentContainer} from "../../../shared/components/LayoutStyled";
import {aboutItems} from "../../../../data/about";

const AboutSlick = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <ContentContainer>
        <h2> 저에 대한 TMI는 아래와 같습니다! </h2>
        <Slider {...settings}
        >
          {aboutItems.map(item => {
            return (
              <div key={item.id}>
                <Item>
                  <Thumb>
                    <Image src={item.image}/>
                  </Thumb>
                  <Desc>
                    <p>{item.desc}</p>
                  </Desc>
                </Item>
              </div>
            );
          })}
        </Slider>
      </ContentContainer>

    </Container>
  )
}

const Container = styled.div`
  margin-top: 20px;
  padding: 0 250px;

  h2 {
    margin-bottom: 10px;
  }
  
`;

const Item = styled.div`

`;

const Thumb = styled.div`

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`;

const Desc = styled.div`
  margin-bottom: 20px;

  p {
    font-size: 18px;
  }
`;

export default AboutSlick;
