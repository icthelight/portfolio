import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

import DescStyle from "./DescStyle";

import infinite1 from '../../../../../images/Blog/intersection observer/infinite1.png'
import infinite2 from '../../../../../images/Blog/intersection observer/infinite2.png'
import infinite3 from '../../../../../images/Blog/intersection observer/infinite3.png'
import infinite4 from '../../../../../images/Blog/intersection observer/infinite4.png'
import infinite5 from '../../../../../images/Blog/intersection observer/infinite5.png'
import infinite6 from '../../../../../images/Blog/intersection observer/infinite6.png'
import infinite7 from '../../../../../images/Blog/intersection observer/infinite7.png'
import infinite8 from '../../../../../images/Blog/intersection observer/infinite8.png'
import infinite9 from '../../../../../images/Blog/intersection observer/infinite9.png'
import infinite10 from '../../../../../images/Blog/intersection observer/infinite10.png'
import infinite11 from '../../../../../images/Blog/intersection observer/infinite11.png'


const InfiniteScroll = () => {
    return (
        <Container>
          <Desc>
            <p> 스크롤을 아래로 내리면 비동기 통신이 일어나서 새로운 데이터를 기존의 데이터에 누적하여 렌더링하는 무한 스크롤을 구현해보자!</p>
            <p> 먼저, 화살표를 클릭하면 다음 페이지를 렌더링하는 기능부터 연습해보려 한다.</p>
            <Image src={infinite1}/>
            <p> 왼쪽 화살표를 클릭하면 이전 페이지를, 오른쪽 화살표를 클릭하면 다음 페이지를 불러올 수 있다. <br/>useState 를 이용하여
            현재 페이지의 상태를 업데이트하고, 해당 페이지를 비동기 통신 함수의 params 로 보내주는 방식이다. 이처럼 이전 페이지와 다음 페이지를
            불러오는 방식을 활용하여 스크롤을 내려서 화면 하단에 닿으면 다음 페이지를 불러오는 무한 스크롤을 만들어 볼 수 있다.</p>
            <p>스크롤이 페이지 하단에 닿았는지 어떻게 알 수 있을까?</p>
            <p className={'important'}> WebAPI인 Intersection Observer 를 사용해보자!</p>
            <p className={'italic'}>Intersection Observer API는 타겟 요소와 상위 요소 또는 최상위 document 의 viewport 사이의 intersection 내의 변화를 비동기적으로 관찰하는 방법입니다.
              <br/>
              …
              <br/>
              Intersection Observer API 는 그들이 감시하고자 하는 요소가 다른 요소(viewport)에 들어가거나 나갈때 또는 요청한 부분만큼 두 요소의 교차부분이 변경될 때 마다 실행될 콜백 함수를 등록할 수 있게 합니다.
            </p>
            <Link href='https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API'>
              <a target='_blank'>InterSection Observer 정보 확인하기</a>
            </Link>
            <p>기본 사용법은 아래와 같다.</p>
            <Image src={infinite2}/>
            <p>
              observer는 ()안에 있는 dom을 observe할 수 있다. (observe 메소드를 가진다.) 그렇다면 dom element를 어떻게 잡을까?
            </p>
            <p>순수 JS에서는 Document.getElementById(), Document.getElementById(), event.target 의 방법으로 해당 dom 에 일어나는
            이벤트를 알아볼 수 있다. 이때 컴파일되어있는 dom 을 인식하게 된다. </p>
            <p>리액트에서는 리액트에서 제공하는 훅인 useRef()를 이용하여 dom 을 잡을 수 있다. 이때 컴포넌트가 렌더링되기 전에 가상 dom 이 잡힌다는 부분에서
              위 순수 JS 방식과 조금 다르다.</p>
            <p>useRef를 사용할 때 dom 의 정보는 아래와 같이 current 라는 객체 안에 담긴다.</p>
            <Image src={infinite3}/>
            <p>useRef에서 얻어온 정보를 리액트 컴포넌트와 연결해주기 위해서 ref={} 와 같이 입력한다. 모든 리액트 컴포넌트는 props로 ref 를 가지기 때문에
            useRef와 컴포넌트의 ref 를 연동해준다고 이해하면 된다. (페이지 하단에 닿는 기준점을 Sentinel이라는 컴포넌트로 설정하였다.) </p>
            <Image src={infinite4}/>
            <p>useRef는 가상의 dom 을 불러오기 때문에 해당 dom에 이벤트를 설정해주려면 useEffect() 안에 내용을 설정하여 모든 컴포넌트를 불러온 후에 실행되도록 한다.
            </p>
            <Image src={infinite5}/>
            <p>콘솔창에 아래와 같이 기록된다.</p>
            <Image src={infinite6}/>
            <p>Sentinel 컴포넌트가 화면에 감지되는지, 아닌지의 상태를 관리하기 위해 useState를 사용한다.</p>
            <Image src={infinite7}/>
            <p className={'important'}>
              이제 생각해야 할 점! <br/>
              Sentinel을 감지하도록 이벤트를 등록해놨는데 다른 컴포넌트(다른 페이지)로 옮겨갈때도 계속 Sentinel에 대한 이벤트가 돌아가고 있다면 메모리가 누수되어 매우 비효율적이다.
              즉, 다른 페이지로 넘어갈때는 해당 이벤트가 종료되도록 설정해야 한다. <br/>
              useEffect 함수 내에서 리턴할 내용을 설정하면 unmount 시점에 아래와 같이 해당 리턴 내용이 실행된다. <br/>
              아래와 같이 unobserve 하여 unmount 하면 Sentinel을 감지하지 않도록 해주었다.
            </p>
            <Image src={infinite8}/>
            <p>이제 Sentinel 이 보일때마다 (inView) 상태일때마다 다음 페이지가 렌더링되도록 비동기 통신을 해보자!</p>
            <Image src={infinite9}/>
            <p>
              photos.list.length가 0인 상태 (아직 비동기 통신이 끝나지 않은 상태) 에서 Sentinel 컴포넌트가 더 먼저 그려져서
              1페이지를 불러오기도 전에 Sentinel이 보였으므로 2페이지를 불러오게 된다.
              따라서, 비동기 통신을 해서 해당 데이터(photos.list)에 데이터가 하나라도 쌓였을때 다음 페이지로 넘어가겠다는 의미로 photos.list.length 가 0 보다 클때 실행한다.
            </p>
            <p>
              이제 Sentinel 보이면 다음 페이지를 불러오는 기능까지 구현이 되었다. <br/>
              그런데 다음 페이지로 날리는 것이 아니라, 원래 보이던 페이지에 누적해서 보이도록 수정해야 한다. 즉, 데이터를 불러오는 saga 를 수정해야 함!
            </p>
            <Image src={infinite10}/>
            <p>다시 비동기 통신하는 컴포넌트로 돌아와서 아래와 같이 로딩중일때 보여줄 문구를 추가할 수 있다. 또한, Sentinel 컴포넌트가 다른 dom 에 방해를 주지 않도록 아래와 같이 스타일을 설정한다.</p>
            <Image src={infinite11}/>
            <p>무한 스크롤 완성!!</p>
          </Desc>
        </Container>
    )
}

const Container = styled.div`

`;

const Desc = styled(DescStyle)`
    
`;
export default InfiniteScroll;
