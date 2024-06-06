import React from "react";

const card = () => {
    return (
      
      <div className="col-md-3  mb-5 ">
      <div className="card h-100 w-80 ms-2 me-2">
      <img src="https://cdn.pixabay.com/photo/2024/02/26/19/39/monochrome-image-8598798_640.jpg" className="card-img-top" alt="Card Image" />
        <div className="card-body">
          <h5 className="card-title">Todo esta bien</h5>
          <p className="card-text">Aunque todo se queme manten la calma. Todo esta bien</p>
          <div className="card-footer">
          <a href="#read-more" className="btn btn-primary">Pulsa pero tampoco va</a>
          </div>
        </div>
      </div>
      </div>
      
      
    
   

    )
}
export default card ;

