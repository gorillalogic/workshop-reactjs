import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { BASE_URL } from '../../configuration/apiConfig';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 300px;
`;

const fontStyles = css`
  font-size: 16px;
  font-family: Helvetica, sans-serif;
`;

const Label = styled.label`
  ${fontStyles}
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: #1EA7FD;
  margin: 0.5em 0;
`;

const Input = styled.input`
  ${fontStyles}
  margin-left: 10px;
  color: #333;
  padding: 0.2em;
  border-radius: 2px;
  border: 0.5px solid #999;
  box-shadow: 2px 2px 4px #93989a;
`;

const Button = styled.button`
  ${fontStyles}
  background-color: #333;
  color: white;
  padding: 0.5em;
  border-radius: 5px;
`;

export default class SimpleFormWithState extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      age: ''
    };
  }

  handleChange = ({ target }) => {
    this.setState({[target.name]: target.value});
  }

  submitForm = async (event) => {
    event.preventDefault();
    console.log('Current State: ',this.state)
    const response = await fetch(`${BASE_URL}/people`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    });

    const result = await response.json();
    console.log('API Response: ', result);
  };

  render() {
    return (
      <Form onSubmit={this.submitForm} >
        <Label>Name: 
          <Input name="name" value={this.state.name} onChange={this.handleChange}/> 
        </Label>
        <Label>Last Name: 
          <Input name="lastName" value={this.state.lastName} onChange={this.handleChange}/> 
        </Label>
        <Label>Age: 
          <Input name="age" value={this.state.age} type="number" onChange={this.handleChange}/> 
        </Label>
        <Button type="submit">
          Add person
        </Button>
      </Form>
    );
  }
}
