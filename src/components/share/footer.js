import React,{Component} from 'react';

export default class Footer extends Component{
  render(){
    let value = this.props.style;
    let style = {position: value }
    return(
      <div className="row">
        <footer className="footer" style={style}>
          <p>Copyright © 2017. All rights reserved</p>
          <p> Developed by &nbsp; 
            <a href="http://lbtran.com/">
              Lambert Tran
            </a>
          </p>  
        </footer>
        
      </div>
        
    )
  }
}