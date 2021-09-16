import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/ko';

const AvatarInfo = ({item}) => {
  const {
    publishedAt,
    author,
    profile_image,
  } = item
  return (
    <Container>
      <Item>
        <Thumb>
          <img src={profile_image} alt=""/>
        </Thumb>
        <Desc>
           <h4> <span>작성자 </span>{author}</h4>
          <p>
            {moment(publishedAt).fromNow()}
          </p>
        </Desc>
      </Item>
    </Container>
  )
}

const Container = styled.div`

`;

const Item = styled.div`
  display: flex;
  align-items: center;
`;

const Thumb = styled.div`
  flex-shrink: 0;

  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 5px;
  }
`;

const Desc = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  

  h4 {
    font-size: 15px;
    font-weight: 700;
    margin-right: 30px;
    
    span {
      font-size: 13px;
      color: #767676;
    }
  }

  p {
    color: #767676;
    font-size: 14px;
    font-weight: 500;
  }

`;
export default AvatarInfo;
