import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Request from 'superagent';


class Demo extends React.Component {
	    constructor(props){
            super(props);
            this.show=true;
            this.state = { value : 1 ,count : 1 , index : 2 ,show : true} ;
            this.Next = this.Next.bind(this); 
            this.Previous = this.Previous.bind(this); 
            this.sum = this.sum.bind(this); 
	    }

        Next(){
            this.setState({ value: !this.state.value,count : this.state.count + 1}) 
            if((this.state.count%2) == 0){
                this.setState({ index : this.state.index + 1 }) 
            }
        }

        Previous(){
            this.setState({ value: !this.state.value, count : this.state.count -1})
            if((this.state.count%2) == 0){
                this.setState({ index : this.state.index - 1 }) 
            }
        }

        sum(e){
            localStorage.setItem('nextQuestion', e.target.value);
            this.setState({ show: !this.state.show}) 
        }

	    render() {
            return ( 
            	<div>
            	    {   
                        (this.state.value == true) ?
                        <div>
                            <h1>Name of { this.state.index } child with DOB ? </h1>
                            <label>
                                <input type="text"   placeholder="First Name"/>
                            </label> <br/>
                            <label>
                                <input type="text"   placeholder="Middle Name"/>
                            </label> <br />
                            <label>
                                <input type="text"   placeholder="Last Name"/>
                            </label>
                            <label>
                                <input type="date"   placeholder="Last Name"/>
                            </label>
                        </div>
                        : 
                        (this.state.value == false) ?
                        <div>
                            <h1>Do you have another Child ? </h1>
                            <label>
                                <input type="radio" name="true"  /> Yes
                            </label>
                            <label>
                                <input type="radio" name="true" onClick={ this.sum } value='13' /> No
                            </label>
                       
                        </div>
                        : ""
                    }
            	    {
                	    (this.state.value == true || this.state.value == false) ?
                	    <div>
                            {
                            (this.state.index > 2 ) ? 
                            <button onClick = { this.Previous } >Previous</button>
                            : <button onClick={ this.props.Parentpre.bind(this)}>Previous</button>
                            }
                            {
                            (this.state.show ===true ) ? 
                            <button onClick = { this.Next } >Next</button>
                            : <button  onClick={ this.props.Parent.bind(this)}> Next </button>
                            }
                         </div>
                        : ""  
                    }
                </div>
            )
        }
}       


export default Demo;