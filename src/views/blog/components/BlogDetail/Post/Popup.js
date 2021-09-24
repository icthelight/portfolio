import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import DescStyle from "./DescStyle";

import popup1 from '../../../../../images/Blog/Popup/popup1.png'
import popup2 from '../../../../../images/Blog/Popup/popup2.png'
import popup3 from '../../../../../images/Blog/Popup/popup3.png'
import popup4 from '../../../../../images/Blog/Popup/popup4.png'
import popup5 from '../../../../../images/Blog/Popup/popup5.png'
import popup6 from '../../../../../images/Blog/Popup/popup6.png'
import popup7 from '../../../../../images/Blog/Popup/popup7.png'


const Popup = () => {
    return (
        <Container>
            <Desc>
              <p>컴포넌트를 클릭하면 팝업창이 열리는 기능을 구현해보자!</p>
              <p>기본적으로 팝업창의 기능은 ReactDOM의 createPortal()을 활용한다.</p>
              <Link href={'https://ko.reactjs.org/docs/portals.html'}>
                <a>createPortal 자세히 알아보기</a>
              </Link>
              <p>사용법은 아래와 같다. createPortal을 사용할 팝업 컨테이너를 만들어주었다. </p>
              <Image src={popup1}/>
              <Image src={popup2}/>
              <p>개발자 도구를 살펴보면 아래와 같이 createPortal 안에 입력한 내용이 추가된 것을 확인할 수 있다.</p>
              <Image src={popup3}/>
              <p>이러한 특성을 활용해서 팝업창으로 띄우고 싶은 내용을 createPortal 안에 입력해주면 된다. 팝업창 안에 들어갈 내용이
              많기 때문에 팝업에 관한 컴포넌트를 생성하고, 해당 컴포넌트 안에 내용을 넣어주도록 하겠다.</p>
              <p>또한, 팝업창이 켜지고, 꺼지는 상태를 관리하기 위해 팝업에 관한 redux 를 설정해주었다. 따라서, 팝업창이 true 일때만 보이게 된다.</p>
              <Image src={popup4}/>
              <p>우리가 구현하고 싶은 기능은 각 PhotoItem 을 클릭하였을때, 해당 PhotoItem의 ID에 따라서 관련 사진, 관련 태그, 관련 컬렉션 등을 불러오는 팝업창을
              띄우는 것이다.</p>
              <Image src={popup5}/>
              <p>아래와 같이 showPopup 이라는 action 안에 관련 사진, 태그, 컬렉션 등의 데이터를 통신해오는 action을 넣어준다. </p>
              <Image src={popup6}/>
              <p>팝업창의 기능적인 부분은 위와 같이 제작이 되었다! 이제 팝업창처럼 보이도록 아래와 같이 스타일링을 하면 완성된다.</p>
              <Image src={popup7}/>
            </Desc>
        </Container>
    )
}

const Container = styled.div`

`;

const Desc = styled(DescStyle)`
    
`;
export default Popup;
