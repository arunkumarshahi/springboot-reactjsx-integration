import  React, { Component } from  'react';
// import  Header  from  './components/Header';
import Main from './Main';
class  App  extends  Component {
    constructor(){
        super();
       
    }
    
    render() {
        return (
        <div  className="App">
            
            <div>
                <Main/>
                
          
            </div>    
            
        </div>);
    }
}
export  default  App;