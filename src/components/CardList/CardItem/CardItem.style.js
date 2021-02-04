import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  width: 196px;
  align-items: center;
  padding: 4px 6px;
  background-color: #c0c0c0;
`;

const ColorContainer = styled.div`
  width: 26px;
  height: 16px;
  background-color: ${props => props.color};
  margin-right: 20px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

export { Item, ColorContainer, Container };
