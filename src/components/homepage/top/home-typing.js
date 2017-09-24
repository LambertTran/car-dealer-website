import React,{Component} from 'react';
import Typed from 'typed.js';

 export default class HomeTyping extends Component{
  componentDidMount(){
    const {strings} = this.props;
    const options = {
      strings: strings,
      typeSpeed:50,
      backSpeed:50,
      backDelay:1500,
      loop:true,
      loopCount:Infinity,
      showCursor:false
    };
    this.typed = new Typed(this.el,options);
  }

  componentWillUnMount(){
    this.typed.destroy();
  }

  render(){
    return(
      <div className="typing">
        <h1
          style={{ whiteSpace: 'pre' }}
          ref={(el) => { this.el = el; }}
        />
      </div>
    )
  }
}