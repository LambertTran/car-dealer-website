import React,{Component} from 'react';

/** import components **/
import NavBar from '../share/navbar';
import CustomerImages from './customer-images';


export default class Customer extends Component{
  render(){
    return(
      <div className="page">
        <NavBar />
        <CustomerImages />
      </div>
    )
  }
}