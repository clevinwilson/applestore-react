import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import ScrollIntoView from 'react-scroll-into-view';

function BuyProduct() {
  const [modelDiv, setModelDiv] = useState(false);
  const [colorDiv,setColorDiv] =useState(false);
  const [storageDiv,setStorageDiv]=useState(false);

  return (
    <Container>
      {/* <!-- title price listing --> */}
      <section style={{ borderBottom: "1px solid #c5c5c5" }} class="title-price-nav ribbon">
        <div class="bg-light title-containers p-1 ml-5 mr-5">
          <div style={{ padding: "2px", backgroundColor: "white" }} class="row   ">
            <div class=" title-divider col-md-6 col-6">
              <h2 class="text-center product-title-name">Iphone 12</h2>
            </div>
            <div class="p-2 text-center product-title-price col-md-6 col-6">
              <span>From ₹14111/mo. with EMI,** or ₹786554</span>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ribborn --> */}
      <section class="m-0 ribbon">
        <div class="bg-light container">
          <div class="row ">
            <div class="pt-3 ribbon-covid-19 col-md-12">
              <p style={{ fontSize: "14px" }} class="text-center ribbon-text">See all the flexible ways to pay and
                save on your new iPhone. <a href="#"> Learn more <i class="fas fa-chevron-right"></i></a></p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-7  ">
              <div class="text-center p-3 mt-3 product-header-sm">
                <h3 class="violator-frameless">New</h3>
                <h2 class="product-name">Buy Iphone 12</h2>
                <div class="product-offer">
                  <p>Get 10% on your Apple devices</p>
                </div>
              </div>
              <div class=" product-image-cotainer">
                <img class="product-spc-image" src="/images/iphone-12-pro-family-hero.jpg" alt="" />
                <div class="text-center buystrip">
                  <p class="product-sm-name" style={{ fontSize: "14px" }}> iPhone 12 </p>
                  <hr class="produc-hr" />
                  <p class="need-help-tag"> Need some help? </p>
                </div>
              </div>
            </div>

            <div class="col-md-5 p-3 mt-4">
              <div class="product-header">
                <h3 class="violator-frameless">New</h3>
                <h2 class="product-name">Buy iPhone 12</h2>
                <div class="product-offer">
                  <p>Get 10% on your Apple devices</p>
                </div>
              </div>
              <form id="device-details" action="/add-to-bag" method="POST">
                <div onclick="divScroll('device-color')" id="model" class="mt-4 model">
                  <h2 class="model-title">Choose your model.</h2>
                  <a style={{ fontSize: "14px" }} href="#">Which model is right for you?</a>
                  <ScrollIntoView selector="#model" onClick={() => { setModelDiv(true) }}>
                    <label id='device-model' class="mt-3 poduct-container col-md-12 p-0 ">
                      <input type="radio" class="radio-btn" id="device" name="deviceId"
                        value="{{productDetails._id}}" required />
                      <div class="device-model-select product-model">
                        <div class="device-radio">
                          <span class="model-title">IPhone</span>
                          <span class="screen-size">iPHone</span>
                          <span class="device-price-right">From ₹ 54000</span>
                        </div>
                      </div>
                    </label>
                  </ScrollIntoView>
                  {/* {{!-- < label class="mt-3 poduct-container col-md-12 p-0 ">
                  <input type="radio" class="radio-btn" id="device" name="device">
                    <div class="device-model-select product-model">
                      <div class="device-radio">
                        <span class="model-title">iPhone 12 Pro</span>
                        <span class="screen-size">15.5 cm (6.1-inch) display¹</span>
                        <span class="device-price-right">From ₹119900</span>
                      </div>
                    </div>
                  </label> --}} */}
                </div>
                {/* <script>
                  var colorIndex = 0;
                </script> */}

                <ScrollIntoView selector='#device-color' onClick={() => { setColorDiv(true) }} className={modelDiv ? "div-opacity-visible t-4 border-size model" : "div-opacity-none t-4 border-size model"}>
                  <div id="device-color">
                    <h2 class="model-title  mt-4">Choose your finish.</h2>
                    <div class="row">
                      {/* {{ #each productDetails.color }} */}
                      <label class="mt-3 poduct-container text-center col-md-6 col-6 ">
                        <input type="radio" class="radio-btn" id="color" name="color" value="{{this}}" required />
                        <div style={{ padding: "20px" }} class="device-model-select product-model">
                          <div class="device-radio">
                            <img class="product-color"
                              src="/device-colors/{{../productDetails._id}}{{this}}.jpg" alt="" />
                            <span class="form-label-small m-1"></span>
                          </div>

                        </div>
                      </label>
                      {/* {{/ each}} */}


                    </div>
                  </div>
                </ScrollIntoView>

                {/* <!-- device storage --> */}
                <ScrollIntoView selector='#device-storage' onClick={() => { setStorageDiv(true) }} className={colorDiv ? "div-opacity-visible mt-4 border-size mode" : "div-opacity-none  mt-4 border-size mode"} onclick="divScroll('total-price-section')"
                       >
                  <div id="device-storage" >
                      <h2 class="model-title  mt-4">Choose your capacity.</h2>
                      <a style={{ fontSize: "14px" }} href="#">How much capacity is right for you?</a>
                      <div class="row">

                        {/* {{ #each productDetails.storageOptions }} */}
                        <label class="mt-3 poduct-container text-center col-md-6  col-6 ">
                          <input type="radio" class="radio-btn" onclick="calculateTotalPrice('{{this.storageprice}}')" id="storage" name="storage"
                            value="{{this.storagesize}}" />
                          <div style={{ padding: "20px" }} class="p-4 device-model-select product-model">
                            <div class="device-radio">
                              <span class="form-selector-title">128 GB</span>
                              <span class="small-text">+ ₹ 5000</span>
                            </div>
                          </div>
                        </label>
                        {/* {{/ each}} */}
                      </div>
                    </div>
                  </ScrollIntoView>

                <div id="total-price-section" class={storageDiv ? "div-opacity-visible footer-section " :"div-opacity-none footer-section "}   >
                  <div class="total-price  mt-5">
                    <h2 style={{ fontSize: "32px", fontWeight: " 100" }} class="mt-5 price  product-name">Toal Price :
                      ₹ <span id="total-device-price">78000</span></h2>
                  </div>
                  <div class="bag-btn-container mt-4 mb-3">
                    <div class="mt-4">
                      <button class="col-md-10 col-10 bag-btn btn btn-primary" type="submit">Add to
                        Bag</button>
                      <i onclick="addToFavorite('{{productDetails._id}}')" id="favorite-icon"
                        class="col-md-2 col-2 bi bi-heart"></i>

                      <i onclick="removeFromFavorite('{{productDetails._id}}')" id="favorite-icon-added"
                        style={{ display: " none", color: " #0066cc" }} class="col-md-2 col-2  fas fa-heart "></i>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>




      <section style={{ backgroundColor: "#fafafa" }}>
        <div class="container">
          <div class="row">
            <div class="col-md-5 m-3">
              <img src="/images/iphone-compare-models-202010_GEO_EMEA.jpg" alt="" />
            </div>
            <div class="col-md-5 banner-right-section  text-center">
              <h2 class="product-name">Blast past fast.</h2>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- third banner imac --> */}
      <section id='third-banner' class="mt-3 mb-3 text-center banner-three">
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
const Wrap = styled.div`


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

export default BuyProduct