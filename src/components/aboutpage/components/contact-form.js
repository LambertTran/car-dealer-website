import React, {Component} from 'react';
import {sendEmail} from '../../../actions/index';

export default class ContactForm extends Component{
  
  constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      message:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name] : event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    sendEmail(this.state);
    this.setState({name:"",email:"",message:""})
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="contact-form" id="formID">
        <div className="form-group">
          <input
            name="name" 
            value={this.state.name} 
            className="form-control" 
            type="text" 
            placeholder="Your name"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <input 
            name="email"
            value={this.state.email} 
            className="form-control" 
            type="text" 
            placeholder="Your email"
            onChange={this.handleChange} 
          />
        </div>
        <div className="form-group">
          <textarea 
            name="message" 
            value={this.state.message}
            className="form-control" 
            type="text" 
            placeholder="Your message"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary"> Contact me </button>
        </div>
      </form>
    )
  }
}