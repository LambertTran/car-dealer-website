import React,{Component} from 'react';

export default class Footer extends Component{
  render(){
    return(
      <footer className="footer">
        <p>Copyright © 2017. All rights reserved</p>
        <p> Developed by &nbsp; 
          <a href="http://portfolio-v2.s3-website-us-west-1.amazonaws.com/">
            Lambert Tran
          </a>
        </p>  
      </footer>
    )
  }
}