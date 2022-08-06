import React from 'react'

function Bag() {
    return (
        <div>
            <section className="bg-white ribbon">
                <div className="bg-white container">
                    <div className="row ">
                        <div className="pt-3 bg-white ribbon-covid-19 col-md-12">
                            <p className="text-center ribbon-text">Free contactless delivery. Some deliveries may be affected by local
                                Covid-19 restrictions. See checkout for details. </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 " style={{ borderBottom: "1px solid #d2d2d7" }}>
                            <div className="bag-header mb-5">

                                <div className="m-5 rs-bag-header">
                                    <h2 className="checkout-header-text imac-header-text text-center ">Your bag total is ₹ 23211221</h2>
                                </div>
                                <div className=" m-4 text-center bag-header-btn">
                                    <a style={{ width:"260px",backgroundColor: "#0071e3", borderColor:"#0071e3"}} href="/shipping" className="text-white btn btn-primary checkout-btn">Check Out</a>
                                </div>

                                <div className="m-5 rs-bag-header">
                                    <h2 className="checkout-header-text imac-header-text bag-empty-text text-center ">Your bag is empty.</h2>
                                </div>
                                <div className=" m-4 text-center bag-header-btn">
                                    <a style={{ backgroundColor: "#ebebeb !important", borderRadius: "12px" }} className="text-black p-3 btn btn-light checkout-btn">Continue Shopping</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-4">
                <div className="container">

                    <div style={{ borderBottom: "1px solid #d2d2d7" }} className="pb-5 row">
                        <div className="col-md-4 mt-3 ">
                            <img className="checkout-image" src="/device-image/{{this.productDetails._id}}.jpg" alt="" />
                        </div>
                        <div className="col-md-8 mt-3 ">
                            <div style={{ borderBottom: "1px solid #d2d2d7" }} className="row pb-4">
                                <div className="col-md-6 ">
                                    <div className="checkout-product-name-div mt-3">
                                        <h4 className="checkout-product-name  ">iphone 13 -
                                            color</h4>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-12 checkout-price-container mt-3">
                                            <h4 className="text-end checkout-price">₹ 90000</h4>
                                        </div>
                                        <div className="col-md-12 text-end checkout-remove-container">
                                            <a className="mt-2 checkout-remove" href="/remove-bag-item/{{this.product.deviceId}}">Remove</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row ">
                                <div className="col-md-12">
                                    <div className="checkout-product-name-div mt-3">
                                        <h5 className="checkout-pincode-text ">Find out how soon you can get this item. <a href="">Enter
                                            pin code <i className="fas fa-chevron-down"></i></a></h5>
                                    </div>
                                    <div className="shipping-text-container">
                                        <h2 className="item-shipping-detail-line"><i style={{ fontSize: " 17px", color: "black" }}
                                            className="bi bi-box"></i> <span style={{ fontSize: "13px" }}>Ships in 3-5 business
                                                days.</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="container mt-5 ">
                    <div className="row">
                        <div className="col-md-4">

                        </div>

                        <div className=" col-md-8 col-12">
                            <div style={{ borderBottom: "1px solid #d2d2d7" }} className="pb-3 row">
                                <div className="col-md-6 col-6">
                                    <div className="col-md-3 col-3">
                                        <div className="shipping">
                                            <h4 style={{ fontSize: " 17px" }}>Subtotal</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-3">
                                        <div className="shipping">
                                            <h4 style={{ fontSize: " 17px" }}>Shipping</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-6">
                                    <div style={{ float: "right" }} className="col-md-12">
                                        <div style={{ float: "right" }} className="shipping">
                                            <h4 style={{ color: "black", fontSize: " 17px" }}>₹ 30000</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-12">
                                        <div className="shipping">
                                            <h4 style={{ float: "right", color: "black", fontSize: "17px" }}>FREE</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pb-3 mt-4 row">
                                <div className="col-md-6 col-6">
                                    <div className="col-md-3 col-3">
                                        <div className="shipping">
                                            <h4 className="checkout-product-name">Total</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-6">
                                    <div style={{ float: "right" }} className="col-md-12">
                                        <div style={{ float: "right" }} className="shipping">
                                            <h4 className="checkout-price">₹ 324324</h4>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='col-md-12'>
                                    <div className="bottem-checkout-btn-container ">
                                        <a style={{ width: "260px", backgroundColor: "#0071e3", borderColor: "#0071e3" }} href="/shipping" className="btn btn-primary bottem-checkout-btn checkout-btn mt-4 ">Check Out</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Bag