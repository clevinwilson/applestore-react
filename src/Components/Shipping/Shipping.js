import React, { useState } from 'react'
import styled from 'styled-components'

function Shipping() {
    const [addressDiv,setAddressDiv]=useState(false);
  return (
    <Container>
          {/* <!-- ribborn --> */}
          <section class="bg-white ribbon">
              <div class="bg-white container">
                  <div style={{borderBottom: "1px solid #d2d2d7"}} class="row ">
                      <div class="pt-3 bg-white ribbon-covid-19 col-md-4 col-4">
                          <p class="text-center shipping-ribbon-text">Checkout </p>
                      </div>
                      <div class="pt-3 bg-white ribbon-covid-19 col-md-8 col-8">

                      </div>
                  </div>
              </div>
          </section>

          <section class="bg-white">
              <div class="container">
                  <div class="row">
                      <div class="col-md-12 ">
                          <div class="bag-header">
                              <div class="mt-5 rs-bag-header">
                                  <h2 class="shipping-header-text checkout-header-text imac-header-text ">Where should we send
                                      your order?</h2>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <div class="form">
              <form action="" id="shipping-details" method="POST">
                  <section class="mt-5">
                      <div class="container">
                          <div class="shipping-address-container">
                              <h3 class="shipping-address-text">Select an address:</h3>
                          </div>
                          <div class="row">
                              <div class="col-md-6">
                                  <label class="mt-3 poduct-container col-md-12 p-0 ">
                                      <input type="radio" onclick="hideAddressForm()" class="radio-btn" id="address-option"
                                          name="addressOption" value="defaultAddress" required />
                                          <div class="device-model-select product-model">
                                              <div class="device-radio">
                                                  <span class="device-price-right">Default</span>
                                                  <span class="model-title">user.firstname   user.lastname </span>
                                                  <span class="screen-size pb-3 "> user.address.street </span>

                                              </div>
                                          </div>
                                  </label>

                                  

                                  <div class="edit-address">
                                      <a onClick={() => { setAddressDiv(true); }} style={{fontSize: "15px" ,color: "red" }} 
                                          class="content-align" >Edit this address</a>
                                  </div>
                                  
                                  <div onClick={() => { setAddressDiv(true) }} class="edit-address">
                                      <a style={{fontSize:" 15px" ,color:" #267af7"}} data-toggle="modal"
                                          data-target="#defaultAddress" class="content-align" href="#">Edit this address</a>
                                  </div>
                                


                              </div>
                              <div class="col-md-6">

                              </div>
                          </div>

                          <div class="row">
                              <di class="col-md-6">
                                  <label class="mt-3 poduct-container col-md-12 p-0 ">
                                      <input type="radio" onclick="showAddressForm()" class="radio-btn" id="addressOption"
                                          name="addressOption" value="newAddress" required/>
                                          <div class="device-model-select  new-address product-model">
                                              <div class="device-radio p-2">
                                                  <span class="model-title">Use a new address</span>
                                              </div>
                                          </div>
                                  </label>
                              </di>
                              <div class="col-md-6">

                              </div>
                          </div>

                          <div style={{display: "none"}} id="newAddress" class="row">
                              <div class="col-md-6">
                                  <div class="email">
                                      <input style={{borderRadius: "10px"}} type="text"
                                          class="mt-3 form-input-padding form-control" id="firstName" name="firstName"
                                          placeholder="First Name" required/>
                                  </div>
                                  <div class="number ">
                                      <input style={{ borderRadius: "10px" }} type="text" class="mt-3 form-input-padding form-control"
                                          id="lastName" name="lastName" placeholder="Last Name" required/>
                                  </div>
                                  <div class="address1 ">
                                      <input style={{ borderRadius: "10px" }} type="text" class="mt-3 form-input-padding form-control"
                                          id="street" name="street" placeholder="Address Line 1"
                                          autocomplete="address-level1" required/>
                                  </div>
                                  <div class="address2 ">
                                      <input style={{ borderRadius: "10px" }} type="text" class="mt-3 form-input-padding form-control"
                                          id="street2" name="street2" placeholder="Address Line 2 (Optional)"
                                          autocomplete="address-level2"/>
                                  </div>
                                  <div class="landmark ">
                                      <input style={{ borderRadius: "10px" }} type="text" class="mt-3 form-input-padding form-control"
                                          id="street3" name="street3" placeholder="Landmark (Optional)"
                                          autocomplete="address-level3"/>
                                  </div>
                                  <div class="postalCode ">
                                      <input style={{ borderRadius: "10px" }} type="text" class="mt-3 form-input-padding form-control"
                                          id="postalCode" name="postalCode" placeholder="PIN Code" autocomplete
                                          required/>
                                  </div>
                                  <div class="cityState ">
                                      <input style={{ borderRadius: "10px" }} type="text" class="mt-3 form-input-padding form-control"
                                          id="cityState" name="state" placeholder="City, State" required/>
                                  </div>
                                  <div class="country ">
                                      <input style={{ borderRadius: "10px" }} type="text" class="mt-3 form-input-padding form-control"
                                          id="country" name="country" placeholder="Country" value="India" readonly required/>
                                  </div>

                              </div>
                              <div class="col-md-6">

                              </div>
                          </div>
                      </div>
                  </section>


                  <section class="mt-5">
                      <div class="container">
                          <div class="shipping-address-container">
                              <h3 class="shipping-address-text">What’s your contact information?</h3>
                          </div>

                          <div style={{borderBottom: "1px solid #d2d2d7"}} class="row">
                              <div class="col-md-6 mb-5">
                                  <div class="email">
                                      <input style={{ borderRadius: "10px" }} type="email"
                                          class="mt-3 form-input-padding form-control" id="email" name="email"
                                          placeholder="Email Address" value="{{user.email}}" required/>
                                  </div>
                                  <div class="number ">
                                      <input style={{ borderRadius: "10px" }} type="text" class="mt-3 form-input-padding form-control"
                                          id="number" name="number" value="{{user.number}}" placeholder="India Mobile Number"
                                          required/>
                                  </div>
                                  {/* <input type="text" name="userId" value="{{user._id}}" hidden> */}
                              </div>
                              <div class="col-md-6 mb-3">
                                  <div class="message ml-3 mt-3">
                                      <h5 class="shipping-message">For a successful delivery, make sure your phone number is
                                          correct:</h5>
                                      <ul>
                                          <li style={{fontSize: "13px"}}>The courier will send a One-Time Password (OTP) to this number.</li>
                                          <li style={{fontSize: "13px"}}>We’ll email you a receipt and send order updates to your mobile phone via SMS or iMessage.</li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div class="row mb-5">
                              <div class="col-md-6">
                                  <div class="bottem-checkout-btn-container ">
                                      <a onclick="placeOrder()"
                                          class="text-white col-md-12 btn btn-primary bottem-shipping-btn checkout-btn mt-4 ">Continue
                                          to
                                          Payment</a>
                                  </div>
                              </div>
                              <div class="col-md-6">

                              </div>
                          </div>
                      </div>
                  </section>
              </form>
          </div>

          {/* <!-- default address Modal--> */}
          <div  class={addressDiv ? "modal fade modal-show" :"modal fade"} id="defaultAddressModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div style={{marginTop: "88px"}} class="text-center modal-dialog" role="document">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h2 style={{color: "black",}}  class="modal-title text-black " id="exampleModalLabel">Edit Address</h2>
                          <button onClick={() => { setAddressDiv(false) }} class="close" type="button" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">×</span>
                          </button>
                      </div>
                      <form action="/add-default-address" method="POST">
                          <div class="col-md-12 p-3">
                              <div class="email">
                                  <input style={{borderRadius: "10px"}} type="text" class="mt-3 form-input-padding form-control"
                                      id="firstName" name="firstName" value="{{user.firstname}}" placeholder="First Name" required/>
                              </div>
                              <div class="number ">
                                  <input style={{ borderRadius: "10px" }} type="text" class="mt-3 form-input-padding form-control"
                                      id="lastName" name="lastName" value="{{user.lastname}}" placeholder="Last Name" required/>
                              </div>
                              <div class="address1 ">
                                  <input style={{ borderRadius: "10px" }} type="text" class="mt-3 form-input-padding form-control"
                                      id="street" name="street" value="{{user.address.street}}" placeholder="Address Line 1" autocomplete="address-level1"
                                      required/>
                              </div>
                              <div class="address2 ">
                                  <input style={{ borderRadius: "10px" }} type="text" class="mt-3 form-input-padding form-control"
                                      id="street2" name="street2" value="{{user.address.street2}}" placeholder="Address Line 2 (Optional)"
                                      autocomplete="address-level2"/>
                              </div>
                              <div class="landmark ">
                                  <input style={{ borderRadius: "10px" }} type="text" class="mt-3 form-input-padding form-control"
                                      id="street3" name="street3" value="{{user.address.street3}}" placeholder="Landmark (Optional)"
                                      autocomplete="address-level3"/>
                              </div>
                              <div class="postalCode ">
                                  <input style={{ borderRadius: "10px" }} type="text" class="mt-3 form-input-padding form-control"
                                      id="postalCode" name="postalCode" value="{{user.address.postalCode}}" placeholder="PIN Code" autocomplete required/>
                              </div>
                              <div class="cityState ">
                                  <input style={{ borderRadius: "10px" }} type="text" class="mt-3 form-input-padding form-control"
                                      id="cityState" name="state" value="{{user.address.state}}" placeholder="City, State" required/>
                              </div>
                              <div class="country ">
                                  <input style={{ borderRadius: "10px" }} type="text" class="mt-3 form-input-padding form-control"
                                      id="country" name="country" placeholder="Country" value="India" readonly required/>
                              </div>
                              {/* <input type="text" name="userId" value="{{user._id}}" hidden> */}
                          </div>

                          <div class="bottem-checkout-btn-container col-md-12 p-3  ">
                              <button type="submit" id="submit"
                                  class="text-white col-md-12 btn btn-primary bottem-shipping-btn checkout-btn mb-4  ">Save
                                  Changes</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>

      </Container>
  )
}
const Container=styled.div`
#defaultAddressModal::-webkit-scrollbar {
    display: none !important;
}
.modal-show{
    opacity:1;
    background-color: #000000c9;
    display: block;
    overflow: auto 
}
`

export default Shipping