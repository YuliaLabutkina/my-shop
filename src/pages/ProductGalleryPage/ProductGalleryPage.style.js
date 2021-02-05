import styled from 'styled-components';

const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

export { List, ButtonContainer };
