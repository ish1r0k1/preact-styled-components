import { h, Component } from 'preact';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 56px 20px;
  min-height: 100%;
  width: 100%;
`;

export default class Home extends Component {
  render() {
    return (
      <Wrapper>
        <h1>Home</h1>
        <p>This is the Home component.</p>
      </Wrapper>
    );
  }
}
