import marketer from '../images/marketer.png';
import unHome from '../images/un-home.png';
import youtube from '../images/youtube.png';

export const works = {
  title: 'works',
  subTitle: '프로젝트를 소개합니다.',
  list: [
    {
      name: 'Marketer',
      desc: 'HTML/SCSS 를 활용하여 반응형으로 제작한 사이트입니다.',
      thumbnail:  marketer,
      siteUrl: '',
      sourceUrl: 'https://github.com/icthelight/Marketer_rev.git',
    },
    {
      name: 'Unsplash',
      desc: 'ReactJS, Redux(Redux-saga)를 사용하여 사진을 검색하고, 사진 정보를 불러오는 사이트를 제작하였습니다.',
      thumbnail:  unHome,
      siteUrl: '',
      sourceUrl: 'https://github.com/icthelight/unsplash.git',
    },
    {
      name: 'YouTube',
      desc: 'ReactJS, Redux(Redux Toolkit)를 사용하여 동영상을 검색하고, 동영상 정보를 불러오는 사이트를 제작하였습니다.',
      thumbnail:  youtube,
      siteUrl: '',
      sourceUrl: 'https://github.com/icthelight/youtube.git',
    },
  ]
}
