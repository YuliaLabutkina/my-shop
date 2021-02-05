import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  list-style: none;
`;

const Text = styled.span`
  margin-right: 16px;
`;

const Quantity = styled.span`
  margin-right: 54px;
`;

const Messages = styled.div`
  margin-bottom: 10px;
  font-size: 24px;
  color: red;
`;

export { ListItem, Text, Quantity, Messages };
