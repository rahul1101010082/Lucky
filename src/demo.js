import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Request from 'superagent';


class Demo extends React.Component {
	    constructor(props){
            super(props);
            this.state = { value : 1 ,count : 0} ;
            this.Question = this.Question.bind(this); 
            this.Next = this.Next.bind(this); 
	    }

        Question(){
            this.setState({ value: !this.state.value,count : this.state.count +1})
          
        }

        Next(){
            this.setState({ value: 10 ,count : this.state.count +1})
        }

        addQuestion(props){
    	    return (
    	    	<div>
    	    	    {   
    	    	    	(this.state.value == true) ?
    	    	    	<div>
    	    	    	    <h1>Name of { this.state.count } child with DOB ? </h1>
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
    	    	    	</div>
    	    	    	: ""
    	    	    }
    	    	</div>
    	    ); 
        } 

        


	    render() {
            return ( 
            	<div>

            	    {this.addQuestion()}  
            	    {
            	  
            	    (this.state.value == true || this.state.value == false) ?
            	      <div>
                    <button onClick = { this.Question } >Next</button>
                    <button onClick = { this.Next } >Pre</button>
                     </div>
                    : ""
                   
                    }
                </div>
            )
        }
}       


export default Demo;