import React , {Component} from 'react';

export default class ContactInfo extends Component{
  render() {
    return (
      <div className="contact-info">
        <div>
          <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
          <p>Shields Ave, Davis, CA 95616</p>
        </div>

        <div>
          <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
          <p>lb.tran648@gmail.com</p>
        </div>
        <div>
          <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
          <p>408-603-1667</p>
        </div>
      </div>
    );
  }
}