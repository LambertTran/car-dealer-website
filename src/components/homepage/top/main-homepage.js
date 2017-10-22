import React,{Component} from 'react';

import HomeTyping from './home-typing';
import ViewAutos from './view-autos';

/** Image **/
import blackRed from '../../../images/car5.jpg';

class MainHomePage extends Component{
  render(){
    var bgImg={
      backgroundImage: `url(${blackRed})`
    }

    return(
      <section className="row">
        <div className="home fixed-attachment" style={bgImg}>
          <HomeTyping strings={["QUALITY.","VALUE.","SATISFACTION."]} />
          <ViewAutos />
          <div className="down-btn">
            <a className="btn" onClick={() => this.props.handleScroll()}>
              <i className="fa fa-arrow-circle-down fa-4x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>
    )
  }
}

export default MainHomePage;