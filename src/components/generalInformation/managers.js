import React from 'react'

const styles = {
  table: {
    //backgroundColor: 'red',
    border: '1px solid #ddd',
    padding: '8px',
    '& td': {
      'padding-top': '12px',
      'padding-bottom': '12px',
      'text-align': 'left',
      'background-color': '#4CAF50',
      color: 'white'
    },
    '& tr:hover': {
      'background-color': '#ddd'
    }
  }
}

function Managers() {
  return (
    <div style={styles.table}>
      <h2>Managers</h2>
      <table>
        <tr>
          <th style={styles.table}>Name</th>
          <th style={styles.table}>Role</th>
          <th style={styles.table}>GitHub User</th>
        </tr>
        <tr>
          <td>Arturo Campos</td>
          <td>Senior Web Developer</td>
          <td></td>
        </tr>
        <tr>
          <td>Mariano Alvarez</td>
          <td>Web Practice Lead & Sr. Web Developer </td>
          <td></td>
        </tr>
      </table>
    </div>
  )
}

export default Managers
