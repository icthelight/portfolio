import styled from 'styled-components';
import Image from 'next/image';
import AvatarInfo from "../AvatarInfo";
import {boxShadow} from "../../../../styled/mixin";

const Item = ({item}) => {
  return (
    <Container>
      <ItemBox>
        <Thumb>
          <Image src={item.thumbnail}/>
        </Thumb>
        <Desc>
          <h3>
            {
              item.title.length > 18 ? item.title.substr(0, 18) + "..." : item.title
            }
          </h3>
          <p>
            {
              item.description.length > 50 ? item.description.substr(0, 50) + "..." : item.description
            }
          </p>
        </Desc>
        <Details>
          <AvatarInfo item={item}/>
        </Details>
      </ItemBox>
    </Container>
  )
}

const Container = styled.div`
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${boxShadow(3)}
  }
`;

const ItemBox = styled.div`
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 16px 10px 0;
`;

const Thumb = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Desc = styled.div`
  padding: 16px;

  h3 {
    height: 24px;
    display: flex;
    align-items: center;
    color: #333;
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 4px;
    white-space: nowrap;
  }

  p {
    height: 63px;
    display: flex;
    align-items: center;
    overflow: hidden;
    color: #767676;
    font-size: 15px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 24px;
  }
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  font-size: 12px;
  line-height: 18px;
`;
export default Item;
