import styled from 'styled-components';
import Image from 'next/image';

import DescStyle from "./DescStyle";

import scroll1 from '../../../../../images/Blog/scroll/scroll1.png'
import scroll2 from '../../../../../images/Blog/scroll/scroll2.png'
import scroll3 from '../../../../../images/Blog/scroll/scroll3.png'
import scroll4 from '../../../../../images/Blog/scroll/scroll4.png'
import scroll5 from '../../../../../images/Blog/scroll/scroll5.png'
import scroll6 from '../../../../../images/Blog/scroll/scroll6.png'
import scroll7 from '../../../../../images/Blog/scroll/scroll7.png'
import scroll8 from '../../../../../images/Blog/scroll/scroll8.png'
import scroll9 from '../../../../../images/Blog/scroll/scroll9.png'
import scroll10 from '../../../../../images/Blog/scroll/scroll10.png'
import scroll11 from '../../../../../images/Blog/scroll/scroll11.png'
import scroll12 from '../../../../../images/Blog/scroll/scroll12.png'

const ScrollByArrow = () => {
    return (
        <Container>
            <Content>
              <p>
                스크롤을 좌우로 움직이면 Topic 들이 자동으로 넘어가도록 설정해보자!
              </p>
              <Image src={scroll1}/>
              <Image src={scroll2}/>
              <Image src={scroll3}/>
              <p>
                오른쪽 화살표는 스크롤의 최대값에 다다르면 안 보인다!
                이를 위해 스크롤이 이동할 수 있는 최대 거리를 구해야 한다.
                스크롤이 이동할 수 있는 거리 = Track 컨테이너의 Health&Wellness 이후 스크롤이 움직여지는 부분부터의 거리
              </p>
              <Image src={scroll4}/>
              <p>
                `clientWidth`와 `clientHeight`속성을 통해 화면에서 보고있는 컨텐츠의 너비나 높이를 확인할 수 있다.
                이 속성은 패딩은 포함하지만, 보더, 마진과 스크롤바의 크기를 제외한 컨텐츠의 크기를 리턴한다.
              </p>
               <p>
                 실제 컨텐츠 영역이 얼마만큼의 크기를 갖고 있는지 확인하고 싶다면,
                 `scrollWidth`와 `scrollHeight`속성은 전체 스크롤바를 사용하여 숨겨진 영역까지 포함한 크기를 리턴하므로
                 실제 컨텐츠 영역의 크기를 확인할 수 있게 한다.
               </p>
              <Image src={scroll5}/>
              <Image src={scroll6}/>
              <Image src={scroll7}/>
              <Image src={scroll8}/>
              <p>
                이제 스크롤이 좌우로 이동하는 기능은 완료되었다.
              </p>
              <Image src={scroll9}/>
              <p>
                위 이미지처럼 스크롤이 좌우로 이동할때 스타일링을 추가해보자!
                스크롤을 오른쪽으로 이동하면 before (왼쪽의 background)는 보이고, 스크롤을 왼쪽으로 이동하면 after(오른쪽의 background)가 보여야 함.
              </p>
              <Image src={scroll10}/>
              <Image src={scroll11}/>
              <p>
                화살표 버튼을 클릭했을때 스크롤이 좌우 이동하도록 설정해보자!
              </p>
              <Image src={scroll12}/>
              <p>
                Math 함수를 이용한 이유 :  <br/>
                스크롤을 100만큼만 움직일 경우 위 코드의 onClickLeft는 -200이 되어버림.
                따라서, 스크롤의 이동 값이 마이너스가 되지 않도록 Math.max(0, scrollLeft-300) 으로 작성
                onClickRight는 scrollLeft + 300을 했을때 최대 스크롤의 너비(maxScroll)을 벗어나지 않도록 둘 중에 더 작은 값만큼 이동하도록 Math.min() 활용
              </p>
            </Content>
        </Container>
    )
}

const Container = styled.div`

`;

const Content = styled(DescStyle)`
    
`;
export default ScrollByArrow;
