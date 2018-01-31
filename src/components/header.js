import { h } from 'preact';
import { Link } from 'preact-router/match';
import styled from 'styled-components';

const activeClassName = 'active';

const Wrapper = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 56px;
  padding: 0;
  background: #673AB7;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  z-index: 50;
`;

const Title = styled.h1`
  float: left;
  margin: 0;
  padding: 0 15px;
  font-size: 24px;
  line-height: 56px;
  font-weight: 400;
  color: #FFF;
`;

const Nav = styled.nav`
  float: right;
  font-size: 100%;
`;

const NavItem = styled(Link).attrs({
  activeClassName
})`
  display: inline-block;
  height: 56px;
  line-height: 56px;
  padding: 0 15px;
  min-width: 50px;
  text-align: center;
  background: rgba(255,255,255,0);
  text-decoration: none;
  color: #FFF;
  will-change: background-color;

  &.${activeClassName} {
    background: rgba(0,0,0,0.4);
  }

  &:hover,
  &:active {
    background: rgba(0,0,0,0.2);
  }
`;

const Header = () => (
  <Wrapper>
    <Title>Preact App</Title>
    <Nav>
      <NavItem href="/">Home</NavItem>
      <NavItem href="/profile">Me</NavItem>
      <NavItem href="/profile/john">John</NavItem>
    </Nav>
  </Wrapper>
);

export default Header;
