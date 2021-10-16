import marketer from '../images/marketer.png';
import unHome from '../images/un-home.png';
import youtube from '../images/youtube.png';
import firebase from '../images/firebase.png';

export const works = {
  title: 'works',
  subTitle: '프로젝트를 소개합니다.',
  list: [
    {
      name: 'Marketer',
      desc: 'HTML/SCSS 를 활용하여 반응형으로 제작한 사이트입니다.',
      thumbnail:  marketer,
      siteUrl: 'https://marketer-hyungji.vercel.app/',
      sourceUrl: 'https://github.com/icthelight/Marketer_rev.git',
    },
    {
      name: 'Unsplash',
      desc: 'ReactJS, Redux(Redux-saga)를 사용하여 사진을 검색하고, 사진 정보를 불러오는 사이트를 제작하였습니다.',
      thumbnail:  unHome,
      siteUrl: 'https://unsplash-hyungji.vercel.app/',
      sourceUrl: 'https://github.com/icthelight/unsplash.git',
    },
    {
      name: 'YouTube',
      desc: 'ReactJS, Redux(Redux Toolkit)를 사용하여 동영상을 검색하고, 동영상 정보를 불러오는 사이트를 제작하였습니다.',
      thumbnail:  youtube,
      siteUrl: 'https://youtube-hyungji.vercel.app/',
      sourceUrl: 'https://github.com/icthelight/youtube.git',
    },
    {
      name: 'Firebase CRUD 사이트',
      desc: 'Firebase 를 사용하여 CRUD 기능을 하고, 로그인 등 Authentication 상태도 관리하는 블로그 사이트를 만들었습니다.',
      thumbnail:  firebase,
      siteUrl: 'https://blog-hyungji.vercel.app/',
      sourceUrl: 'https://github.com/icthelight/youtube.git',
    },
  ]
}
