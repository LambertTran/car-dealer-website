import React, {Component} from 'react';

/** Images **/
import stickshift from '../../../images/stickshift3.jpg';

export default class DealerDetail extends Component{
  render(){
    var bgImg2 = {
      backgroundImage: `url(${stickshift})`
    }
    return(
      <section className="row">
        <div className="home fixed-attachment reduced-size" style={bgImg2}>
          <div className="col-12">
            <div className="row">
              <h1>Auto 27</h1>
              <h1>(916) 993-0999</h1>
              <div className="col-12 col-sm-12 col-lg-8 dealer-detail">
                <ul>
                  <li> We are CARFAX Advantage® Dealer </li>
                  <li> FREE CARFAX® Vehicle History Reports™ on every car</li>
                  <li> Buy from us with confidence </li>
                </ul>
              </div>
              <div className="col-12 col-sm-12 col-lg-4 time">
                <ul>
                  <li>Mon: 10:00AM - 6:30PM</li>
                  <li>Tue:  10:00AM - 6:30PM</li>
                  <li>Wed:  10:00AM - 6:30PM</li>
                  <li>Thu:  10:00AM - 6:30PM</li>
                  <li>Fri:  10:00AM - 6:30PM</li>
                  <li>Sat:  10:00AM - 6:30PM</li>
                  <li>Sun:  10:00AM - 6:30PM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
} 