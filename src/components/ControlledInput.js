import React, { Component } from 'react'

class ControlledInput extends Component {

  state = {
    firstName: "John",
    lastName: "Henry",
    displayedFirstName: "First Name",
    displayedLastName: "Last Name"
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleFormChange} />
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleFormChange} />
          <input type="submit" value="submit"></input>
        </form>

        <h1>{this.state.displayedFirstName}</h1>
        <h1>{this.state.displayedLastName}</h1>

      </div>
    )
  }

  handleFormChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({displayedFirstName: `${this.state.firstName}`, displayedLastName: `${this.state.lastName}`})
  }

}

export default ControlledInput
