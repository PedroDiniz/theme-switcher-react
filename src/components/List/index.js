import React from "react";
import styled from "styled-components";

const ListTheme = styled.ul`
  background: ${props => props.theme.theme.background};
  color: ${props => props.theme.theme.color};
  font-size: 18px;

  li {
    line-height: 36px;
  }
`;

const List = () => (
  <ListTheme>
    <ul>
      <li>Fazer café</li>
      <li>Beber café</li>
      <li>Estudar React</li>
    </ul>
  </ListTheme>
);

export default List;
