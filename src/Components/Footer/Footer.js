import React from 'react'

function Footer() {
  return (
      <footer>
          <section className="mt-3 footer-bg">
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="m-3 footer-head-text">
                              <span>*Listed pricing is Maximum Retail Price (inclusive of all taxes).<br/></span><br/>
                                  <span> Apple TV+ is ₹99/month after free trial. One subscription per Family Sharing group. Offer is valid
                                      for 3 months after eligible device activation. Plan automatically renews until <br/> cancelled.
                                          Restrictions and other terms apply.</span>
                          </div>
                          <hr/>
                      </div>
                      <div className="col-sm-1 col-md-3">
                          <h5 id="column-1" onclick="moreItems()" className="directory-column-section-head">Shop and Learn<i id="icon-1"
                              className="list-items fas fa-plus"></i></h5>
                          <hr className="column-hr"/>
                              <ul id="list-1" className="ml-3 column-list">
                                  <li className="column-list-item">Mac</li>
                                  <li className="column-list-item">iPhone</li>
                                  <li className="column-list-item">Watch</li>
                                  <li className="column-list-item">AirPods</li>
                                  <li className="column-list-item">Tv</li>
                              </ul>
                      </div>
                      <div className=" col-md-3">
                          <h5 id="column-2" onclick="moreItems(2)" className="directory-column-section-head"> Services<i id="icon-2"
                              className="list-items fas fa-plus"></i></h5>
                          <hr className="column-hr"/>
                              <ul id="list-2" className="ml-3  column-list">
                                  <li className="column-list-item">Apple Music</li>
                                  <li className="column-list-item">Apple TV+</li>
                                  <li className="column-list-item">Apple Arcade</li>
                                  <li className="column-list-item">iCloud</li>
                                  <li className="column-list-item">Apple One</li>
                                  <li className="column-list-item">Apple Books</li>
                                  <li className="column-list-item">App Store</li>
                              </ul>
                      </div>
                      <div className=" col-md-3">
                          <h5 className="directory-column-section-head">Apple Store<i className="list-items fas fa-plus"></i></h5>
                          <hr className="column-hr"/>
                              <ul className="ml-3  column-list">
                                  <li className="column-list-item">Shop Online</li>
                                  <li className="column-list-item">Ways to Buy</li>
                                  <li className="column-list-item">Apple Trade In</li>
                                  <li className="column-list-item">Recycling Programme</li>
                                  <li className="column-list-item">Order Status</li>
                                  <li className="column-list-item">Shopping Help</li>
                              </ul>
                      </div>
                      <div className=" col-md-3">
                          <h5 className="directory-column-section-head"> Apple Values<i className="list-items fas fa-plus"></i></h5>
                          <hr className="column-hr"/>
                              <ul className="ml-3  column-list">
                                  <li className="column-list-item">Accessibility</li>
                                  <li className="column-list-item">Environment</li>
                                  <li className="column-list-item">Privacy</li>
                                  <li className="column-list-item">Supplier Responsibility</li>
                              </ul>
                      </div>
                      <div className="col-md-12">
                          <span className="more-shop"> More ways to shop:Find a retailer near you. </span>
                          <hr className="section-hr"/>
                      </div>
                      <div className="mb-2 col-md-12">
                          <span className="copyright">Copyright © 2021 Apple Inc. All rights reserved.</span>
                          <a className="copyright" href="">| Privacy Policy</a>
                      </div>
                  </div>
              </div>
          </section>
      </footer>

  )
}

export default Footer