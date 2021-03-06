import styled from 'styled-components';

const DescStyle = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.div`
  margin-top: 40px;
  p {
    line-height: 30px;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
    white-space: pre-wrap;
    
    &.important {
      font-weight: bold;
      color: rgb(12, 166, 120);
    }
    
    &.italic {
      font-style: italic;
      color: #606060;
    }
  }

  a {
    display: inline-block;
    font-size: 18px;
    font-weight: 500;
    line-height: 25px;
    color: #6BA4DE;
    transition: 0.4s;

    &:hover {
      color: #5066DC;
      text-decoration: underline;
    }
  }
`;
export default DescStyle;
