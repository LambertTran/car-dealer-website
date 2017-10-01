import React,{Component} from 'react';

/** import components **/
import NavBar from '../share/navbar';
import ContactForm from './components/contact-form';


export default class About extends Component{
  render(){
    return(
      <div>
        <NavBar />
        <ContactForm />
      </div>
    )
  }
}
