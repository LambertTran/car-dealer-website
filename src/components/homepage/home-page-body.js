import React,{Component} from 'react';
import {scroller} from 'react-scroll';

/** Images **/
import stickshift from '../../images/stickshift3.jpg';

/** Components **/
import MainHomePage from './main-homepage';
import IconContent from './icon-content';

class HomePageBody extends Component{
 
  handleScroll(){
    scroller.scrollTo('section2',{
      duration: 1500,
      delay: 100,
      offset:-56,
      smooth: "easeInOutQuint"
    })
  }
  
  render(){
    var bgImg2 = {
      backgroundImage: `url(${stickshift})`
    }
    return(
      <div className="container-fluid">
        <MainHomePage handleScroll={this.handleScroll} />
        <IconContent />
        <section className="row">
          <div className="home fixed-attachment" style={bgImg2}>
          </div>
        </section>
        <div className="row">
          <div className="content"></div>
        </div>
      </div>
    )
  }
}

export default HomePageBody;