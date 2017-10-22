import React, {Component} from 'react';
import { connect } from 'react-redux';

import {fetchCustomerImages} from '../../actions';

class CustomerImages extends Component{

  componentWillMount(){
    this.props.fetchCustomerImages();
  }
  
  renderCustomerImages(img){
    return (
      <div className="col-6 col-md-4 col-lg-3">
        <img className="img-thumbnail" src={img} alt="Card image cap" />
      </div>
    )
  }

  render(){
    let customers = this.props.customers;
    console.log(customers);
    return(
      <div className="customer-page">
        <div className="container">
          <div className = "row">        
            {customers.map(customer => this.renderCustomerImages(customer.paths))}
          </div>
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