import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
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

const SelectContainer = styled.div`
  margin-bottom: 10px;
`;

export { Container, ProductColor, SelectContainer };
