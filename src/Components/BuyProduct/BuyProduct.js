import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components';
import ScrollIntoView from 'react-scroll-into-view';
import { useParams,useNavigate } from 'react-router-dom';
import { db } from "../Firebase/Firebase";
import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail, selectUserName, selectuserId } from '../../features/user/userSlice';

function BuyProduct() {
  const { id } = useParams();
  const navigate=useNavigate();
  const username = useSelector(selectUserName);
  const userid = useSelector(selectuserId);
  const [productDetails, setProductDetails] = useState({});
  const [modelDiv, setModelDiv] = useState(false);
  const [colorDiv, setColorDiv] = useState(false);
  const [storageDiv, setStorageDiv] = useState(false);
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [selectedStorage, setSelectedStorage]=useState("");
  const date = new Date();

  useEffect(() => {
    db.collection("products").doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data());
          setProductDetails(doc.data())
          setPrice(doc.data().productPrice);
        } else {
          console.log("Not exists");
        }
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
   
  }, [id])

  const addToBag = (e) => {
    e.preventDefault();
    console.log(userid);
    if(username){
      db.collection('bag').add({
        productId: id,
        userid: userid,
        price,
        productDetails,
        color,
        selectedStorage,
        createdAt: date.toDateString(date),
      }).then((data) => {
        console.log('added');
        navigate('/bag')
      })
    }else{
      navigate('/signin')
    }


    // db.collection("products").doc(id)
    //   .get()
    //   .then((doc) => {
    //     if (doc.exists) {
    //       console.log(doc.data());
    //       const  status= doc.data().storageOptions.some((storage) => {
    //         if (storage.price === storagePrice) {
    //           return true
    //         }
    //       })
    //       console.log(status);
    //     } else {
    //       console.log("Not exists");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("Error getting documents: ", error);
    //   });
  }

  return (
    <Container>
      {/* <!-- title price listing --> */}
      <section style={{ borderBottom: "1px solid #c5c5c5" }} class="title-price-nav ribbon">
        <div class="bg-light title-containers p-1 ml-5 mr-5">
          <div style={{ padding: "2px", backgroundColor: "white" }} class="row   ">
            <div class=" title-divider col-md-6 col-6">
              <h2 class="text-center product-title-name">{productDetails.productName}</h2>
            </div>
            <div class="p-2 text-center product-title-price col-md-6 col-6">
              <span>From ₹14111/mo. with EMI,** or ₹{productDetails.productPrice}</span>
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
                save on your new iPhone. <a > Learn more <i class="fas fa-chevron-right"></i></a></p>
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
                <h2 class="product-name">Buy {productDetails.productName}</h2>
                <div class="product-offer">
                  <p>Get 10% on your Apple devices</p>
                </div>
              </div>
              <div class=" product-image-cotainer">
                <img class="product-spc-image" style={{ objectFit: "none" }} src={productDetails.productImage} alt="" />
                <div class="text-center buystrip">
                  <p class="product-sm-name" style={{ fontSize: "14px" }}> {productDetails.productName} </p>
                  <hr class="produc-hr" />
                  <p class="need-help-tag"> Need some help? </p>
                </div>
              </div>
            </div>

            <div class="col-md-5 p-3 mt-4">
              <div class="product-header">
                <h3 class="violator-frameless">New</h3>
                <h2 class="product-name">Buy {productDetails.productName}</h2>
                <div class="product-offer">
                  <p>Get 10% on your Apple devices</p>
                </div>
              </div>
              <form id="device-details" onSubmit={addToBag} >
                <div onclick="divScroll('device-color')" id="model" class="mt-4 model">
                  <h2 class="model-title">Choose your model.</h2>
                  <a style={{ fontSize: "14px" }} href="#">Which model is right for you?</a>
                  <ScrollIntoView selector="#model" onClick={() => { setModelDiv(true) }}>
                    <label id='device-model' class="mt-3  poduct-container col-md-12 p-0 pb-4 ">
                      <input type="radio" class="radio-btn" id="device" name="deviceId"
                        value="{{productDetails._id}}" required />
                      <div class="device-model-select product-model">
                        <div class="device-radio">
                          <span class="model-title">{productDetails.productName}</span>
                          <span class="screen-size">{productDetails.display}</span>
                          <span class="device-price-right">From ₹ {productDetails.productPrice}</span>
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
                      {
                        productDetails.productColorOptions ?
                          productDetails.productColorOptions.map((color) => {
                            return (
                              <label onClick={() => {
                                setColor(color.color);
                              }} class="mt-3 poduct-container text-center col-md-6 col-6 ">
                                <input type="radio" class="radio-btn" id="color" name="color" value="{{this}}" required />
                                <div style={{ padding: "20px" }} class="device-model-select product-model">
                                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} class="device-radio ">
                                    <img class="product-color"
                                      src={color.image} alt="" />
                                    {/* <span class="form-label-small m-1"></span> */}
                                  </div>

                                </div>
                              </label>
                            )
                          })
                          :
                          ""
                      }
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
                      {
                        productDetails.storageOptions ?
                          productDetails.storageOptions.map((storage) => {
                            return (
                              <label onClick={() => {
                                setPrice(parseInt(storage.price) + parseInt(productDetails.productPrice));
                                setSelectedStorage(storage)
                                console.log(price);
                                console.log(color);
                              }} class="mt-3 poduct-container text-center col-md-6  col-6 ">
                                <input type="radio" class="radio-btn" onclick="calculateTotalPrice('{{this.storageprice}}')" id="storage" name="storage"
                                  value="{{this.storagesize}}" />
                                <div style={{ padding: "20px" }} class="p-4 device-model-select product-model">
                                  <div class="device-radio">
                                    <span class="form-selector-title">{storage.storage}</span>
                                    <span class="small-text">+ ₹ {storage.price}</span>
                                  </div>
                                </div>
                              </label>
                            )
                          })
                          :
                          ""
                      }
                      {/* {{/ each}} */}
                    </div>
                  </div>
                </ScrollIntoView>

                <div id="total-price-section" class={storageDiv ? "div-opacity-visible footer-section " : "div-opacity-none footer-section "}   >
                  <div class="total-price  mt-5">
                    <h2 style={{ fontSize: "32px", fontWeight: " 100" }} class="mt-5 price  product-name">Toal Price :
                      ₹ <span style={{ fontSize: "24px" }} id="total-device-price">{price}</span></h2>
                  </div>
                  <div class="bag-btn-container mt-4 mb-3">
                    <div class="mt-4">
                      <button class="col-md-10 col-10 bag-btn btn btn-primary" type="submit">Add to Bag</button>
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
            <img class="banners-image banners-image-three" id="banner-three" src="/images/hero_imac__dqh65mwjj04m_large.jpg" width="100%"
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