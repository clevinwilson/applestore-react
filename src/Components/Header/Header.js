import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLoginDetails, setSignoutState, selectUserEmail, selectUserName, selectuserId, selectUserPhoto } from '../../features/user/userSlice';
import { auth, db } from '../Firebase/Firebase';
import PropagateLoader from "react-spinners/PropagateLoader";

function Header() {
  const navigate = useNavigate();
  const [bagState, setBagStage] = useState(false);
  const [nav, setNav] = useState(false);
  const username = useSelector(selectUserName);
  const dispatch = useDispatch();
  const userid = useSelector(selectuserId);
  const [bag, setBag] = useState([]);

  function signOut() {
    auth.signOut().then(() => {
      dispatch(setSignoutState());
      navigate('/');
    }).catch((error) => {
      alert('Error')
    });
  }
  function setUser(user) {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        userId: user.uid
      })
    )
  }
  const getBag = () => {
    db.collection('bag').where("userid", "==", userid).get().then((snapshort) => {
      const bagDetails = snapshort.docs.map((product) => {
        return (
          product.data()
        )

      })
      setBag(bagDetails)
    })
  }

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
      }
    })
  }, [userid])

  return (
    <div>
      <header style={{ lineHeight: "0.8" }}>
        <div className="row">
          <div className="col-md-12">
            {/* <!-- hamburger menu for small devices --> */}
            <div id="mySidenav" className={nav ? "sidenav sidenav-open" : "sidenav "}>
              <a id="closebtn" className="closebtn" onClick={() => { setNav(!nav) }}><i
                style={{ fontSize: "26px" }} className={!nav ? "text-white fas fa-equals " : "text-white fa-solid fa-xmark"}></i></a>

              <div className="sm-header">
                <a id="apple-logo" onClick={() => { navigate('/') }} className="apple-logo"><img
                  src="https://www.apple.com/ac/globalnav/6/en_IN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__cxwwnrj0urau_large.svg"
                  style={{ height: "53px " }} alt="" /></a>

                <a onClick={() => {
                  if (username && !bagState) {

                    console.log(bag);
                    getBag();
                  }
                  setBag([]);
                  setBagStage(!bagState)
                }} id="sm-bag" className="text-light bag"><i class="fa-solid fa-bag-shopping"></i></a>
              </div>

              <input className="search-bar mb-3 p-3 mr-3 ml-3" type="text" placeholder="  🔍 Search apple.com" />
              <hr className=" hamburger-hr" />
              <a href="mac.html">iMac</a>
              <hr style={{ marginLleft: "20px", marginRight: "20px " }} />
              <hr className="ml-4 mr-4 hamburger-hr" />

              <a style={{ color: "#818181" }} onClick={() => { navigate('/iphone'); setNav(!nav) }}>iPhone</a>
              <hr style={{ marginLeft: "20px", marginRight: "20px" }} />
              <hr className="ml-4 mr-4 hamburger-hr" />

              <a href="#">Watch</a>
              <hr style={{ marginLeft: "20px", marginRight: "20px" }} />
              <hr className="ml-4 mr-4 hamburger-hr" />

              <a href="support.html">Support</a>
              <hr style={{ marginLeft: "20px", marginRight: "20px" }} />
              <hr className="ml-4 mr-4 hamburger-hr" />

              <a href="#">iPad</a>
            </div>

            {/* <!-- Bag for sm devices --> */}
            <div id="dropdown-content-sm" className={bagState ? " p-3 mb-2 dropdown-content-sm " : " p-3 mb-2 dropdown-content-sm content-hide "} >
              {
                username ?
                  <div>
                    {
                      bag[0] ?
                      <div>

                       { bag.map((items) => {
                         return (
                           <div style={{ marginLeft: "20px" }} className="mt-3  dag-items row">

                              <div className="col-md-3 col-3">
                                <img style={{ objectFit: "contain", height: "100%", width: "46px" }} src={items.productDetails.productImage}
                                  alt="" />
                              </div>
                              <div style={{ fontSize: "12px", display: "flex", justifyContent: "center", alignItems: "center" }} className="col-md-9 col-9 bag-items-spec">
                                <span>{items.productDetails.productName}</span>
                                <span className="ml-1 " >{items.selectedStorage.storage}</span>
                                <span className='ml-1' >{items.color} </span>
                              </div>

                            </div>
                          )
                        })
                        }
                          <hr />
                          <div style={{ width: "100%", color: "white !important" }} onClick={() => { navigate('/bag') }} className="mb-4 btn btn-primary text-white checkout-btn">Check Out</div>
                        </div>
                        :
                        <div>
                          <div className='mb-4' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <PropagateLoader color={"#0066cc"} loading={bag[0]} size={10} />
                            <hr />
                          </div>
                          {
                            bag[0] ?
                              <div>
                                <p className="m-4 p-1" style={{ color: "#6e6e73", fontSize: "13px" }}>Your Bag is empty.</p>
                                <hr />
                              </div>

                              :
                              ""
                          }
                        </div>
                    }
                  </div>
                  :
                  ""
              }

              <div className="bag-options p-1  pl-4 pr-4">
                <hr />
                <a className="content-align" href="/"><i className="mr-2 fa-solid fa-bag-shopping"></i>Bag</a>
                <hr />
                <a className="content-align" href="/"><i style={{ fontWeight: "100" }} className="mr-2 far fa-heart"></i>
                  Favourites</a>
                <hr />
                <a className="content-align" href="/"><i style={{ fontWeight: "100" }} className="mr-2 fas fa-box"></i>
                  Orders</a>
                <hr />
                <a className="content-align" href="/"><i style={{ fontWeight: "100" }} className="mr-2 fas fa-cog"></i>
                  Account</a>
                <hr />

                {username ?

                  <a className="content-align" onClick={() => { signOut(); setBagStage(!bagState); }}>
                    <i style={{ fontWeight: "100" }} className="mr-2 fas fa-user-circle"></i> Sign out {username}
                  </a>
                  :

                  <a className="content-align" onClick={() => { setBagStage(!bagState); navigate('/signin') }}>
                    <i style={{ fontWeight: "100" }} className="mr-2 fas fa-user-circle"></i>Sign in
                  </a>
                }
              </div>
            </div>


            <nav id="navbar" style={{ position: "fixed", width: "100%", zIndex: "1" }}
              className={bagState ? "navdbar navbar-expand-md nav-bg  navbar-dark nav-background" : "navdbar navbar-expand-md nav-bg  navbar-dark"}>
              {/* <!-- Toggler/collapsibe Button --> */}
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              {/* <!-- Navbar links --> */}
              <div className=" content collapse navbar-collapse" id="collapsibleNavbar">
                <ul style={{ alignItems: "center" }} class="center navbar-nav" >
                  <li className="nav-item-box nav-item">
                    <a className=" nav-link" onClick={() => { navigate('/') }}>
                      <img
                        src="https://www.apple.com/ac/globalnav/6/en_IN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__cxwwnrj0urau_large.svg"
                        alt="" /></a>
                  </li>
                  <li className="nav-item-box nav-item">
                    <a className="nav-link" href="mac.html"><img
                      src="https://www.apple.com/ac/globalnav/6/en_IN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_mac_image__fv4ktb435mum_large.svg"
                      alt="" /></a>
                  </li>

                  <li className="nav-item-box nav-item">
                    <a className="nav-link" onClick={() => { navigate('/iphone') }}><img
                      src="https://www.apple.com/ac/globalnav/6/en_IN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_iphone_image__dhepc4hn14cy_large.svg"
                      alt="" /></a>
                  </li>
                  <li className="nav-item-box nav-item">
                    <a className="nav-link" href="#"><img
                      src="https://www.apple.com/ac/globalnav/6/en_IN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_watch_image__dfo5u4bhooqe_large.svg"
                      alt="" /></a>
                  </li>
                  <li className="nav-item-box nav-item">
                    <a className="nav-link" href="support.html"><img
                      src="https://www.apple.com/ac/globalnav/6/en_IN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_support_image__b24reo1n4fbm_large.svg"
                      alt="" /></a>
                  </li>
                  <li className="nav-item-box nav-item">
                    <a className="text-white nav-link " href="#"><img
                      src="https://www.apple.com/ac/globalnav/6/en_IN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_ipad_image__fefum478f4uq_large.svg"
                      alt="" /></a>
                  </li>
                  <li className="nav-item-box nav-item">
                    <a className="text-white nav-icon nav-link " href="#"><i tyle={{ fontWeight: "100" }}
                      className=" fa fa-search"></i></a>
                  </li>
                  {/* <!-- //bag section --> */}
                  <li onClick={() => {
                    if (username && !bagState) {

                      console.log(bag);
                      getBag();
                    }
                    setBag([]);
                    setBagStage(!bagState)
                  }} class="nav-item-box nav-item" >
                    <div className=" dropdown">
                      <i class="text-white fa-solid fa-bag-shopping"></i>
                      <div id="dropdown-content" className={bagState ? "p-3 mb-2 dropdown-content display-content" : "p-3 mb-2 dropdown-content"}>
                        <div class="account">
                          {
                            username ?
                              <div>
                                {
                                  bag[0] ?
                                    <div>
                                      {
                                        bag.map((items, key) => {
                                          return (
                                            <div key={key}>
                                              <div style={{ display: "flex", alignItems: "center" }} class="mt-3 dag-items row">

                                                <div class="col-md-3">
                                                  <img style={{ objectFit: "contain", height: "100%", width: "32px" }}
                                                    src={items.productDetails.productImage} alt="" />
                                                </div>
                                                <div style={{ textAlign: "start", fontSize: "16px" }} class="pl-3 col-md-9 bag-items-spec">
                                                  <div>
                                                    <span>{items.productDetails.productName}</span><span class="ml-1">{items.selectedStorage.storage}
                                                    </span>
                                                  </div>
                                                  <span className='d-block mt-1'>{items.color} </span>
                                                </div>

                                              </div>
                                              
                                            </div>
                                          )
                                        })
                                      }
                                      <hr />
                                      <div style={{ width: "100%", color: "white !important" }} onClick={()=>{navigate('/bag')}} className="mb-4 btn btn-primary text-white checkout-btn">Check Out</div>
                                    </div>
                                    :
                                    <div>
                                      <div className='mb-4' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <PropagateLoader color={"#0066cc"} loading={bag[0]} size={10} />
                                        <hr />
                                      </div>
                                      {

                                        bag[0] ?
                                          <div>
                                            <p className="m-4 p-1" style={{ color: "#6e6e73", fontSize: "13px" }}>Your Bag is empty.</p>
                                            <hr />

                                          </div>


                                          :
                                          ""
                                      }
                                    </div>
                                }
                              </div>
                              :
                              ""
                          }

                          <a className="content-align" href="#"><i tyle={{ fontWeight: "100" }}
                            className="mr-2 fas fa-shopping-bag"></i>Bag</a>
                          <hr />
                          <a className="content-align" href="#"><i style={{ fontWeight: "100" }} className="mr-2 far fa-heart"></i>
                            Favourites</a>
                          <hr />
                          <a className="content-align" href="#"><i tyle={{ fontWeight: "100" }} className="mr-2 fas fa-box"></i>
                            Orders</a>
                          <hr />
                          <a className="content-align" href="#"><i tyle={{ fontWeight: "100" }} className="mr-2 fas fa-cog"></i>
                            Account</a>
                          <hr />

                          {username ?

                            < a className="content-align" onClick={signOut} ><i tyle={{ fontWeight: "100" }}
                              className="mr-2 fas fa-user-circle"></i>Sign out {username}
                            </a>

                            :

                            <a className="content-align" href="/signin"><i tyle={{ fontWeight: "100" }}
                              className="mr-2 fas fa-user-circle"></i>Sign in
                            </a>
                          }
                        </div>

                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div >
      </header >
    </div >

  )
}

export default Header