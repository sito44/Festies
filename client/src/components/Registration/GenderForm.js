import React from "react";

class GenderForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handlePrevious = this.handlePrevious.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();

      this.props.AddGender(this.state.value);
      this.props.nextStep();
    }

    handlePrevious = () => {
      this.props.previousStep();
    }

  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            What is your gender?
            <br></br>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <br></br>
          <input type="submit" value="Submit" />
          <button onClick={this.handlePrevious} value="Previous">Previous</button>
        </form>
      );
    }
  }

export default GenderForm;