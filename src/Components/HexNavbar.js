import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HexNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <NavBar className={scrolled ? 'scroll' : ''}>
        <Logo className={scrolled ? 'scroll' : ''}>
          <a href="https://www.hexnode.com/">hexnode</a>
        </Logo>
        <NavItems>
          <TrialButton
            href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
            className="desktop-only"
          >
            14 Day Free Trial
          </TrialButton>
          <MenuButton onClick={toggleMenu} className="mobile-only">
            ☰
          </MenuButton>
        </NavItems>
      </NavBar>
      {isMenuOpen && (
        <MobileMenu>
          <MobileMenuItem
            href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
          >
            14 Day Free Trial
          </MobileMenuItem>
          <MobileMenuItem href="https://www.hexnode.com/mobile-device-management/sign-in/">
            Login
          </MobileMenuItem>
        </MobileMenu>
      )}
    </>
  );
};

export default HexNavbar;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: rgb(2, 10, 25);
  transition: background-color 0.3s ease;
  padding: 16px 24px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  &.scroll {
    background-color: white;
  }

  &:hover {
    background-color: white;
  }
`;

const Logo = styled.h3`
  font-size: 1.5rem;
  margin: 0;

  a {
    color: Grey;
    text-decoration: none;
    font-size: 1.5rem;

    &:hover {
      text-decoration: underline;
    }
  }

  &.scroll a {
    color: black;
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  .desktop-only {
    @media (max-width: 768px) {
      display: none;
    }
  }

  .mobile-only {
    display: none;
    @media (max-width: 768px) {
      display: block;
      color: white;
      background-color: #333;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
      margin-right: 16px; /* Added margin-right */
    }
  }
`;

const TrialButton = styled.a`
  color: #fff;
  background-color: #dd0735;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 75px;
  font-size: 1rem;

  &:hover {
    background-color: #bb022a;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MenuButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
    color: white;
    background-color: rgb(2, 10, 25);
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    margin-right: 16px;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  right: 0;
  background-color: white;
  width: 100%;
  padding: 16px;
`;

const MobileMenuItem = styled.a`
  color: black;
  padding: 10px 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:first-of-type {
    background-color: #dd0735; /* Match the trial button color */
    color: white;
    padding: 10px 20px;
    border-radius: 3px;
    text-align: center;
    margin-bottom: 16px;
    font-size: 0.8rem; /* Smaller font size */
    &:hover {
      background-color: #bb022a;
      text-decoration: none;
    }
  }
`;
