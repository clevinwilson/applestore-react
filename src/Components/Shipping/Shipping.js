import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { selectuserId } from '../../features/user/userSlice';
import { useSelector } from 'react-redux';
import { db } from '../Firebase/Firebase';
import { async } from '@firebase/util';
import { useNavigate } from 'react-router-dom';


function Shipping() {
    const navigate = useNavigate();
    const [addressDiv, setAddressDiv] = useState(false);
    const [newAddressDiv, setNewAddressDiv] = useState(false);
    const [defaultAddress, setDefaultAddress] = useState(true);

    const userid = useSelector(selectuserId);
    const [userDetails, setUserDetails] = useState({});
    const [productDetails, setProductDetails] = useState();

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [address1, setAddress1] = useState();
    const [address2, setAddress2] = useState();
    const [landmark, setLandMark] = useState();
    const [pincode, setPinCode] = useState();
    const [cityState, setCityState] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const date = new Date();

    useEffect(() => {
        db.collection('users').where("id", "==", userid).get().then((snapshort) => {
            const user = snapshort.docs.map((user) => {
                return (
                    {
                        ...user.data(),
                        userdocid: user.id

                    }
                )
            })
            setUserDetails(user[0])
        })

        db.collection('bag').where("userid", "==", userid).get().then((snapshort) => {
            const bagDetails = snapshort.docs.map((product) => {
                return (
                    {
                        ...product.data(),
                        id: product.id
                    }
                )
            })
            bagDetails.totalPrice = bagDetails.reduce((prev, next) => parseInt(prev) + parseInt(next.price), 0);
            setProductDetails(bagDetails)
        })
    }, [userid])
    const createOrder = (address) => {
        return new Promise((resolve, reject) => {
            db.collection('orders').add({
                userid,
                orderedDate: date.toDateString(date),
                address,
                totalPrice: productDetails.totalPrice,
                productDetails,
                paymentStatus: "pending"
            }).then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                resolve(docRef.id)
            }).catch((error) => {
                console.error("Error adding document: ", error);
            });
        })
    }
    const razorpay = (orderId) => {
        return new Promise((resolve, reject) => {
            var options = {
                key: "rzp_test_W0uqgk1VTLITu8",
                key_secret: "POeBAM2O0IcZmWXlXbQpQYHm",
                amount: productDetails.totalPrice * 100,
                currency: "INR",
                name: "Apple store",
                description: "For testing purpose",
                handler: function (response) {
                    resolve(response.razorpay_payment_id)
                },
                prefill: {
                    name: userDetails.firstName,
                    email: userDetails.email,
                    contact: phoneNumber
                },
                notes: {
                    address: "Razorpay Corporate office"
                },
                theme: {
                    color: "black"
                }
            };
            var pay = new window.Razorpay(options);
            pay.open();
        })
    }
    const changePaymentStatus = (orderId) => {
        return new Promise((resolve, reject) => {
            db.collection('orders').doc(orderId).update({
                paymentStatus: "paid"
            }).then(() => {
                resolve(true)
            })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });

        })
    }
    const removeProductsFromBag=()=>{
        console.log(productDetails[0].id);
        return new Promise((resolve,reject)=>{
            db.collection("bag").doc(productDetails[0].id).delete().then(() => {
                resolve(true)
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
        })
    }

    const doPayment = async () => {
        if (defaultAddress) {
            if (userDetails.address.hasOwnProperty('defaultAddress')) {
                if (phoneNumber) {
                    const orderId = await createOrder(userDetails.address.defaultAddress)
                    const paymentId = await razorpay(orderId);
                    const paymentStatus = await changePaymentStatus(orderId)
                    const removeProducts = await removeProductsFromBag();
                    if (paymentStatus && removeProducts) {
                        navigate('/')
                    }

                } else {
                    alert("Fill all fields")
                }
            } else {
                setDefaultAddress(false);
                window.scrollTo(0, 0)
            }
        } else if (newAddressDiv) {
            if (firstName && lastName && address1 && pincode && cityState && phoneNumber) {
                const orderId = await createOrder({ firstName, lastName, address1, address2, landmark, pincode, cityState, country: "India" });
                const paymentId = await razorpay(orderId);
                const paymentStatus = await changePaymentStatus(orderId)
                const removeProducts = await removeProductsFromBag();
                if (paymentStatus && removeProducts) {
                    navigate('/')
                }
            } else {
                alert("Fill all fields")
            }
        }
    }
    const addDefaultAddress = () => {
        db.collection('users').doc(userDetails.userdocid).update({
            "address": {
                "defaultAddress": {
                    firstName,
                    lastName,
                    address1,
                    address2,
                    landmark,
                    pincode,
                    cityState,
                    country: "India"
                }
            }

        })
            .then(() => {
                console.log("Document successfully written!");
                window.location.reload(false);
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });

    }

    return (
        <Container>
            {/* <!-- ribborn --> */}
            <section className="bg-white ribbon">
                <div className="bg-white container">
                    <div style={{ borderBottom: "1px solid #d2d2d7" }} className="row ">
                        <div className="pt-3 bg-white ribbon-covid-19 col-md-4 col-4">
                            <p className="text-center shipping-ribbon-text">Checkout </p>
                        </div>
                        <div className="pt-3 bg-white ribbon-covid-19 col-md-8 col-8">

                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="bag-header">
                                <div className="mt-5 rs-bag-header">
                                    <h2 className="shipping-header-text checkout-header-text imac-header-text ">Where should we send
                                        your order?</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="form">
                <form action="" id="shipping-details" method="POST">
                    <section className="mt-5">
                        <div className="container">
                            <div className="shipping-address-container">
                                <h3 className="shipping-address-text">Select an address:</h3>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label className="mt-3 poduct-container col-md-12 p-0 ">
                                        <input onClick={() => { setNewAddressDiv(false); setDefaultAddress(true); }} type="radio" onclick="hideAddressForm()" className="radio-btn" id="address-option"
                                            name="addressOption" value="defaultAddress" required />
                                        <div className="device-model-select product-model">
                                            {userDetails.address ?
                                                <div className="device-radio">
                                                    <span className="device-price-right">Default</span>
                                                    <span className="model-title">{userDetails.address.defaultAddress.firstName} {userDetails.address.defaultAddress.lastName} </span>
                                                    <span className="screen-size pb-3 ">{userDetails.address.defaultAddress.address1} {userDetails.address.defaultAddress.cityState} {userDetails.address.defaultAddress.country} </span>

                                                </div>
                                                :
                                                <div className="device-radio">
                                                    <span className="device-price-right">Default</span>
                                                    <span className="model-title">No Address </span>

                                                </div>
                                            }
                                        </div>
                                    </label>



                                    {/* <div className="edit-address">
                                      <a onClick={() => {setNewAddressDiv(false); setAddressDiv(true); }} style={{fontSize: "15px" ,color: "red" }} 
                                          className="content-align" >Edit this address</a>
                                  </div> */}

                                    <div onClick={() => { setNewAddressDiv(false); setAddressDiv(true); }} className="edit-address">
                                        <a style={{ fontSize: " 15px", color: " #267af7" }}
                                            className={defaultAddress ? "content-align" : "content-align text-danger"} href="#">Edit this address</a>
                                    </div>



                                </div>
                                <div className="col-md-6">

                                </div>
                            </div>

                            <div className="row">
                                <di className="col-md-6">
                                    <label onClick={() => { setNewAddressDiv(true); setDefaultAddress(false) }} className="mt-3 poduct-container col-md-12 p-0 ">
                                        <input type="radio" onclick="showAddressForm()" className="radio-btn" id="addressOption"
                                            name="addressOption" value="newAddress" required />
                                        <div className="device-model-select  new-address product-model">
                                            <div className="device-radio p-2">
                                                <span className="model-title">Use a new address</span>
                                            </div>
                                        </div>
                                    </label>
                                </di>
                                <div className="col-md-6">

                                </div>
                            </div>

                            <div id="newAddress" className={newAddressDiv ? "row d-block" : "row d-none "}>
                                <div className="col-md-6">
                                    <div className="email">
                                        <input
                                            onChange={(e) => {
                                                setFirstName(e.target.value);
                                            }}
                                            value={firstName}
                                            style={{ borderRadius: "10px" }} type="text"
                                            className="mt-3 form-input-padding form-control" id="firstName" name="firstName"
                                            placeholder="First Name" required />
                                    </div>
                                    <div className="number ">
                                        <input
                                            onChange={(e) => {
                                                setLastName(e.target.value);
                                            }}
                                            value={lastName}
                                            style={{ borderRadius: "10px" }} type="text" className="mt-3 form-input-padding form-control"
                                            id="lastName" name="lastName" placeholder="Last Name" required />
                                    </div>
                                    <div className="address1 ">
                                        <input
                                            onChange={(e) => {
                                                setAddress1(e.target.value);
                                            }}
                                            value={address1}
                                            style={{ borderRadius: "10px" }} type="text" className="mt-3 form-input-padding form-control"
                                            id="street" name="street" placeholder="Address Line 1"
                                            autocomplete="address-level1" required />
                                    </div>
                                    <div className="address2 ">
                                        <input
                                            onChange={(e) => {
                                                setAddress2(e.target.value);
                                            }}
                                            value={address2}
                                            style={{ borderRadius: "10px" }} type="text" className="mt-3 form-input-padding form-control"
                                            id="street2" name="street2" placeholder="Address Line 2 (Optional)"
                                            autocomplete="address-level2" />
                                    </div>
                                    <div className="landmark ">
                                        <input
                                            onChange={(e) => {
                                                setLandMark(e.target.value);
                                            }}
                                            value={landmark}
                                            style={{ borderRadius: "10px" }} type="text" className="mt-3 form-input-padding form-control"
                                            id="street3" name="street3" placeholder="Landmark (Optional)"
                                            autocomplete="address-level3" />
                                    </div>
                                    <div className="postalCode ">
                                        <input
                                            onChange={(e) => {
                                                setPinCode(e.target.value);
                                            }}
                                            value={pincode}
                                            style={{ borderRadius: "10px" }} type="text" className="mt-3 form-input-padding form-control"
                                            id="postalCode" name="postalCode" placeholder="PIN Code" autocomplete
                                            required />
                                    </div>
                                    <div className="cityState ">
                                        <input
                                            onChange={(e) => {
                                                setCityState(e.target.value);
                                            }}
                                            value={cityState}
                                            style={{ borderRadius: "10px" }} type="text" className="mt-3 form-input-padding form-control"
                                            id="cityState" name="state" placeholder="City, State" required />
                                    </div>
                                    <div className="country ">
                                        <input style={{ borderRadius: "10px" }} type="text" className="mt-3 form-input-padding form-control"
                                            id="country" name="country" placeholder="Country" value="India" readonly required />
                                    </div>

                                </div>
                                <div className="col-md-6">

                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="mt-5">
                        <div className="container">
                            <div className="shipping-address-container">
                                <h3 className="shipping-address-text">What’s your contact information?</h3>
                            </div>

                            <div style={{ borderBottom: "1px solid #d2d2d7" }} className="row">
                                <div className="col-md-6 mb-5">
                                    <div className="email">
                                        <input style={{ borderRadius: "10px" }} type="email"
                                            className="mt-3 form-input-padding form-control" id="email" name="email"
                                            placeholder="Email Address" value={userDetails.email} required />
                                    </div>
                                    <div className="number ">
                                        <input
                                            onChange={(e) => {
                                                setPhoneNumber(e.target.value);
                                            }}
                                            value={phoneNumber}
                                            style={{ borderRadius: "10px" }} type="text" className="mt-3 form-input-padding form-control"
                                            id="number" name="number" placeholder="India Mobile Number"
                                            required />
                                    </div>
                                    {/* <input type="text" name="userId" value="{{user._id}}" hidden> */}
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="message ml-3 mt-3">
                                        <h5 className="shipping-message">For a successful delivery, make sure your phone number is
                                            correct:</h5>
                                        <ul>
                                            <li style={{ fontSize: "13px" }}>The courier will send a One-Time Password (OTP) to this number.</li>
                                            <li style={{ fontSize: "13px" }}>We’ll email you a receipt and send order updates to your mobile phone via SMS or iMessage.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-md-6">
                                    <div className="bottem-checkout-btn-container ">
                                        <a
                                            onClick={doPayment}
                                            className="text-white col-md-12 btn btn-primary bottem-shipping-btn checkout-btn mt-4 ">Continue
                                            to
                                            Payment</a>
                                    </div>
                                </div>
                                <div className="col-md-6">

                                </div>
                            </div>
                        </div>
                    </section>
                </form>
            </div>

            {/* <!-- default address Modal--> */}
            <div className={addressDiv ? "modal fade modal-show" : "modal fade"} id="defaultAddressModal" tabIndex={"-1"} role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div style={{ marginTop: "88px" }} className="text-center modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 style={{ color: "black", }} className="modal-title text-black " id="exampleModalLabel">Edit Address</h2>
                            <button onClick={() => { setAddressDiv(false) }} className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <form >
                            <div className="col-md-12 p-3">
                                <div className="email">
                                    <input
                                        onChange={(e) => {
                                            setFirstName(e.target.value);
                                        }}
                                        value={firstName}
                                        style={{ borderRadius: "10px" }} type="text" className="mt-3 form-input-padding form-control"
                                        id="firstName" name="firstName" placeholder="First Name" required />
                                </div>
                                <div className="number ">
                                    <input
                                        onChange={(e) => {
                                            setLastName(e.target.value);
                                        }}
                                        value={lastName}
                                        style={{ borderRadius: "10px" }} type="text" className="mt-3 form-input-padding form-control"
                                        id="lastName" name="lastName" placeholder="Last Name" required />
                                </div>
                                <div className="address1 ">
                                    <input
                                        onChange={(e) => {
                                            setAddress1(e.target.value);
                                        }}
                                        value={address1}
                                        style={{ borderRadius: "10px" }} type="text" className="mt-3 form-input-padding form-control"
                                        id="street" name="street" placeholder="Address Line 1" autoComplete="address-level1"
                                        required />
                                </div>
                                <div className="address2 ">
                                    <input onChange={(e) => {
                                        setAddress2(e.target.value)
                                    }}
                                        value={address2}
                                        style={{ borderRadius: "10px" }} type="text" className="mt-3 form-input-padding form-control"
                                        id="street2" name="street2" placeholder="Address Line 2 (Optional)"
                                        autoComplete="address-level2" />
                                </div>
                                <div className="landmark ">
                                    <input
                                        onChange={(e) => {
                                            setLandMark(e.target.value);
                                        }}
                                        value={landmark}
                                        style={{ borderRadius: "10px" }} type="text" className="mt-3 form-input-padding form-control"
                                        id="street3" name="street3" placeholder="Landmark (Optional)"
                                        autocomplete="address-level3" />
                                </div>
                                <div className="postalCode ">
                                    <input
                                        onChange={(e) => {
                                            setPinCode(e.target.value);
                                        }}
                                        value={pincode}
                                        style={{ borderRadius: "10px" }} type="text" className="mt-3 form-input-padding form-control"
                                        id="postalCode" name="postalCode" placeholder="PIN Code" autocomplete required />
                                </div>
                                <div className="cityState ">
                                    <input
                                        onChange={(e) => {
                                            setCityState(e.target.value);
                                        }}
                                        value={cityState}
                                        style={{ borderRadius: "10px" }} type="text" className="mt-3 form-input-padding form-control"
                                        id="cityState" name="state" placeholder="City, State" required />
                                </div>
                                <div className="country ">
                                    <input style={{ borderRadius: "10px" }} type="text" className="mt-3 form-input-padding form-control"
                                        id="country" name="country" placeholder="Country" value="India" readonly required />
                                </div>
                                {/* <input type="text" name="userId" value="{{user._id}}" hidden> */}
                            </div>

                            <div className="bottem-checkout-btn-container col-md-12 p-3  ">
                                <a
                                    onClick={addDefaultAddress}
                                    type="submit" id="submit"
                                    className="text-white col-md-12 btn btn-primary bottem-shipping-btn checkout-btn mb-4  ">Save
                                    Changes</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </Container>
    )
}
const Container = styled.div`
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