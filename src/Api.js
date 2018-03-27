import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Request from 'superagent';
import Question from './Question';



class Api extends React.Component {
    constructor()
    {
        super();
        this.state={
           data:[],
           questions:[],
           count : 0,
           currentQuestion:0,
           nextQuestion:0,
           value : "Initaial Data"
        }
          this.nextQuestion = this.nextQuestion.bind(this);
          this.previousQuestion = this.previousQuestion.bind(this);
    }

    nextQuestion(){
       var next=localStorage.getItem('nextQuestion');
       this.setState({ count : this.state.count +1})
       
       this.setState({ currentQuestion:next})
    }

    previousQuestion(){
      var pre=localStorage.getItem('previousQuestion');
      
      this.setState({ currentQuestion:pre})
      localStorage.removeItem('nextQuestion');
    }

    componentDidMount()
    {
       fetch('data.json',{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
       })
       .then((Response) => Response.json())
       .then((result) => 
       {
           console.log(result.Question)
           this.setState({
              data : result.Question,
           })
       })
    }
    
    render() {
     
      return (
        <div>
            <div>
               { this.state.data.map((dynamicComponent, i) => 
                  <Question 
                  componentData = {dynamicComponent}  next= {this.state.currentQuestion}/>)}


                  <button onClick = { this.previousQuestion } > Previous</button>
                  <button onClick = { this.nextQuestion } > Next </button>
            </div>
        </div>
      );
   }
}

export default Api;