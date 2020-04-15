import React, { Component } from 'react';
import { Container, Input } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

const inputStyle = {
  "width": "750px",
  "margin-left": "-30px"
}

export  class searchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onSearch: false,
      zipCode: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Handler user form submission
  handleSubmit() {
    this.setState({
      onSearch: true
    });
  }

  // Set state as user changes form input
  handleChange(value){
    this.setState({
      zipCode: value
    });
  }

  render() {

    if (this.state.onSearch === true){
      return <Redirect to={"/search/" + this.state.zipCode} />
    }

    return (
      <Container className="ui search">
        <Container className="ui massive icon input">
          <Input focus style={inputStyle} 
            icon='search' 
            to='/search' 
            placeholder='Search by zip...'
            value={this.state.zipCode}
            onChange={(e, data) => this.handleChange(data.value)}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                this.handleSubmit();
              }
            }}
            /> 
        </Container>
      </Container>
    )
  }
}

export default searchBar;