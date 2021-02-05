import styled from 'styled-components';

const List = styled.ul`
  position: absolute;
  right: -20%;
  top: 18%;
  z-index: 5;
  list-style: none;
  color: black;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 266px;
  background-color: #c0c0c0;
`;

const Text = styled.span`
  margin-right: 24px;
`;

const Button = styled.button`
  width: 266px;
`;

export { List, Text, ListItem, Button };
