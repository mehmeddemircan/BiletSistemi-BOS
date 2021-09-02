import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './CategoryCards.css'
const CategoryCards = () => {
    return (
        <Fragment>

<div className="container px-5" style={{margin: '36px 0px'}}>
      <div className="row">
      
     
       <div className="col-md-3 col-sm-6" style={{ marginBottom: 18 }}>
       <Link to="/category/home-and-living">
          <div className="card" style={{borderRadius: 18}}>
            <img src="https://images.pexels.com/photos/7054719/pexels-photo-7054719.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <div className="card-text">
              <h3>Home living</h3>
            </div>
          </div>
          </Link>
        </div>
         
       <div className="col-md-3 col-sm-6" style={{ marginBottom: 18 }}>
       <Link to="/category/home-and-living">
          <div className="card" style={{borderRadius: 18}}>
            <img src="https://images.pexels.com/photos/7054719/pexels-photo-7054719.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <div className="card-text">
              <h3>Home living</h3>
            </div>
          </div>
          </Link>
        </div>

         
       <div className="col-md-3 col-sm-6" style={{ marginBottom: 18 }}>
       <Link to="/category/home-and-living">
          <div className="card" style={{borderRadius: 18}}>
            <img src="https://images.pexels.com/photos/7054719/pexels-photo-7054719.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <div className="card-text">
              <h3>Home living</h3>
            </div>
          </div>
          </Link>
        </div>
         
       <div className="col-md-3 col-sm-6" style={{ marginBottom: 18 }}>
       <Link to="/category/home-and-living">
          <div className="card" style={{borderRadius: 18}}>
            <img src="https://images.pexels.com/photos/7054719/pexels-photo-7054719.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <div className="card-text">
              <h3>Home living</h3>
            </div>
          </div>
          </Link>
        </div>
         
       <div className="col-md-3 col-sm-6" style={{ marginBottom: 18 }}>
       <Link to="/category/home-and-living">
          <div className="card" style={{borderRadius: 18}}>
            <img src="https://images.pexels.com/photos/7054719/pexels-photo-7054719.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <div className="card-text">
              <h3>Home living</h3>
            </div>
          </div>
          </Link>
        </div>
  </div>
  </div>
        </Fragment>
    )
}

export default CategoryCards
