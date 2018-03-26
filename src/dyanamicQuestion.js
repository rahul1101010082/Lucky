import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Request from 'superagent';

class Dyanamic extends React.Component {
  constructor(props) {
    super(props);
    this.state = { values: [] };
  }

  createUI(){
     return this.state.values.map((el, i) => 
         <div key={i}>
              <h1>Name of Another child with DOB </h1>
    	      <label>
                  <input type="text" value={el||''} onChange={this.handleChange.bind(this, i)} placeholder="First Name"/>
                </label> 
                <br/>
                <label>
                    <input type="text" value={el||''} onChange={this.handleChange.bind(this, i)} placeholder="Middle Name"/>
                </label>
                <br />
                <label>
                    <input type="text" value={el||''} onChange={this.handleChange.bind(this, i)} placeholder="Last Name"/>
                </label>
                <label>
                   <input type="date" value={el||''} onChange={this.handleChange.bind(this, i)} />
                </label> 
    	    <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/>
         </div>          
     )
  }

  handleChange(i, event) {
     let values = [...this.state.values];
     values[i] = event.target.value;
     this.setState({ values });
  }
  
  addClick(){
    this.setState(prevState => ({ values: [...prevState.values, '']}))
  }
  
  removeClick(i){
     let values = [...this.state.values];
     values.splice(i,1);
     this.setState({ values });
  }

  render() {
    return (
      <form>
          {this.createUI()}   
          <div>
              <h1>{ this.props.name}</h1>
                <label>
                  <input type="text"   placeholder="First Name"/>
                </label> 
                <br/>
                <label>
                    <input type="text"   placeholder="Middle Name"/>
                </label>
                <br />
                <label>
                    <input type="text" placeholder="Last Name"/>
                </label>
                <label>
                  <input type="date"   placeholder="Select Date"/>
                </label> 
          </div>     
          <input type='button' value='add more' onClick={this.addClick.bind(this)}/>
         
      </form>
    );
  }
}

export default Dyanamic;