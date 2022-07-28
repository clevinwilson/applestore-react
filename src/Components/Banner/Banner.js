import React from 'react'
import styled from 'styled-components'

function Banner() {
  return (
    <Container>
      {/* <!-- ipad banner --> */}
      <section className="pt-4 banner">
        <div className="text-center text-light text">
          <h2 className="banner-header-text">iPad Pro</h2>
          <h3 className="banner-text">Supercharged by the Apple M1 chip.</h3>
          <div className="mt-1 banner-links ">
            <a className='text-decoration-none' href="iphone-12.html">Learn more <i className="banner-links-icons fa-solid fa-angle-right"></i></a>
            <a className="text-decoration-none pl-2" href="">Buy <i className="banner-links-icons fa-solid fa-angle-right"></i></a>
          </div>
          <div className="banner-image-box">
            <img id="myImg" className="banner1 banner-image" src="" alt="" />
          </div>
        </div>
      </section>

      <section className="mt-3 mb-3 banner-two">
        <div className="col-md-12">
          <img id="banner-two" class="banners-image banner-image-two" src=""
            height="600px" width="100%" alt="" />
          <div className='text-center'>
            <h2 className="banners-header-text">iPhone 12</h2>
            <h3 className="banners-text">Blast past fast.</h3>
            <h3 className="banners-sub-text">From ₹69900* before&nbsp;trade‑in</h3>
            <a className="text-decoration-none ml-3 pr-5 mr-5 banners-links" href="iphone-12.html">Learn more <i
              className="banner-links-icons fa-solid fa-angle-right"></i></a>
            <a className="text-decoration-none banners-links pl-5 ml-5 " href="buy-product.html">Buy <i
              className="banner-links-icons fa-solid fa-angle-right"></i></a>
          </div>
        </div>
      </section>


      {/* <!-- third banner imac --> */}
      <section class="mt-3 mb-3 text-center banner-three">
        <div style={{ width: "100%" }} class="row">
          <div class="col-md-12 text-center">
            <img class="banners-image banners-image-three" id="banner-three" src="images/hero_imac__dqh65mwjj04m_large.jpg" width="100%"
              height="600px" alt="" />
            <h2 class="banners-header-text">iMac</h2>
            <h3 class="banners-text">Say hello.</h3>
            <a style={{ height: "252px" }} class="text-decoration-none ml-3 pr-5 mr-5 banners-links" href="iphone-12.html">Learn more <i
              class="banner-links-icons fa-solid fa-angle-right"></i></a>
            <a style={{ height: "252px" }} class="text-decoration-none banners-links pl-5 ml-5 " href="">Buy <i
              class="banner-links-icons fa-solid fa-angle-right"></i></a>
          </div>
        </div>
      </section>


      {/* <!-- //section 4 wwdc and watch  --> */}
      <section>
        <Wrap>
          <BannerContainer>
            {/* <!-- wwdc banner --> */}
            <div style={{ background: 'black' }} class="wwdc-wrap  mt-2">
              <div class=" wrapper">
                <div class="logo-wrapper">
                  <div class="wwdc-logo">
                    <h4 class="wwdc-logo-image"
                      style={{ backgroundImage: "url(/images/promo_tile_logo__fois684wh1ym_large.png)" }}> </h4>
                  </div>
                  <div class="wwdc-logo-text">
                    <h5 class="wwdc-text">Join us for the Worldwide Developer <br /> Conference, 7-11 June.</h5>
                  </div>
                  <div class="wwdc-link">
                    <a className='text-decoration-none' href="">Learn more <i style={{ fontSize: "13px" }} class="fas fa-arrow-right"></i></a>
                  </div>
                </div>
                <div style={{ overflow: "hidden", display: "block" }} class="banner-wrapper">
                  <video id="myVideo" class="wwdc-video" src="/videos/large_2x.mp4" type="video/mp4" width="100%"
                    muted={true} autoPlay={true}  playInline={true} height="auto"></video>
                </div>
              </div>
            </div>

            {/* <!-- watch banner --> */}
            <div class=" mt-2 watch-banner">
              <div class=" watch-header">
                <img class=" banners-image" id="banner-three" src="images/promo_watch_series_6_lte__f8lrasjnry2y_large_2x.jpg"
                  width="100%" height="580px" alt="" />
              </div>
              <div className='content-wrap'>
                <img class="watch-logo" src="images/promo_logo_watch_series_6__gdadxakat1iu_large.png" alt="" />
                <div class="watch-content watch-text">
                  <h5 class="wwdc-text">The future of health is on your wrist.</h5>
                </div>
                <div class="watch-content watch-links">
                  <a className='text-decoration-none' href="">Learn more <i style={{ fontSize: "13px" }} class="mr-2 fa-solid fa-angle-right"></i></a>
                  <a className='text-decoration-none' href="buy-product.html">Buy <i style={{ fontSize: "13px" }}
                    class="banner-links-icons  fa-solid fa-angle-right"></i></a>
                </div>
              </div>
            </div>
          </BannerContainer>
        </Wrap>
      </section>



      {/* <!-- air tag banner --> */}
      <section>
        <div style={{ width: "100%" }} class="row">
          <div class="col-md-6">
            <div class="mt-3 box-margin ">
              <img class=" banners-image" id="banner-three" src="/images/promo_airtag__e6b73a64nno2_large.jpg" width="100%"
                height="580px" alt="" />
              <img class="box-logo" src="/images/promo_logo_airtag__c5t9ubtmpuqa_large.png" alt="" />
              <div class="watch-content watch-text">
                <h5 class="text-center text-dark twwdc-text">Lose your knack for losing things.</h5>
              </div>
              <div class="watch-content watch-links">
                <a class="text-decoration-none mr-3" href="">Learn more <i style={{ fontSize: "13px" }}
                  class="banner-links-icons fa-solid fa-angle-right"></i></a>
                <a className='text-decoration-none' href="">Buy <i style={{ fontSize: "13px" }}
                  class="banner-links-icons fa-solid fa-angle-right"></i></a>
              </div>
            </div>
          </div>


          {/* <!-- Tv section banner --> */}
          <div class="col-md-6">
            <div class="mt-3 box-header-content">
              <img class=" banners-image" id="banner-three" src="/images/promo_tile_tv4k__cbz6fpnn6kz6_large.jpg"
                width="100%" height="580px" alt="" />
              <img style={{ height: "34px" }} class="box-logo" src="/images/tv4k_logo__bwn2kbgd6ixe_large.png" alt="" />
              <div class="text-center watch-content watch-text">
                <h5 class="text-dark tv-text">A higher <br /> definition of TV.</h5>
              </div>
              <div style={{ height: "191px" }} class="watch-content watch-links">
                <a class="text-decoration-none mr-3" href="">Learn more <i style={{ fontSize: "13px" }}
                  class="banner-links-icons fa-solid fa-angle-right"></i></a>
                <a className='text-decoration-none' href="">Buy <i style={{ fontSize: "13px" }}
                  class="banner-links-icons fa-solid fa-angle-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

const Container = styled.div`
text-decoration:"none";
img{
object-fit: cover;
}
.banner1{
  content:url("/images/index-banner.jpg");
  height: 394px;
  width: 100%;
  object-fit: cover;
}
.banner-image-two{
    content:url("/images/iphone_12_updated__jepm2xpxncuy_large_2x.jpg");
}

@media (max-width:734px){
.banner1{
    content:url("/images/hero_ipad_pro_non_avail__fcrsmhs4b7ma_small_2x.jpg");
    object-fit:contain;
    height:380px !importent;
    width:100%;
}
.banner-image-two{
    content:url("/images/iphone_12_updated__jepm2xpxncuy_small_2x.jpg");
}
.banners-image-three{
content:url("/images/hero_imac__dqh65mwjj04m_small_2x.jpg");
}
 
}

.banner-sub-text{
  color: #86868b;
  font-size: 14px;
  line-height: 1.07143;
  letter-spacing: -.005em;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}
.banner2{
  background-color:#fbfbfd;
}
`
const Wrap=styled.div`


`
const BannerContainer = styled.div`
display:grid;
width:100%;
position:relative;
gap: 9px;
grid-template-columns: repeat(2, minmax(0px, 1fr));

@media (max-width: 768px){

    grid-template-columns: repeat(1, minmax(0px, 1fr));
}
`
export default Banner