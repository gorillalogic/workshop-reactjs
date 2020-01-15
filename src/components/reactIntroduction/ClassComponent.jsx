import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #333;
  background-color: #666;
  padding: 2em;
`;

const Title = styled.h1`
  color: #1EA7FD;
  font-weight: bold;
`;

export default class ClassComponent extends Component {
  render() {
    return (
      <Container>
        <Title>I'm a Class Component</Title>
      </Container>
    );
  }
}
