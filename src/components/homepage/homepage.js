import React,{Component} from 'react';
/** import components **/
import NavBar from '../share/navbar';
import HomePageBody from './home-page-body';
import Footer from '../share/footer.js';

class Home extends Component{
  render(){
    return(
      <div className="container-fluid">
        <NavBar />
        <HomePageBody />
        <Footer />
      </div>
    )
  }
}
export default Home;