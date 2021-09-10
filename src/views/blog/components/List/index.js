import styled from 'styled-components';

import Item from "../Item";
import {blogData} from "../../../../data/Blog";

const List = () => {
  return (
    <Container>
      <Row>
        {
          blogData.map((item) => (
            <Col key={item.title}>
              <Item item={item}/>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

const Container = styled.div`
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;

const Col = styled.div`
  @media screen and (min-width: 1043px) {
    width: 33.3333%;
  }
  
  @media screen and (max-width: 1042px) {
    width: 50%;
  }

  @media screen and (max-width: 786px) {
    width: 100%;
  }

  padding: 16px;

`;
export default List;
