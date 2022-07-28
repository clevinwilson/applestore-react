import React from 'react'
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

function Signin() {
    const navigate=useNavigate();
  return (
      <Contaniner>
          <section style={{ marginTop: "60px", marginBottom: "100px" }}>
              <div className="container">
                  <div className="row signup-form-marginl-lg">
                      <div style={{ maxWidth: "423px" }} className="col-md-6 mt-5 ">
                          <div className="signin-header  ">
                              <h1 className="signin-header-text p-3 mb-4"> Please sign in. </h1>
                          </div>
                          <div className="signin-form-container ">
                              <form action="">
                                  <div className="form-group ">
                                      <input type="email" className="form-control signin-input  " id="email" placeholder="Apple ID"
                                          name="email" />
                                  </div>

                                  <div className="form-group ">
                                      <input type="password" className="form-control signin-input" id="pwd" placeholder="Password"
                                          name="password" />
                                  </div>
                                  <div className="form-group form-itune-text">
                                      <p className="pl-1">Your Apple ID is the email address or mobile phone number you use to sign in to iTunes,
                                          the App Store, and iCloud.</p>
                                  </div>
                                  <div className="button-submit">
                                      <button type="submit" className="btn btn-primary signin-btn">Sign In</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                      <div className="create-account-text-container mt-4 ">
                          <a className="pl-1" onClick={()=>{navigate('/signup')}} >Don’t have an Apple ID? Create one now.</a>
                      </div>
                  </div>
              </div>
          </section>

          <section style={{borderTop: "1px solid #d2d2d7"}}>
              <div className="container">
                  <div className="row">
                      <div className="col-md-12 mt-4">
                          <p>Need more help? <a href="#"> Chat now </a> or call <a href="tel://000800 040 1966">000800 040
                              1966</a></p>
                      </div>
                  </div>
              </div>
          </section>



      </Contaniner >
  )
}

const Contaniner=styled.div`

`
export default Signin