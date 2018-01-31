import { h, Component } from 'preact';
import styled from 'styled-components';
import { connect } from 'redux-zero/preact';

import actions from '../actions';

const mapToProps = ({ count }) => ({ count });

const Wrapper = styled.div`
  padding: 56px 20px;
  min-height: 100%;
  width: 100%;
`;

class Profile extends Component {
  state = {
    time: Date.now()
  };

  // gets called when this route is navigated to
  componentDidMount() {
    // start a timer for the clock:
    this.timer = setInterval(this.updateTime, 1000);
  }

  // gets called just before navigating away from the route
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // update the current time
  updateTime = () => {
    this.setState({ time: Date.now() });
  };

  // Note: `user` comes from the URL, courtesy of our router
  render({ user, count, increment }, { time }) {
    return (
      <Wrapper>
        <h1>Profile: {user}</h1>
        <p>This is the user profile for a user named { user }.</p>

        <div>Current time: {new Date(time).toLocaleString()}</div>

        <p>
          <button onClick={increment}>Click Me</button>
          {' '}
          Clicked {count} times.
        </p>
      </Wrapper>
    );
  }
}

export default connect(mapToProps, actions)(Profile);
