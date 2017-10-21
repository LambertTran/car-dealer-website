import React, {Component} from 'react';
import { connect } from 'react-redux';

import {fetchCustomerImages} from '../../actions';

class CustomerImages extends Component{

  componentWillMount(){
    this.props.fetchCustomerImages();
  }
  
  renderCustomerImages(img){
    return (
      <div className="card">
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    )
  }

  render(){
    let customers = this.props.customers;
    console.log(customers);
    return(
      <div className="customer-page">
        <div className="card-columns">
          {customers.map(customer => this.renderCustomerImages(customer.paths))}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    customers:state.customers
  }
}

export default connect(mapStateToProps,{fetchCustomerImages})(CustomerImages);