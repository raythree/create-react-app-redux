import React from 'react';
import { connect } from 'react-redux';

import HelloComponent from './HelloComponent';
import { sayHello, sayHelloAsync } from './hello';

class HelloContainer extends React.Component {
  render() {
    return <HelloComponent 
      message={this.props.message} 
      sayHello={this.props.sayHello}
      sayHelloAsync={this.props.sayHelloAsync}
    />
  }
}

export default connect(
  state => (state.hello),
  { sayHello, sayHelloAsync }
)(HelloContainer);
