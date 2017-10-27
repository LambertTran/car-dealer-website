import React,{Component} from 'react';



export default class SaleContent extends Component{
  render(){
    return(
      <div className = "sale-page">
        <div className="container sale-pos">
          <div className="row">
            <div className="col-12 col-md-6 sale-pos">
              <div className="sale-detail">
                <ul>
                  <li>We'll buy your car even if you don't buy ours</li>
                  <li>Get your offer in as little as 30 minutes </li>
                  <li>Sell today and leave with payment in hand</li>
                  <li>Your offer is good for 7 days</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 sale-pos">
              <div className="sale-contact">
                <h3>Call us at (916) 993-0999</h3>
                <h3>to get your best quote</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}