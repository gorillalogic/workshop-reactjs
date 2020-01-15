import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #249;
  color: white;
  padding: 2em;
`;

const ChildrenWrapper = styled.div`
  border: 1px solid white;
  border-radius: 5px;
  background-color: white;
  color: black;
  padding: 1em;
`;

function NestedComponent(props) {
  return (
    <Container>
      <h1>I'm the parent component!</h1>
      <ChildrenWrapper>{props.children}</ChildrenWrapper>
    </Container>
  );
}

export default NestedComponent;
