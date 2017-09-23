import React,{Component} from 'react';

/** Images **/
import car from '../../images/car-content.png';
import phone from '../../images/phone.png';
import drive from '../../images/drive.png';

export default class IconContent extends Component{
  render(){
    return(
      <section className="row" id='section2'>
        <h1>How it works</h1>
        <div className="col-12 col-md-4 icon-container">
          <img src={car} className="img-icon"/>
          <h3>Select car you like</h3>  
        </div>
        <div className="col-12 col-md-4 icon-container">
          <img src={phone} className="img-icon"/>
          <h3>Make an appointment</h3>  
        </div>
        <div className="col-12 col-md-4 icon-container">
          <img src={drive} className="img-icon"/>
          <h3>Drive the car you love home</h3>  
        </div>
      </section>
    )
  }
}