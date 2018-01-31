import { h } from 'preact';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 56px 20px;
  min-height: 100%;
  width: 100%;
`;

const Home = () => (
  <Wrapper>
    <h1>Home</h1>
    <p>This is the Home component.</p>
  </Wrapper>
);

export default Home;
