import styled from 'styled-components';
import Image from 'next/image';

import filter1 from '../../../../../images/Blog/Filter/filter1.png'
import filter2 from '../../../../../images/Blog/Filter/filter2.png'
import filter3 from '../../../../../images/Blog/Filter/filter3.png'
import filter4 from '../../../../../images/Blog/Filter/filter4.png'

import DescStyle from "./DescStyle";

const Filter = () => {
    return (
        <Container>
            <Desc>
              <p>unsplash 페이지에서 사진을 검색한 후, 방향, 색상 등의 기준을 통해 검색 결과를 필터링할 수 있는 기능은 <br/>
              1) 필터링할 기준을 보여주는 드롭박스를 만들고, <br/>
                2) 드롭박스 안의 드롭메뉴아이템을 클릭하면 해당 내용을 params로 비동기 통신을 하도록 설정하면 된다!
              </p>
              <p>
                먼저, 필터 아이템을 클릭했을 때 필터 아이템의 하단에 팝업으로 드롭 박스가 뜨도록 만들어보자.
              </p>
              <Image src={filter1}/>
              <p>위와 같이 필터 아이템 컨포넌트를 만들고 position : relative 속성을 주었다. </p>
              <p>드롭 박스 컴포넌트에는 position : absolute, top: 100%로 스타일 속성을 주었다.</p>
              <Image src={filter2}/>
              <p>
                만약 top 값을 숫자로 설정할 경우 필터 아이템에 따라서 top 의 값을 다시 설정해야 하지만, top : 100%로 맞추면
                position 의 기준이 되는 컴포넌트의 (FilterItem) 바로 다음에 이어서 나오게 된다.
                top : 50% 이면 position 기준점으로부터 수직에서 절반의 위치까지 온다. 100% 로 설정하면 position 기준점 바로 밑에 나오게 됨!
              </p>
              <p>그리고, useState를 활용하여 필터아이템을 클릭했을 때 open인 상태가 되고, open 이면 드롭박스를 보여주도록 설정하면 된다.</p>
              <p>이제 드롭박스에 나온 드롭메뉴아이템을 클릭하면 해당 페이지로 라우팅 되도록 설정해보자.</p>
              <Image src={filter3}/>
              <p>
                위 url 이 라우팅 되면 페이지가 어떤 검색 화면을 보여줄지 설정해야 한다. 현재 비동기 통신은 searchContainer 컴포넌트에서 하고 있다.
                그렇다면 searchContainer 에서 해당 url 을 불러와야 한다.
              </p>
              <p>qs 라이브러리를 이용하여 url 안에 담긴 query string 을 가져올 수 있고, 해당 query string 을 비동기 통신하는 함수의 params 로 넣어주면 된다.</p>
            <Image src={filter4}/>
              <p> 위와 같은 방식으로 필터 로직을 제작할 수 있다.</p>
            </Desc>
        </Container>
    )
}

const Container = styled.div`

`;

const Desc = styled(DescStyle)`
    
`;
export default Filter;
