import React,{Component} from 'react';

/** import components **/
import NavBar from '../share/navbar';
import HomePageBody from './home-page-body';

class Home extends Component{
  render(){
    return(
      <div>
        <NavBar />
        <HomePageBody />
      </div>
    )
  }
}
export default Home;