import React,{Component} from 'react';

/** import components **/
import NavBar from '../share/navbar';
import SaleContent from './sale-content';

export default class SalePage extends Component{
  render(){
    return(
      <div className="page">
        <NavBar />
        <SaleContent />
      </div>
    )
  }
}