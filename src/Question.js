import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Request from 'superagent';
import Dyanamic from './dyanamicQuestion';
import Demo from './demo';


class Question extends React.Component {
    constructor(){
        super();
        this.state = {
            currentQuestion:0,
            nextQuestion : 0,
            childcount : 2 ,
        }
       
        this.mul = this.mul.bind(this); 

    }

    sum(e){
        localStorage.setItem('nextQuestion', e.target.value);
    }

    cal(e){
        localStorage.setItem('nextQuestion', e.target.name);
    }

    mul(e){
       localStorage.setItem('nextQuestion', e.target.value);
       this.setState({ childcount : this.state.childcount +1 })
       localStorage.setItem('index',this.state.childcount + 1);

    }

    render() {
        let count= this.props.componentData.number;
        let c=this.props.next;
        let index = localStorage.getItem('index');
        
        if( count == c){
            if(index == 2){
                localStorage.setItem('previousQuestion', 11 );
                localStorage.removeItem('index');
            }else {
                localStorage.setItem('previousQuestion', this.props.componentData.previousQuestion); 
            }
        }

        return (
            <div>
                { 
                ( count == c && count )
                    ? 
                        (this.props.componentData.type == "option") ?
                        <div>
                            <h1>{this.props.componentData.name}</h1>
                            <form>
                                <label>
                                    <input type="radio" name="true" onClick={ this.sum } value={ this.props.componentData.option[0].nextQuestion }/> { this.props.componentData.option[0].value}
                                </label>
                                <label>
                                    <input type="radio" name="true" onClick={ this.sum } value={ this.props.componentData.option[1].nextQuestion } /> { this.props.componentData.option[1].value}
                                </label>
                            </form>
                        </div>
                        :  
                        (this.props.componentData.type == "name") ?
                        <div>
                            <h1>{this.props.componentData.name}</h1>
                            <label>
                                <input type="text" name={ this.props.componentData.nextQuestion } onClick = {this.cal }  placeholder="First Name"/>
                            </label>  <br/>
                            <label>
                                <input type="text" name={ this.props.componentData.nextQuestion } onClick = {this.cal }  placeholder="Middle Name"/>
                            </label> <br />
                            <label>
                                <input type="text" name={ this.props.componentData.nextQuestion } onClick = {this.cal }  placeholder="Last Name"/>
                            </label>
                        </div>   
                        : 
                        (this.props.componentData.type == "date") ?
                        <div>
                            <h1>{this.props.componentData.name}</h1>
                            <label>
                                <input type="date" name={ this.props.componentData.nextQuestion } onClick = {this.cal }  placeholder="Select Date"/>
                            </label> 
                        </div>
                        : 
                        (this.props.componentData.type == "address") ?
                        <div>
                            <h1>{this.props.componentData.name}</h1>
                            <label>
                                <input type="text" name={ this.props.componentData.nextQuestion } onClick = {this.cal }  placeholder="Enter Address"/>
                            </label> 
                        </div>
                        : 
                        (this.props.componentData.type == "phone") ?
                        <div>
                            <h1>{this.props.componentData.name}</h1>
                            <label>
                                <input type="text" name={ this.props.componentData.nextQuestion } onClick = {this.cal }  placeholder="Enter Phone Number"/>
                            </label> 
                        </div>
                        : 
                        (this.props.componentData.type == "email") ?
                        <div>
                            <h1>{this.props.componentData.name}</h1>
                             <label>
                                <input type="text" name={ this.props.componentData.nextQuestion } onClick = {this.cal }  placeholder="Enter Email"/>
                            </label> 
                        </div>
                        : 
                        (this.props.componentData.type == "common") ?
                        <div>
                            <h1>{this.props.componentData.name}</h1>
                            <label>
                                <input type="text" name={ this.props.componentData.nextQuestion } onClick = {this.cal }  placeholder="Enter Name"/>
                            </label> 
                        </div>
                        :
                        (this.props.componentData.type == "name-child") ?
                        <div>
                            <h1>{this.props.componentData.name}</h1>
                            <label>
                                <input type="text" name={ this.props.componentData.nextQuestion } onClick = {this.cal }  placeholder="First Name"/>
                            </label> <br/>
                            <label>
                                <input type="text" name={ this.props.componentData.nextQuestion } onClick = {this.cal }  placeholder="Middle Name"/>
                            </label> <br />
                            <label>
                                <input type="text" name={ this.props.componentData.nextQuestion } onClick = {this.cal }  placeholder="Last Name"/>
                            </label>
                            <label>
                                <input type="date" name={ this.props.componentData.nextQuestion } onClick = {this.cal }  placeholder="Last Name"/>
                            </label>
                        </div>
                        :
                        (this.props.componentData.type == "second-name-child") ?
                            ( index ) ? 
                            <div>
                                <h1> Name of { index } child with DOB ? </h1>
                                <label>
                                    <input type="text" name={ this.props.componentData.nextQuestion } onClick = {this.cal }  placeholder="First Name"/>
                                </label>  <br/>
                                <label>
                                    <input type="text" name={ this.props.componentData.nextQuestion } onClick = {this.cal }  placeholder="Middle Name"/>
                                </label> <br />
                                <label>
                                    <input type="text" name={ this.props.componentData.nextQuestion } onClick = {this.cal }  placeholder="Last Name"/>
                                </label>
                                <label>
                                    <input type="date" name={ this.props.componentData.nextQuestion } onClick = {this.cal }  placeholder="Last Name"/>
                                </label>
                            </div>
                            : 
                            <div>
                                <h1> Name of { this.state.childcount } child with DOB ? </h1>
                                <label>
                                    <input type="text" name={ this.props.componentData.nextQuestion } onClick = {this.cal }  placeholder="First Name"/>
                                </label>  <br/>
                                <label>
                                    <input type="text" name={ this.props.componentData.nextQuestion } onClick = {this.cal }  placeholder="Middle Name"/>
                                </label> <br />
                                <label>
                                    <input type="text" name={ this.props.componentData.nextQuestion } onClick = {this.cal }  placeholder="Last Name"/>
                                </label>
                                <label>
                                    <input type="date" name={ this.props.componentData.nextQuestion } onClick = {this.cal }  placeholder="Last Name"/>
                                </label>
                            </div>
                        : 
                        (this.props.componentData.type == "option-1") ?
                        <div>
                            <h1>{this.props.componentData.name}</h1>
                            <form>
                                <label>
                                    <input type="radio" name="true" onClick={ this.mul } value={ this.props.componentData.option[0].nextQuestion }/> { this.props.componentData.option[0].value}
                                </label>
                                <label>
                                    <input type="radio" name="true" onClick={ this.mul } value={ this.props.componentData.option[1].nextQuestion } /> { this.props.componentData.option[1].value}
                                </label>
                            </form>
                        </div>
                        :""
                    : "" 
                }
            </div>
        );
    }
}


export default Question;