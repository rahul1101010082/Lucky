import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Request from 'superagent';


class Api extends React.Component {
    constructor()
    {
        super();
        this.state={
           data:[],
           questions:[],
           currentQuestion:0,
           nextQuestion:0,
           value : "Initaial Data"
        }
          this.nextQuestion = this.nextQuestion.bind(this);
          this.previousQuestion = this.previousQuestion.bind(this);
    }

    nextQuestion(){
       var next=localStorage.getItem('nextQuestion');
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
                  <Content 
                  componentData = {dynamicComponent}  next= {this.state.currentQuestion}/>)}
                  
                   
                  <button onClick = { this.previousQuestion } > previous</button>
                  <button onClick = { this.nextQuestion } > Next </button>

                
                  
              
            </div>
        </div>
      );
   }
}

class Content extends React.Component {
    constructor(){
      super();
      this.state = {
         currentQuestion:0,
         nextQuestion : 0,
      }

      this.sum = this.sum.bind(this); 

    }

    sum(e){
       localStorage.setItem('nextQuestion', e.target.value);
    }

    cal(e){
       localStorage.setItem('nextQuestion', e.target.name);
    }

    

    render() {
       
      let count= this.props.componentData.number;
      let c=this.props.next;
      

      if( count == c){
          localStorage.setItem('previousQuestion', this.props.componentData.previousQuestion);
      }


      return (
          <div>
              { 
                ( count == c )
                  ? 
                   (this.props.componentData.option)?
                       <div>
                            <h1>{this.props.componentData.name}</h1>

                            <label>
                                <input type="checkbox" onClick={ this.sum } value={ this.props.componentData.option[0].nextQuestion }/> { this.props.componentData.option[0].value}
                            </label>

                             <label>
                                <input type="checkbox" onClick={ this.sum } value={ this.props.componentData.option[1].nextQuestion }/> { this.props.componentData.option[1].value}
                            </label>


                        </div>

                       : 
                          <div>
                              <h1>{this.props.componentData.name}</h1>
                              <label>
                                  <input type="text" name={ this.props.componentData.nextQuestion } onClick = {this.cal }  placeholder="wsdcwsxd"/>
                              </label> 
                          </div>
                  : "" 

          
              }
          </div>
       );
    }
}

export default Api;