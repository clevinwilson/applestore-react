import React from 'react'

function Watch() {
  return (
    <div>
          {/* <!-- ribborn --> */}
          <section  class="mt-5 ribbon">
              <div class="bg-light container">
                  <div class="row ">
                      <div class="pt-3 ribbon-covid-19 col-md-12">
                          <p class="text-center ribbon-text">Shop now at the Apple Store online with many great ways to buy.
                              Get free,
                              no-contact delivery, Specialist help and <a href="#"> more <i
                                  class="fas fa-chevron-right"></i></a></p>
                      </div>
                  </div>
              </div>
          </section>   

          {/* <!-- watch banner --> */}
          <section class="pt-5 bg-white">
              <div class="row">
                  <div class="pt-2 col-md-12">
                      <div class="text-center text-light text">
                          <img style={{objectFit: "contain",width: "132px",height: "51px"}} src="/images/logo_watch_s7__dnxp9zoaom82_medium_2x.png" alt=""/>
                              <h2 class="imac-header-text mt-3 ">Full screen ahead.</h2>
                              <h3 class="text-dark banner-text">Available later this year.</h3>
                              <div class="mt-1 banner-links">
                                  <a href="/iphone">Learn more <i
                                  class="banner-links-icons fa-solid fa-angle-right"></i></a>
                              </div>
                              <div class=" banner-image-box imac-banner">
                                  <img id="imacImage" class="imac-image iphone13pro-index-image" src="/images/hero_s7__ep2maoos292e_large.jpg" alt=""/>
                              </div>
                      </div>
                  </div>
              </div>
          </section>  
          {/* <!-- watch banner --> */}
          <section style={{backgroundColor: "#fafafa"}} class="p-3 macos-section">
              <div class="row mt-5">
                  <div class="col-md-6 macos">

                      <img class="mb-3"
                          src="/images/logo-watch-se__soyna2pegxeq_large.png" alt=""/>
                          <h3 class="imac-sub-text text-dark accessories-head-text">Heavy on features.Light on price.</h3>
                          <h4 class="imac-price">From 29900*</h4>
                          <a href="">Learn more <i style={{fontSize:" 9px"}}
                          class="banner-links-icons fa-solid fa-angle-right"></i></a>

                  </div>
                  <div class="col-md-6 mt-4">
                      <img class="macos-image ipadmini-image" src="images/tile-watch-se__knji2d25x8qe_large.jpg" alt=""/>
                  </div>
              </div>
          </section>
    </div>
  )
}

export default Watch