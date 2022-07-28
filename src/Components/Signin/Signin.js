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
                              <form className='mb-4' action="">
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
                                  <div className="button-submit ">
                                      <button type="submit" className="btn btn-primary signin-btn">Sign In</button>
                                  </div>
                                 
                              </form>
                              <hr />
                              <SigninWraper>
                                  <SigninButtons>
                                      <Wrap>
                                          <img src='/images/icons8-google-35.png' />
                                          <span className='ml-1'>Google</span>
                                      </Wrap>
                                      <Wrap>
                                          <img src='/images/124010.png' />
                                          <span className='ml-1'>Facebook</span>
                                      </Wrap>
                                  </SigninButtons>
                              </SigninWraper>
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

const SigninWraper = styled.div`
display:block;
margin-top:22px;
`
const SigninButtons = styled.div`
display:flex;
justify-content: center;
align-items: center;
`
const Wrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin:10px;
display:inline;
border: 1px solid #a0a0a0;
padding: 8px 10px 8px 10px;
min-width: 112px;
font-size: 14px;
border-radius: 6px;
color: #000000;
overflow: hidden;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
cursor:pointer;
img{
    height: 28px;
    width: 28px;
    border-radius: 4px;
}
`
export default Signin