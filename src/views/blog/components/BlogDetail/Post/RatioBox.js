import styled from 'styled-components';

import DescStyle from "./DescStyle";

const RatioBox = () => {
    return (
        <Container>
            <Desc>
              <p>RatioBox 를 사용하게된 배경 :</p>
              <p>반응형 사이트를 제작할때 </p>
            </Desc>
        </Container>
    )
}

const Container = styled.div`

`;

const Desc = styled(DescStyle)`
    
`;
export default RatioBox;
