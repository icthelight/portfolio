import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

import DescStyle from "./DescStyle";
import qs1 from '../../../../../images/Blog/qs/qs1.png'
import qs2 from '../../../../../images/Blog/qs/qs2.png'
import qs3 from '../../../../../images/Blog/qs/qs3.png'
import qs4 from '../../../../../images/Blog/qs/qs4.png'
import qs5 from '../../../../../images/Blog/qs/qs5.png'
import qs6 from '../../../../../images/Blog/qs/qs6.png'


const QsLib = () => {
  return (
    <Container>
      <Desc>
        <p>
          url 에 담긴 query string 을 편리하게 객체 혹은 문자열로 이용하기 위해서 qs 라이브러리를 이용하게 되었다. <br/>
          useLocation 훅을 사용하여 location.search 으로 query string 을 확인할 수도 있지만, location.search 는 아래와 같이 문자열로 담긴다.
        </p>
        <Image src={qs1}/>
        <p>
          url 에 담긴 query string 에 따라서 새로운 비동기 통신을 하기 위해서는 query string 을 객체로 다룰 수 있어야 한다. (비동기 통신 함수의 payload 로 전달하기 위해서임) <br/>
          query string 에 포함되는 물음표를 삭제하기 위해서 substring 사용하고, 객체 형태로 저장하기 위해 아래와 같은 과정을 거친다.
        </p>
        <Image src={qs2}/>
        <p>이러한 복잡한 과정을 거치지 않고 간편하게 query string을 객체 형태로 바꾸고, 반대로 객체를 문자열 형태로 바꿀 수도 있는 qs 라이브러리를 사용해보자!</p>
        <Link href={'https://www.npmjs.com/package/qs'}>
          <a> npm qs 공식 페이지 가기</a>
        </Link>
        <p>
          간단하게 살펴보자면 <br/>
          qs.parse(string, [options]) : string을 object 로 바꿔줌 <br/>
          qs.stringify(object, [options]) : object를 string으로 바꿔줌
        </p>
        <p>qs를 사용해보자!</p>
        <Image src={qs3}/>
        <p>콘솔 창을 확인해보면 이전처럼 split이나 객체로 만드는 등의 과정 없이 한번에 간편하게 location.search 의 값이 객체 형태로 담겨있다!</p>
        <Image src={qs4}/>
        <p></p>
        <Image src={qs5}/>
        <p className={'important'}>심화) 이전의 query string 을 기억하고 새로 선택한 query string을 누적하여 url 에 기록하기!</p>
        <p>즉, 이전에 선택했던 location.search 를 기억하고(...queryParams), 거기에 새로 선택한 location.search 를 더해줘야 한다.</p>
        <p>현재 query string 은 queryParmas 의 객체 형태로 담기기 때문에 이번에는 반대로 queryParmas 객체를 문자열로 변경해줘야 하는 것!</p>
        <p>
          qs.stringify : 이전에 선택했던 location.search 에 담긴 객체(...queryParams)를 모두 기억해서 url 에 인식할 수 있도록 문자로 바꿔주고, 새로 선택한 location.search 의 객체도
          문자로 변경하여 더해준다. (이때 문자로 변경하는 이유는 url 주소는 문자 형태로 기입해야 하기 때문임)
        </p>
        <Image src={qs6}/>
        <p>위와 같은 방식으로 지금까지 선택했던 query string 를 기억하고, 새로 선택한 parmas도 query string 에 문자열로 누적하여 기억하게 된다.</p>
      </Desc>
    </Container>
  )
}

const Container = styled.div`

`;

const Desc = styled(DescStyle)`

`;
export default QsLib;
