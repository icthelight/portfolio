import Image from 'next/image'
import styled from 'styled-components';
import {useEffect, useRef, useState} from "react";
import cn from 'classnames';

import {ContentContainer} from "../../../shared/components/LayoutStyled";
import {works} from "../../../../data/works";
import {RiArrowLeftSLine, RiArrowRightSLine, RiGithubFill, RiGlobalLine} from "react-icons/ri";

const Project = () => {

  const scrollRef = useRef()

  useEffect(() => {
    if (scrollRef.current) {
      setScrollLeft(scrollRef.current.scrollLeft)
      setMaxScroll(scrollRef.current.scrollWidth - scrollRef.current.clientWidth)
    }
  }, [])

  const [scrollLeft, setScrollLeft] = useState(0)
  const [maxScroll, setMaxScroll] = useState(1)

  const start = scrollLeft > 0
  const end = maxScroll <= scrollLeft

  const onScroll = (e) => {
    setScrollLeft(e.target.scrollLeft)
  }

  const onClickLeft = () => {
    scrollRef.current.scrollLeft = Math.max(0, scrollLeft - 1200)
  }

  const onClickRight = () => {
    scrollRef.current.scrollLeft = Math.min(maxScroll, scrollLeft + 1200)
  }

  return (
    <Container>
      <ContentContainer>
        <Scroll className={cn(start, end)}>
          {
            start &&
            <Button className={'left'} onClick={onClickLeft}>
              <RiArrowLeftSLine/>
            </Button>
          }
          <Track ref={scrollRef} onScroll={onScroll}>
            {
              works.list.map((item) => (
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
              ))
            }
          </Track>
          {
            !end &&
            <Button className={'right'} onClick={onClickRight}>
              <RiArrowRightSLine/>
            </Button>
          }
        </Scroll>
      </ContentContainer>
    </Container>
  )
}

const Container = styled.div`
  
`;

const Scroll = styled.div`
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50px;
  }

  &::before {
    left: 0;
    opacity: 0;
    transition: 0.2s;
  }

  &.start::before {
    opacity: 1;
  }

  &::after {
    right: 0;
    opacity: 1;
    transition: 0.2s;
  }

  &.end::after {
    opacity: 0;
  }
`;

const Button = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  z-index: 100;
  cursor: pointer;

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }

  svg {
    width: 50px;
    height: 50px;
    fill: rgb(53, 98, 123);
  }
`;

const Track = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
`;

const Item = styled.div`
  flex-shrink: 0;
  width: 100%;
`;

const Thumb = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  
  @media screen and (max-width: 980px) {
    img {
      height: 200px;
    }
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

const Icon = styled.a`
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
    border: 1px solid rgb(53,98,123);
    color: rgb(53,98,123);
    svg {
      fill: rgb(53,98,123);
    }
  }

`;
export default Project;
