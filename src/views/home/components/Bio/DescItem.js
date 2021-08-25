import styled from 'styled-components';

const DescItem = () => {
  return (
    <Container>
      <Item>
        <h1>Profile</h1>
        <p className={'name'}>김형지 (Hyungji Kim)</p>
        <p>서울여자대학교 졸업(2014.03 ~ 2018.02)</p>
        <p>대전외국어고등학교 졸업(2011.03 ~ 2014.02)</p>
      </Item>
      <Item>
        <h1>Career</h1>
        <CareerItem>
          <img
            src="https://media-exp1.licdn.com/dms/image/C560BAQHTvZwCx4p2Qg/company-logo_100_100/0/1612205615891?e=1637798400&v=beta&t=puPWnyZu9b2sTNU_4LeVl8mf-mQFpUJwN9wFTSj6GmI"
            alt="아마존 로고"/>
          <Details>
            <h2>아마존</h2>
            <p>Selling Partner Support Associate</p>
            <p>2020.01 ~ 2020.10</p>
          </Details>
        </CareerItem>
        <CareerItem>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E0BAQGUG-iXB_9lTg/company-logo_100_100/0/1539246989776?e=1637798400&v=beta&t=p1GzrooCMbCZGk-2jWQlbkkn3RjlJA6KKqPx7gyaJ2w"
            alt="에라메트 코리아 로고"/>
          <Details>
            <h2>에라메트 코리아</h2>
            <p>영업 관리</p>
            <p>2019.08 ~ 2020.01</p>
          </Details>
        </CareerItem>
      </Item>
    </Container>
  )
}

const Container = styled.div`

`;

const Item = styled.div`
  margin: 40px 0;
  border-bottom: 1px solid #fff;
  &:last-child {
    border-bottom: none;
  }
  h1 {
    margin-bottom: 20px;
    font-size: 26px;
    font-weight: 700;
    color: #333;
  }
  p {
    font-size: 22px;
    font-weight: 500;
    line-height: 30px;
    
    &.name {
      font-weight: bold;
    }
  }

  img {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 20px;
  }
`;

const CareerItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Details = styled.div`
  margin-left: 20px;
  h2 {
    font-size: 22px;
    font-weight: 600;
  }

`;
export default DescItem;
