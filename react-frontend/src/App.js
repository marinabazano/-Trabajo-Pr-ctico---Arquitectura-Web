import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      bpi: {},
      time: {}
    };
  }

  componentDidMount() {
    document.title = "Projects";
    fetch('https://localhost:3001/projects')
    .then(results => {
      return results.json();
    }).then(data => {
        console.log(data);
    });
  }

  getTableBody() {
    let tableData = [];
    forEach(this.state.bpi, (data, key) => {
        tableData.push(
            <tr>
                <td>
                  {data.project_id}
                </td>
                <td>
                  {data.project_name}
                </td>
                <td>
                  {data.description}
                </td>
                <td>
                  {data.estimated_hours}
                </td>
            </tr>
        );
    });
    return tableData;
  }

  getTable() {
    return (
        <Table>
        <thead>
          <tr>
            <th>Project ID</th>
            <th>Project Name</th>
            <th>Description</th>
            <th>Estimated Hours</th>
          </tr>
        </thead>
        <tbody>
          {this.getTableBody()}
        </tbody>
        </Table>
    );
  }

  render() {
    return (
      <div>
        <div className = "project_table">
        {this.getTable()}
      </div>
    </div>
    );
  }


}

export default App;