import styled from 'styled-components';
import cn from 'classnames';
import {useInViewRef} from "rooks";


const InView = ({children}) => {

  const [myRef, inView] = useInViewRef(() => {
    threshold : [0.3, 0]
  });


  return (
    <Container ref={myRef} className={cn({inView})}>
      {children}
    </Container>
  )
}

const Container = styled.div`

`;
export default InView;
