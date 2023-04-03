import React from 'react'
import web from "../src/img/img2.png";
import { Link } from 'react-router-dom';
export const Home = () => {
  return (
    <section id='header' className='d-flex align-items-center'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-10 mx-auto nav_bg'>
            <div className="row">
            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
            <h1>Grow your business with <strong className='brand-name'> &nbsp; &nbsp; Filipkart</strong> </h1>
            <h2 className='my-3'>
              We are the team of talented developer making websites
            </h2>
            <div className='mt-3'>
              <Link href=" " to="/services" className='btn-get-started'>Get Started </Link>
            </div>
            </div>
            <div className='col-lg-6 order-1 order-lg-2 header-img'>
              <img src={web} className='img-fluid animated' alt="home img" />
            </div>
          </div>
          </div>
        </div>
      </div>
    
    </section>
  )
}

export default Home;