import React from "react";

import hoodie_1 from "../images/merch/hoodie_1.jpg"
import hoodie_2 from "../images/merch/hoodie_2.jpg"
import hoodie_3 from "../images/merch/hoodie_3.jpg"
import hoodie_4 from "../images/merch/hoodie_4.jpg"
import hoodie_5 from "../images/merch/hoodie_5.jpg"

function Gallery() {
  return (
    <div className="gallery">
      <div className="flex-columns row">
        <div className="item">
          <img src={hoodie_1}/>
        </div>

        <div className="item">
          <img src={hoodie_2}/>
        </div>

        <div className="item">
          <img src={hoodie_3}/>
        </div>

        <div className="item">
          <img src={hoodie_4}/>
        </div>

        <div className="item">
          <img src={hoodie_5}/>
        </div>
      </div> 
    </div>
  );
}

export default Gallery;