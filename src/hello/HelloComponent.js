import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

const log = require('simple-console-logger').getLogger('HelloComponent');

const buttonStyle={padding:'1em', margin: '1em'};
const inputStyle={padding: '1em', margin: '1em'};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>))}
    </div>
  </div>
);

const validate = (values) => {
  let errors = {};
  log.debug('validating form...');
  return errors;
}

/**
 * Display a simple form with buttons to say hello. The
 * message field uses redux-form as an example of validation.
 */
class HelloComponent extends React.Component {
  static propTyles = {
    message: PropTypes.string,
    pending: PropTypes.bool.isRequired,
    sayHello: PropTypes.func.isRequuired,
    sayHelloAsync: PropTypes.func.isRequuired
  };

  constructor(props) {
    super(props);
    this.state = {message: ''};
  }

  hello = () => {
    this.props.sayHello(this.state.message);
  }
  helloAsync = () => {
    this.props.sayHelloAsync(this.state.message);
  }
  changeMessage = (e) => {
    this.setState({message: e.target.value});
  }

  render() {    
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <div style={{padding:'2em'}}>
        <form onSubmit={handleSubmit}>
          <input 
            value={this.state.message}
            onChange={this.changeMessage}
            type="text" 
            placeholder="Enter message"
            style={inputStyle} 
          />
          <br/>
          <button style={buttonStyle} disabled={submitting} onClick={this.hello}>Say Hello</button>
          <button style={buttonStyle} disabled={submitting} onClick={this.helloAsync}>Say Hello Async</button>
        </form>  
        <br/>
        <div style={{padding:'1em'}}>
          {this.props.pending ? 'please wait...': ''}
          {this.props.message ? 'Hello ' + this.props.message : ''}
        </div>           
      </div>
    );            
  }
}

export default reduxForm({
  form: 'HelloForm',
  validate
})(HelloComponent);
