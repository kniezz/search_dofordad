import React, { Component } from 'react';
import './App.css';
import { data as DATA } from './data.json';

class App extends Component {
  
  state = {
    keyword: '',
    filteredData: DATA
  }

  onKeywordChange = (e) => {
    this.setState({keyword: e.target.value}, this.search);
  }

  search() {
    const filteredData = DATA.filter(d => d.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) !== -1);
    this.setState({ filteredData: filteredData });
  }

  render() {
    return (
      <div className="App">
        <input 
          value={this.state.value}
          type='text' 
          placeholder='Search name...' 
          onChange={this.onKeywordChange} />
        <div>
          {this.state.filteredData.length == 0? 'Not found' : this.state.filteredData.length > 100? `Please search more specific name, current result: ${this.state.filteredData.length}` :
            this.state.filteredData.map(data => 
              <div key={data['fb_id']} style={{ padding: '5px', border: '1px solid #000'}}>
                <div>Name: {data['name']}</div>
                <div>Goal: {data['goal']}</div>
              </div>  
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
