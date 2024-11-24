import React from 'react';
import HexNavbar from './HexNavbar';
import styled from 'styled-components';

const HexHeader = () => {
  return (
    <Header>
      <HexNavbar />
    </Header>
  );
};

export default HexHeader;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  position: fixed;
  top: 0;
  left: 10px;
  right: 10px;
  z-index: 1000;
  background-color: rgb(2, 10, 25);
  transition: background-color 0.3s ease;

  &.scroll {
    background-color: white;
  }

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
