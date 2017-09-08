import React,{Component} from 'react';
import { connect } from 'react-redux';

/** import components **/
import NavBar from '../share/navbar';
// import AutoPageBody from './auto-page-body';

/** import action helpers **/
import {fetchAllCars} from '../../actions';

class Autos extends Component{
  

  render(){
    return(
      <div>
        <NavBar />
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    cars:state.cars
  }
}

export default connect(mapStateToProps)(Autos);