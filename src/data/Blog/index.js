import {format} from 'date-fns';

import FilterPopup from '../../images/Blog/Filter/Filter Popup.png';
import qs from '../../images/Blog/qs/qs.png';
import ratiobox from '../../images/Blog/ratiobox/ratiobox.jpeg';
import popup from '../../images/un-popup.png';
import scroll from '../../images/Blog/scroll/scroll.png'
import infinite from '../../images/Blog/intersection observer/intersection observer.png'

import Filter from "../../views/blog/components/BlogDetail/Post/Filter";
import QsLib from "../../views/blog/components/BlogDetail/Post/QsLib";
import InfiniteScroll from "../../views/blog/components/BlogDetail/Post/InfiniteScroll";
import Popup from "../../views/blog/components/BlogDetail/Post/Popup";
import RatioBox from "../../views/blog/components/BlogDetail/Post/RatioBox";
import ScrollByArrow from "../../views/blog/components/BlogDetail/Post/ScrollByArrow";

export const blogData = [
  {
    title: 'qs 라이브러리',
    thumbnail: qs,
    author: '김형지',
    profile_image: 'https://images.unsplash.com/photo-1532007271951-c487760934ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGlnaHRidWxifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Query String을 객체 혹은 문자열로 변환시킬 수 있도록 qs 라이브러리를 활용한 예시입니다.',
    publishedAt: format(new Date(2021, 8, 9), 'yyyy/MM/dd'),
    tags: ['qs 라이브러리', 'qs.stringify', 'qs.parse'],
    desc: <QsLib/>,
  },
  {
    title: '팝업 드롭다운메뉴로 필터 기능 구현하기',
    thumbnail: FilterPopup,
    author: 'Hyungji Kim',
    profile_image: 'https://yt3.ggpht.com/NumThnH54Ix3d9DGS6MLxFoi90DorJ41UrR5IxcJ4GLO5lqpaxtWP9L7MslDHodyId5oMUfZks4=s1067-c-fcrop64=1,00001632ffffd649-nd',
    description: '드롭다운박스를 클릭하면 하단에 드롭다운메뉴가 팝업으로 생기는 기능입니다.',
    publishedAt: format(new Date(2021, 8, 1), 'yyyy/MM/dd'),
    tags: ['팝업', '드롭다운메뉴', '필터 만들기'],
    desc: <Filter/>,
  },
  {
    title: '컨테이너의 비율에 따라 이미지 크기를 조절하는 RatioBox',
    thumbnail: ratiobox,
    author: '프론트엔드 개발자 김형지',
    profile_image: 'https://cdn.pixabay.com/photo/2020/01/31/11/44/doll-4807792__480.png',
    description: '부모 컨테이너의 너비에 따라서 자식 이미지의 높이와 너비가 조절되도록 padding 속성을 활용하여 재사용 가능한 컴포넌트 RatioBox를 만들었습니다.',
    publishedAt: format(new Date(2021, 8, 10), 'yyyy/MM/dd'),
    tags: ['padding 속성', '컨테이너 비율', '비율 박스'],
    desc: <RatioBox/>
  },
  {
    title: '팝업창 만들기',
    thumbnail: popup,
    author: 'icthelight@naver.com',
    profile_image: 'https://cdn.pixabay.com/photo/2016/11/14/03/38/achieve-1822503__340.jpg',
    description: '사진을 클릭하면 해당 사진에 대한 정보가 팝업창으로 뜨는 기능입니다.',
    publishedAt: format(new Date(2021, 6, 30), 'yyyy/MM/dd'),
    tags: ['팝업', 'createPortal', '리액트 팝업'],
    desc: <Popup/>,

  },
  {
    title: '화살표 아이콘을 클릭하면 스크롤 이동하는 기능 만들기',
    thumbnail: scroll,
    author: 'front-end-dev-hj',
    profile_image: 'https://images.unsplash.com/photo-1581074817932-af423ba4566e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2900&q=80',
    description: 'ref 속성을 이용하여 스크롤 움직임을 감지하고, 스크롤을 이동시키는 기능입니다.',
    publishedAt: format(new Date(2021, 7, 7), 'yyyy/MM/dd'),
    tags: ['스크롤', 'scrollWidth', 'useRef'],
    desc: <ScrollByArrow/>,
  },
  {
    title: '무한 스크롤 구현하기',
    thumbnail: infinite,
    author: '형지',
    profile_image: 'https://cdn.pixabay.com/photo/2013/07/18/10/56/smiley-163510__480.jpg',
    description: 'ref 속성과 webAPI인 Intersection Observer를 활용하여 무한 스크롤을 구현하였습니다.',
    publishedAt: format(new Date(2021, 7, 25), 'yyyy/MM/dd'),
    tags: ['무한 스크롤', 'infinite scroll', 'intersection observer'],
    desc: <InfiniteScroll/>,
  },
]
