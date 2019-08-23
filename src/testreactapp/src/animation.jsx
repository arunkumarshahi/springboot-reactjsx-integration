import  React, { Component } from  'react';
import $ from 'jquery';
import {findDOMNode} from 'react-dom';
class  animation  extends  Component {
    constructor(){
        super();
    }
    componentDidMount(){
       // this.fnameInput.focus();
       //this.refs.fnameInput.focus()
      }
      _onFocus=(event)=>{
          const e1 = findDOMNode(this[event.target.id]);
       console.log("on foucs on ",e1)
       $(e1).parent().find('label').addClass('active');
      }

      _onBlur=(event)=>{
          if(!event.target.value){
        const e1 = findDOMNode(this[event.target.id]);
     console.log("on foucs on ",e1)
     $(e1).parent().find('label').removeClass('active');
          }
    }

    render() {
        return (<div class="main">
       

        <h1>Input Form</h1>
        <div>
          <label for="LasName">Last Name</label>
          <input onFocus={this._onFocus} onBlur={this._onBlur} ref={(input) => { this.LasName = input; }}  id="LasName" type="text" class="styl"/>
        </div>
        <div>
          <label for="fnameInput">First Name</label>
          <input onFocus={this._onFocus} onBlur={this._onBlur} ref={(input) => { this.fnameInput = input; }}  id="fnameInput" type="text" class="styl"/>
        </div>
       
       
        
        <div>
          <label for="Massag">Your Massage</label>
         
          <input onFocus={this._onFocus} onBlur={this._onBlur} ref={(input) => { this.Massag = input; }}  id="Massag" type="text" class="styl"/>
        </div>
      </div>)
    }
}
export  default  animation;