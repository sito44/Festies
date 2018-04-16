import React from "react";

class AboutDescription extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handlePrevious = this.handlePrevious.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
    
      this.props.AddAboutDescription(this.state.value);
      this.props.nextStep();

    }

    handlePrevious = () => {
        this.props.previousStep();
      }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Tell other festies about yourself:
            <br></br>
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <br></br>
          <input type="submit" value="Submit" />
          <button onClick={this.handlePrevious} value="Previous">Previous</button>
        </form>
      );
    }
  }

export default AboutDescription;