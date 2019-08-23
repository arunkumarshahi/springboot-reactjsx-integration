import  React, { Component } from  'react';
import $ from 'jquery';
import {findDOMNode} from 'react-dom';
class  SearchBox  extends  Component {
    constructor(){
        super();
    }
    componentDidMount(){
       // this.fnameInput.focus();
       //this.refs.fnameInput.focus()
      }
      _onClick=(event)=>{
          console.log("event is ==",event.target)
          const e1 = findDOMNode(this[event.target.id]);
          $(e1).parent().toggleClass('open');
      }

     

    render() {
        return (<div class="search">
        <input type="search" class="search-box" />
        <span className="search-button" ref={(input) => { this.LasName = input; }}  id="LasName" onClick={this._onClick}>
          <span className="search-icon"></span>
        </span>
      </div>)
    }
}
export  default  SearchBox;