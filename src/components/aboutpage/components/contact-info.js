import React , {Component} from 'react';

export default class ContactInfo extends Component{
  render() {
    return (
      <div className="contact-info">
        <div>
          <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
          <p>8732 Fruitridge Rd #5, Sacramento, CA 95826</p>
        </div>

        <div>
          <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
          <p>auto27sacramento@gmail.com</p>
        </div>
        <div>
          <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
          <p>(916) 993 - 0999</p>
        </div>
      </div>
    );
  }
}