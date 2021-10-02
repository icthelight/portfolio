import styled from 'styled-components';
import Image from 'next/image';

import box1 from '../../../../../images/Blog/ratiobox/box1.png'
import box2 from '../../../../../images/Blog/ratiobox/box2.png'
import box3 from '../../../../../images/Blog/ratiobox/box3.png'
import box4 from '../../../../../images/Blog/ratiobox/box4.png'
import box5 from '../../../../../images/Blog/ratiobox/box5.png'

import DescStyle from "./DescStyle";

const RatioBox = () => {
    return (
        <Container>
            <Desc>
              <p>RatioBox 를 사용하게된 배경 :</p>
              <p>반응형 사이트를 제작할때 부모 컨테이너의 너비가 변화하면 그 안에 담긴 자식 이미지의 너비와 높이가 그에 비례하여 줄어들거나 늘어나도록
              padding 속성을 이용할 수 있다. 이를 활용하여 재사용 가능한 RatioBox 컴포넌트를 제작해보았다.
              </p>
              <Image src={box1}/>
              <p>
                위와 같이 box 컨테이너를 전체 화면이라고 볼때 item의 높이는 부모의 높이에 따라 결정되기 때문에 화면의 너비가 줄어든다고 해도
                높이가 알맞게 조절되지 않는다.
              </p>
              <p>
                item 의 높이가 부모인 box 컨테이너의 너비에 따라 변화하도록 padding 속성을 이용하자!
                padding 은 부모 요소의 너비가 기준점이 되어 움직이기 때문이다.
              </p>
              <p>아래처럼 item 에 padding-top 속성을 주었더니 부모의 너비에 따라서 높이도 변화된 것을 확인할 수 있다.</p>
              <Image src={box2}/>
              <p>padding-bottom 속성도 마찬가지이다.</p>
              <Image src={box3}/>
              <p>
                item 의 padding 값은 부모인 box의 너비를 따라가기 때문에 padding-bottom : 100px 과 같이 된다.
              </p>
              <p>
                item 안에 이미지를 넣으려면 어떻게 해야할까? <br/>
                우선 padding 은 border 안의 영역이기 때문에 content 영역과 마찬가지로 특정 영역을 차지하고 있다.
              </p>
              <p>
                따라서, item 컴포넌트를 만든 후 그 안에 이미지를 담는다고 해도 이미지가 밀려나게 된다. 이미지를 item 안에 담겨있는 것처럼 보여주기 위해서
                position 속성을 활용하면 된다.
              </p>
              <p>위와 같은 내용을 참고하여 재사용이 가능하도록 RatioBox 컴포넌트를 만들었다.</p>
              <Image src={box4}/>
              <p>
                RatioBox 컴포넌트의 padding-top 속성은 해당 컴포넌트를 담고 있는 부모 컴포넌트의 너비에 따라서 RatioBox 컴포넌트의 너비 및 높이가
                조절되도록 한다. (따라서, RatioBox 컴포넌트 내부에 담긴 이미지 등도 부모 컴포넌트의 너비의 변화에 따라서 너비와 높이가 알아서 조절되기 때문에
                반응형 웹 페이지를 구성하는데 용이하다.)
              </p>
              <p>
                참고로, width, height 를 props 로 넘겨주는 이유는
                이미지나 영상 파일의 경우 자식 요소가 부모 요소에 대해 정확히 몇 퍼센트를 차지하는지 설정하기 어렵거나, 상황에 따라서 padding-top 의 값을 수정해야 할 수도 있기 때문이다.
                padding-top 의 값을 height / width * 100 으로 설정해주면 재사용할때마다 다른 값으로 설정하기 때문에 편리하다.
              </p>
              <Image src={box5}/>
              <p>
                RatioBox 컴포넌트를 재사용하는 예는 위와 같다. 공통 컴포넌트를 만들어두고 width, height, children 등의 props 에만 변화를 주면서
                편리하게 재사용할 수 있다.
              </p>
            </Desc>
        </Container>
    )
}

const Container = styled.div`

`;

const Desc = styled(DescStyle)`
    
`;
export default RatioBox;
