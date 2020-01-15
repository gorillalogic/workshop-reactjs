import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { BASE_URL } from '../../configuration/apiConfig';

const List = styled.ul`
  background-color: #666;
  border-radius: 2px;
  padding: 5px 18px;
`;

const Error = styled.p`
  background-color: #e2e2e2;
  border-radius: 2px;
  padding: 1em;
  color: #e44545;
`;

const Item = styled.li`
  color: #e4e4e4;
  list-style: none;
  padding: 0.5em;
  margin: 1em 0;
  border-bottom: 0.2px solid #cac6c6;
`;

class UsersListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      isLoading: false
    };
  }

  loadUsers = async () => {
    this.setState({ isLoading: true });
    try {
      const response = await fetch(`${BASE_URL}/peoples`);
      if (response.status === 404) {
        this.setState({
          isLoading: false,
          hasErrors: true
        });
      } else {
        const users = await response.json();
        this.setState({ users, isLoading: false, hasErrors: false });
      }
    } catch (error) {
      console.error(error)
    }
  };

  render() {
    let content;

    if (this.state.users) {
      content = (
        <List>
          {this.state.users.map(user => (
            <Item key={user.id}>{`${user.name} ${user.lastName}`}</Item>
          ))}
        </List>
      );
    } else {
      content = (
        <Fragment>
          <p>No users to be displayed! Please click the button to refresh!</p>
          <button onClick={this.loadUsers}>Refresh users!</button>
        </Fragment>
      );
    }

    return (
      <div>
        <h1>Users List</h1>
        {this.state.isLoading ? <span>Loading data!</span> : content}
        {this.state.hasErrors && (<Error>Upps, something went wrong while loading the data!</Error>)}
      </div>
    );
  }
}

export default UsersListComponent;
