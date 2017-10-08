import React from 'react';
import {Link} from 'react-router-dom';

export default function ViewAutos(){
  return (
    <div className="home-btn">
      <Link to="/autos">
        <span>Quality Pre-owned</span>
      </Link>      
    </div>

  )
}
