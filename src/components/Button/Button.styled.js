import styled from 'styled-components';

export const Button = styled('button')`
  padding-block: 8px;
  padding-inline: 16px;

  border: 2px solid black;
  border-radius: 24px;

  background-color: transparent;

  font-weight: 600;
  text-transform: capitalize;
  transition: all 250ms ease-in-out;

  &:hover {
    color: white;
    background-color: black;
    cursor: pointer;
  }
`;
