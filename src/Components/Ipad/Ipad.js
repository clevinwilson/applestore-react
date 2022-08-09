import React from 'react'

function Ipad() {
  return (
    <div>
          {/* <!-- ipad mini banner --> */}
          <section style={{backgroundColor: "white"}} class=" macos-section">
              <div style={{width:"100%"}} class="row mt-5">
                  <div class="col-md-6 macos">

                      <h2 style={{fontSize: "45px"}} class="imac-header-text  accessories-text">iPad <img class="mb-3"
                          src="/images/mini_script__bjahejz6luqa_large.png" alt=""/></h2>
                      <h3 class="imac-sub-text text-dark accessories-head-text">Mega power. Mini sized.</h3>
                      <h4 class="imac-price">From ₹46900*</h4>
                      <a href="">Learn more <i style={{ fontSize: "9px" }} 
                          class="banner-links-icons fa-solid fa-angle-right"></i></a>

                  </div>
                  <div class="col-md-6 mt-4">
                      <img class="macos-image ipadmini-image" src="images/ipad_mini__dn6g8b0hw8om_large.jpg" alt=""/>
                  </div>
              </div>
          </section>

    </div>
  )
}

export default Ipad