import styled from 'styled-components';
import {BiUpArrowAlt} from "react-icons/bi";
import {animateScroll as scroll} from 'react-scroll'
import cn from 'classnames';
import {useMyRef} from "../../../../hook/useMyRef";


const BackTop = () => {
  const onClick = () => {
    scroll.scrollToTop({
      duration: 1500,
      smooth: true,
    });
  }

  const scrolled = useMyRef(1500)

  return (
    <Container onClick={onClick} className={cn({scrolled})}>
      <BiUpArrowAlt/>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  right: 60px;
  bottom: 80px;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background: #2E8BC0;
  color: #fff;
  font-size: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: 0.2s;
  transform: translateY(250px);

  &.scrolled {
    transform: none;
  }

  &:hover {
    box-shadow: 5px 5px 14px rgba(0, 0, 0, 0.25);
  }
`;
export default BackTop;
