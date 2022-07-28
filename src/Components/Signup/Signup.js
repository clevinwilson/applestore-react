import React from 'react'
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom'

function Signup() {
    const navigate=useNavigate();
  return (
    <Container>
          {/* <!-- sighn up ribborn --> */}
          <section class="bg-light ribbon">
              <div class="bg-light container">
                  <div class="row ac-ln-content ">
                      <div class="col-md-6 col-6">
                          <div class="pt-3 ribbon-covid-19 mb-1 col-md-12">
                              <h2 style={{fontSize: "22px", fontWeight: "600"}}>Apple ID</h2>
                          </div>
                      </div>
                      <div class="col-md-6 col-6 text-center mt-3">
                          <a onClick={()=>{navigate('/signin')}} style={{float: "right", fontSize: "12px"}} class="text-dark ">Sign In</a>
                      </div>
                  </div>
              </div>
          </section>

          {/* <!-- apple id banner --> */}
          <section class=" appleid-section bg-dark">
              <div class="container">
                  <div class="row">
                      <div class="col-md-12 text-center">
                          <div class="signup-text-container ">
                              <h1 class="appleid-text">Create Your Apple ID</h1>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section class="sub-ribborn">
              <div class="container">
                  <div class="row">
                      <div style={{paddingTop: "30px"}}  class="col-md-12 ">
                          <div class="intro text-center">
                              <h6 class="intro-text  ">One Apple ID is all you need to access all Apple services. <br/>
                                  You already have an Apple ID? <a href="">Find it here<i class="bi bi-chevron-right"></i>
                                  </a></h6>
                          </div>
                      </div>
                  </div>
              </div>
          </section>


          <section class="mt-4">
              <div class="container">
                  <div class="row form-container ">
                      <div class=" col-md-12 text-center ">
                          <form action="" name="signup" id="signup" method="POST">
                              <div class="row text-center">
                                  <div class="  form-group col-md-6">
                                      <input type="text" class="form-input-padding form-control" placeholder="first name"
                                          required/>
                                  </div>
                                  <div class="form-group col-md-6">
                                      <input type="text" class="form-input-padding form-control" placeholder="last name"
                                          required/>
                                  </div>
                                  <div class="form-group col-md-12">
                                      <input type="email" class=" form-input-padding form-control"
                                          placeholder="name@example.com" required/>
                                          <p class="m-1 text-secondary" style={{textAlign: "left" ,fontSize: "15px"}}>This will be
                                              your new Apple ID.</p>
                                  </div>
                                  <div class="form-group col-md-12">
                                      <input type="password" id="password" class=" form-input-padding form-control"
                                          minlength="4" placeholder="password"/>
                                          <p class="password-notmatch-text password-error-text"> The passwords you entered do not
                                              match.</p>
                                  </div>

                                  <div class="form-group col-md-12">
                                      <input type="password" id="confirm-password" class=" form-input-padding form-control"
                                          minlength="4" placeholder="confirm password"/>
                                          <p class="password-notmatch-text confirm-password-error-text"> The passwords you entered
                                              do not match.</p>
                                  </div>

                                  <div class="form-group col-md-12">
                                      <input type="number" id="phone-number" class=" form-input-padding form-control"
                                        //   oninput="javascript: if (this.value.length > this.maxLength ) this.value = this.value.slice(0, this.maxLength);"
                                          placeholder="phone number" maxlength="10" minlength="10"/>
                                          <p class="password-notmatch-text phone-error-text confirm-password-error-text"> </p>
                                  </div>
                                  <div class="col-md-12">
                                      <p class="text-secondary" style={{fontSize: "15px !important" ,float: "left"}}>Make sure you
                                          enter a phone number you can always access.</p>
                                  </div>
                                  <div class="form-btn-container  col-md-12">
                                      <button href="" type="submit" name="submit"
                                          class="form-submit-btn-style  btn btn-primary">Continue</button>
                                  </div>

                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </section>

    </Container>
  )
}
const Container=styled.div`

`

export default Signup