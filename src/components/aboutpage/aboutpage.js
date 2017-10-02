import React,{Component} from 'react';

/** import components **/
import NavBar from '../share/navbar';
import ContactForm from './components/contact-form';
import ContactInfo from './components/contact-info';

export default class About extends Component{
  render(){
    return(
      <div className="aboutpage">
        <NavBar />
        <div className="about-header">
          <h1>Contact</h1><hr/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <ContactInfo />        
            </div>
            <div className="col-12 col-md-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
