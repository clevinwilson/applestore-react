import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserLoginDetails, setSignoutState, selectUserEmail, selectUserName, selectuserId, selectUserPhoto } from '../../features/user/userSlice';
import { auth, db } from '../Firebase/Firebase';

function Account() {
    const username = useSelector(selectUserName);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function signOut() {
        auth.signOut().then(() => {
            dispatch(setSignoutState());
            navigate('/');
        }).catch((error) => {
            alert('Error')
        });
    }
  return (
    <div>
          <section class="bg-white ribbon">
              <div class="bg-white container">
                  <div style={{borderBottom: "1px solid #d2d2d7"}} class="row ">
                      <div class="pt-3 bg-white ribbon-covid-19 col-md-4 col-4">
                          <p class="text-center shipping-ribbon-text">Account </p>
                      </div>
                      <div class="pt-3 bg-white ribbon-covid-19 col-md-8 col-8">
                          <a onClick={signOut} style={{float: "right"}} class="content-align" ><i style={{fontWeight: "100"}}></i>Sign out
                          </a>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-4 mb-3">
                          <div class="text-center username-container">
                              <h2 class="rs-header-welcome-text">Hi, {username ? username:""}</h2>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section style={{backgroundColor: "#f5f5f7"}}>
              <div class="containerj ">
                  <div class="row p-3">
                      <div class=" col-md-6 ">
                          <div class="bg-white p-5 m-2">
                              <div class="rs-account-link-tile-inner">
                                  <h2 class="p-1 rs-account-link-tile-title">Your Orders</h2>
                              </div>
                              <h3 class="p-1 rs-account-link-tile-description ">Track an order</h3>
                              <a class="p-1" style={{ fontSize: "17px" }} href="/order">See your order history <i style={{ fontSize: "11px" }}
                                  class="fas fa-chevron-right"></i></a>
                          </div>
                      </div>

                      <div class=" col-md-6">
                          <div class="bg-white p-5 m-2">
                              <div class="rs-account-link-tile-inner">
                                  <h2 class="p-1 rs-account-link-tile-title">Your Favorites</h2>
                              </div>
                              <h3 class="p-1 rs-account-link-tile-description ">You favorite products.</h3>
                              <a class="p-1" style={{ fontSize: "17px" }} href="/favorite">See your Favorites <i style={{ fontSize: "11px" }}
                                  class="fas fa-chevron-right"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section>
              <div class="container">
                  <div class="row">
                      <div class="col-md-12 p-5">
                          <div class="rs-account-link-tile-inner">
                              <h2 class="p-1 rs-account-link-tile-title">Account Settings</h2>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-3 mt-4">
                          <p class="text-center shipping-ribbon-text">Shipping</p>
                      </div>
                      <div class="col-md-3 mt-4">
                          <h3 class=" rs-account-link-tile-description ">Shipping address.</h3>
                          <p> Kannur <br/>
                              Kerala<br/>
                                  India<br/>
                                      India</p>
                                  <a style={{cursor: "pointer"}} class="text-primary " data-toggle="modal" data-target="#defaultAddress">Edit</a>
                        </div>
                        <div class="col-md-3 mt-4">
                                  <h3 class=" rs-account-link-tile-description ">Contact information</h3>
                                  <p> clevinmwilson@</p>
                                  <a href="">Edit</a>
                              </div>
                          </div>

                              <div class="row mt-4">
                                  <div class="col-md-3">
                                      <p class="text-center shipping-ribbon-text mt-4">Privacy</p>
                                  </div>
                                  <div class="col-md-9 mt-4">
                                      <h3 class=" rs-account-link-tile-description ">Personal information</h3>
                                      <p> You're in control of your personal information and can manage your data or delete your account at
                                          any time. Apple is committed to protecting your privacy.</p>
                                      <a href="/privacy-control">Manage my personal information </a>
                                  </div>

                              </div>
                      </div>
                  </section>


          {/* <!-- default address Modal--> */}
          <div class="modal fade" id="defaultAddress" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div style={{marginTop:" 30px"}} class="text-center modal-dialog" role="document">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h2 style={{color: "black"}} class="modal-title text-black " id="exampleModalLabel">Edit Address</h2>
                          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">×</span>
                          </button>
                      </div>
                      <form action="/update-address" method="POST">
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


    </div>
  )
}

export default Account