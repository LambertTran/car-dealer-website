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
    document.getElementById('form').reset();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="contact-form" id="form">
        <div className="form-group">
          <label>Name</label>
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
          <label>Email</label>
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
          <label>Message</label>
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
          <input type="submit" className="btn btn-primary"/>
        </div>
      </form>
    )
  }
}