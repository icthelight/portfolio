import React, {Component} from "react";
import styled from 'styled-components';
import Image from 'next/image';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import {ContentContainer} from "../../../../shared/components/LayoutStyled";
import {works} from "../../../../../data/works";
import {RiGithubFill, RiGlobalLine} from "react-icons/ri";

const ProjectsSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Container>
      <ContentContainer>
        <Slider {...settings}
        >
          {works.list.map(item => {
            return (
              <div key={item.name}>
                <Item key={item.name} className={'item'}>
                  <Thumb>
                    <Image src={item.thumbnail}/>
                  </Thumb>
                  <Desc>
                    <Title>{item.name}</Title>
                    <Content>{item.desc}</Content>
                  </Desc>
                  <IconBox>
                    <Icon href={item.sourceUrl}>
                      <RiGithubFill/>
                      <h3>View Source</h3>
                    </Icon>
                    <Icon href={item.siteUrl}>
                      <RiGlobalLine/>
                      <h3>Visit Website</h3>
                    </Icon>
                  </IconBox>
                </Item>
              </div>
            );
          })}
        </Slider>
      </ContentContainer>
    </Container>
  )
}

export default ProjectsSlider;

const Container = styled.div`
  .slick-arrow {
  }

  .slick-dots {
    display: flex !important;
    justify-content: center;

    li {
      &.slick-active {
        button {
          background: rgb(0,173,181);
        }
      }
    }
    button {
      font-size: 0;
      padding: 0;
      outline: 0;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: #ddd;
      margin: 0 5px;
      border: 0;
      display: flex;
      
    }


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
    height: 250px;
    object-fit: cover;
  }

  p {
    font-size: 17px;
  }
`;

const Item = styled.div`

`;

const Thumb = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;

const Desc = styled.div`
  padding: 10px 0;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: rgb(0, 173, 172);
  margin-bottom: 10px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  color: #111;
  font-weight: bold;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(0, 173, 172);
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  color: rgb(0, 173, 172);
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  svg {
    width: 30px;
    height: 30px;
    fill: rgb(0, 173, 172);
    transition: 0.3s;

  }

  &:hover {
    background: #fff;
    border: 1px solid rgb(53, 98, 123);
    color: rgb(53, 98, 123);

    svg {
      fill: rgb(53, 98, 123);
    }
  }

`;
