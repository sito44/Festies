import React from 'react';
import './Registration.css';

class UserName extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();

      this.props.CreateUserScreenName(this.state.value);
      this.props.nextStep();
    }

    handlePrevious = () => {
      this.props.previousStep();
    }
  
    render() {
      return (
        <div className="UserNameForm">
          <form onSubmit={this.handleSubmit}>
            <label className="labelForm">
              User Screen Name:
              <br></br>
              <input type="text" value={this.state.value} onChange={this.handleChange} className="inputBox" />
            </label>
            <br></br>
            <input type="submit" value="Submit" className="submitButton" />
            {(this.props.previousStep) ?
              <button onClick={this.handlePrevious} value="Previous">Previous</button>
              :
              null}
          </form>
        </div>
      );
    }
  }

export default UserName;