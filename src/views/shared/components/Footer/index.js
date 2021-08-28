import styled from 'styled-components';

import Desc from "./Desc";


const Footer = () => {
    return (
        <Container>
            <Desc/>
        </Container>
    )
}

const Container = styled.div`
  padding: 0 50px;
`;
export default Footer;
