import React,{Component} from 'react';
import {scroller} from 'react-scroll';

/** Components **/
import MainHomePage from './top/main-homepage';
import IconContent from './middle/icon-content';
import DealerDetail from './bottom/dealer-detail';

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
    
    return(
      <div>
        <MainHomePage handleScroll={this.handleScroll} />
        <IconContent />
        <DealerDetail />
      </div>
    )
  }
}

export default HomePageBody;