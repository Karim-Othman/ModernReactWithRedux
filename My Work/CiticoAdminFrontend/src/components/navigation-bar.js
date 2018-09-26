import React from 'react';
import {Link} from 'react-router-dom';

export default function NavigationBar (){

    return(


         <div>
        <div className="tm-top-bar-bg"></div>    
        <div className="tm-top-bar" id="tm-top-bar">
            <div className="container">
                          <div className="row">
                              <nav className="navbar navbar-expand-lg narbar-light">
                                  <h1 id="ManagementPage">Management Page</h1>
                                  <Link className="navbar-brand mr-auto" href="#" to="/">
                                      <img src="../../theme/img/citico-travel.png" alt="Citico logo" />
                                  </Link>
                                  
                                  <button type="button" id="nav-toggle" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#mainNav" aria-expanded="false" aria-label="Toggle navigation">
                                      <span className="navbar-toggler-icon"></span>
                                  </button>
                                  <div id="mainNav" className="collapse navbar-collapse tm-bg-white">
                                      <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                          <Link className="nav-link active" href="#top" to="/categories">Categories<span className="sr-only">(current)</span></Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link className="nav-link" href="#tm-section-2" to="packages">Packages</Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link className="nav-link" href="#tm-section-3" to="/orders">Orders</Link>
                                      </li>
                                      <li className="nav-item">
                                          <a className="nav-link" href="#tm-section-4">Reporting</a>
                                      </li>
                                  </ul>
                              </div>                            
                          </nav>
                      </div>
                  </div> 
                </div>
            </div>



    );

}