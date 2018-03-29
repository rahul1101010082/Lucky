import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Request from 'superagent';
import Demo from './demo';

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
        this.show = true;
        this.nextQuestion = this.nextQuestion.bind(this);
        this.previousQuestion = this.previousQuestion.bind(this);
        this.storePreviousQuestion = this.storePreviousQuestion.bind(this);
    }

    nextQuestion(){
       var next=localStorage.getItem('nextQuestion');
       this.setState({ currentQuestion:next})
    }

    previousQuestion(){
      var pre=localStorage.getItem('previousQuestion');
      this.setState({ currentQuestion:pre})
      localStorage.removeItem('nextQuestion');
      this.show = true;
    }

    sum(e){
        localStorage.setItem('nextQuestion', e.target.value);
    }

    cal(e){
        localStorage.setItem('nextQuestion', e.target.name);
    }

    hide(){
        this.show = false;
    }

    storePreviousQuestion(props){
        this.state.data.map((dynamicComponent, i) => 
            (dynamicComponent.number == this.state.currentQuestion ) ? 
                localStorage.setItem('previousQuestion', dynamicComponent.previousQuestion)  
            : ""
        )
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
               { this.storePreviousQuestion()}
               { this.state.data.map((dynamicComponent, i) => 

                  (dynamicComponent.number == this.state.currentQuestion )
                      ?  
                        (dynamicComponent.type == "option") ?
                          <div>
                            <h1>{dynamicComponent.name}</h1>
                            <form>
                                <label>
                                    <input type="radio" name="true" onClick={ this.sum } value={ dynamicComponent.option[0].nextQuestion }/> { dynamicComponent.option[0].value}
                                </label>
                                <label>
                                    <input type="radio" name="true" onClick={ this.sum } value={ dynamicComponent.option[1].nextQuestion } /> { dynamicComponent.option[1].value}
                                </label>
                            </form>
                        </div>

                        :  
                        (dynamicComponent.type == "name") ?
                        <div>
                            <h1>{dynamicComponent.name}</h1>
                            <label>
                                <input type="text" name={ dynamicComponent.nextQuestion } onClick = {this.cal }  placeholder="First Name"/>
                            </label>  <br/>
                            <label>
                                <input type="text" name={ dynamicComponent.nextQuestion } onClick = {this.cal }  placeholder="Middle Name"/>
                            </label> <br />
                            <label>
                                <input type="text" name={ dynamicComponent.nextQuestion } onClick = {this.cal }  placeholder="Last Name"/>
                            </label>
                        </div>   
                        : 
                        (dynamicComponent.type == "date") ?
                        <div>
                            <h1>{dynamicComponent.name}</h1>
                            <label>
                                <input type="date" name={ dynamicComponent.nextQuestion } onClick = {this.cal }  placeholder="Select Date"/>
                            </label> 
                        </div>
                        : 
                        (dynamicComponent.type == "address") ?
                        <div>
                            <h1>{dynamicComponent.name}</h1>
                            <label>
                                <input type="text" name={ dynamicComponent.nextQuestion } onClick = {this.cal }  placeholder="Enter Address"/>
                            </label> 
                        </div>
                        : 
                        (dynamicComponent.type == "phone") ?
                        <div>
                            <h1>{dynamicComponent.name}</h1>
                            <label>
                                <input type="text" name={ dynamicComponent.nextQuestion} onClick = {this.cal }  placeholder="Enter Phone Number"/>
                            </label> 
                        </div>
                        : 
                        (dynamicComponent.type == "email") ?
                        <div>
                            <h1>{dynamicComponent.name}</h1>
                             <label>
                                <input type="text" name={ dynamicComponent.nextQuestion } onClick = {this.cal }  placeholder="Enter Email"/>
                            </label> 
                        </div>
                        : 
                        (dynamicComponent.type == "common") ?
                        <div>
                            <h1>{dynamicComponent.name}</h1>
                            <label>
                                <input type="text" name={ dynamicComponent.nextQuestion } onClick = {this.cal }  placeholder="Enter Name"/>
                            </label> 
                        </div>
                        :
                        (dynamicComponent.type == "name-child") ?
                        <div>
                            <h1>{dynamicComponent.name}</h1>
                            <label>
                                <input type="text" name={ dynamicComponent.nextQuestion } onClick = {this.cal }  placeholder="First Name"/>
                            </label> <br/>
                            <label>
                                <input type="text" name={ dynamicComponent.nextQuestion } onClick = {this.cal }  placeholder="Middle Name"/>
                            </label> <br />
                            <label>
                                <input type="text" name={ dynamicComponent.nextQuestion } onClick = {this.cal }  placeholder="Last Name"/>
                            </label>
                            <label>
                                <input type="date" name={ dynamicComponent.nextQuestion } onClick = {this.cal }  placeholder="Last Name"/>
                            </label>
                        </div>
                        :
                        (dynamicComponent.type == "second-name-child") ?
                        <div>
                            { this.hide()}
                            <Demo Parent={ this.nextQuestion } Parentpre={this.previousQuestion} />
                        

                     
                        </div>
                        :""
                    : "" 
                  )}
                  <div>
                  {
                  (this.show ===true ) ? 
                  <div>
                  <button onClick = { this.previousQuestion } > Previous</button>
                  <button onClick = { this.nextQuestion } > Next </button>
                  </div>
                  : ""
                 }
                 </div>
            </div>
        </div>
      );
   }
}

export default Api;