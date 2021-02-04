import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const ProductColor = styled.div`
  width: 280px;
  height: 250px;
  background-color: ${props => props.color};
  margin: 0 20px;
`;

export { Container, ProductColor };
