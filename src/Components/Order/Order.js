import React, { useEffect, useState } from 'react'
import { selectuserId } from '../../features/user/userSlice';
import { useSelector } from 'react-redux';
import { db } from '../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';

function Order() {
    const userid = useSelector(selectuserId);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        db.collection('orders').where("userid", "==", userid).get().then((snapshort) => {
            const allOrders = snapshort.docs.map((product) => {
                return (
                    {
                        ...product.data(),
                        id: product.id
                    }
                )

            })
            console.log(allOrders);
            setOrders(allOrders);
        })
    }, [userid])
    return (
        <div>
            {/* <!-- ribborn --> */}
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
                <div className="text-center container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="bag-header mb-5">
                                <div className="m-5 rs-bag-header">
                                    <h2 className="order-header-text checkout-header-text imac-header-text  ">Products you’ve ordered.
                                    </h2>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="mt-4">
                {orders[0] ? <div className="container">
                    {
                        orders.map((order) => {
                            return (
                                <div>
                                    {
                                        order.productDetails.map((product) => {
                                            return (
                                                <div style={{ borderBottom: "1px solid #d2d2d7" }} className="pb-5 row">
                                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className="col-md-4 mt-3 ">
                                                        <img className="checkout-image" src={product.productDetails.productImage} alt="" />
                                                    </div>

                                                    <div className="col-md-8 mt-3 ">
                                                        <div className="row pb-4">
                                                            <div className="col-md-6 ">
                                                                <div className="checkout-product-name-div mt-3">
                                                                    <h3 className="checkout-product-name  ">{product.productDetails.productName} -
                                                                        {product.color}</h3>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="row">
                                                                    <div className="col-md-12 checkout-price-container mt-3">
                                                                        <h3 className=" checkout-price">₹ {product.price}</h3>
                                                                    </div>
                                                                    <div className="col-md-12 checkout-price-container mt-3">
                                                                        <h6 className=" text-dark order-text checkout-price">Order Number: <span
                                                                            style={{ fontSize: "14px" }} className="text-uppercase text-dark order-text">{order.id}</span> </h6>
                                                                    </div>
                                                                    <div className="col-md-12 checkout-remove-container">
                                                                        <h6 className=" order-text text-dark checkout-price">Order Placed: {order.orderedDate}</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row ">
                                                            <div className="text-center col-md-12 p-0 m-0">
                                                                {/* {{!-- < div className="checkout-product-name-div mt-3">
                                    <h3 className="checkout-pincode-text ">Find out how soon you can get this item. <a href="">Enter
                                        pin code <i className="fas fa-chevron-down"></i></a></h3>
                                </div>
                                <div className="shipping-text-container">
                                    <h2 className="item-shipping-detail-line"><i style="font-size: 17px; color: black;"
                                        className="bi bi-box"></i> <span style="font-size: 13px;">Ships in 3-5 business
                                            days.</span></h2>
                                </div> --}} */}

                                                                {order.orderStatus == 1 ?
                                                                    <div style={{ height: "5px" }} className="progress mb-2">
                                                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: "8%" }}
                                                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                    : ""
                                                                }

                                                                {order.orderStatus == 2 ?
                                                                    <div style={{ height: "5px" }} className="progress mb-2">
                                                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: "50%" }}
                                                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                    : ""
                                                                }

                                                                {order.orderStatus == 3 ?
                                                                    <div style={{ height: "5px" }} className="progress mb-2">
                                                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: "100%" }}
                                                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                    : ""
                                                                }

                                                                {order.orderStatus == 0 ?
                                                                    <div style={{ height: "5px" }} className="progress mb-2">
                                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: "100%" }}
                                                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                    : ""}



                                                                {order.orderStatus == 1 ? <div className="text-center">
                                                                    <li style={{ float: "left" }} className="order-status-point ">Order Placed</li>
                                                                </div>
                                                                    : ""
                                                                }

                                                                {order.orderStatus == 2 ? <div className="text-center">
                                                                    <li style={{ float: "left" }} className="order-status-point ">Order Placed</li>
                                                                    <li className="  order-status-point mr-4 ml-4">Shipped</li>
                                                                </div>
                                                                    : ""
                                                                }

                                                                {order.orderStatus == 0 ?
                                                                    <div className="text-center">
                                                                        <li className="   order-status-point mr-4 ml-4">Canceled</li>
                                                                    </div>
                                                                    : ""}

                                                                {order.orderStatus == 3 ? <div className="text-center">
                                                                    <li style={{ float: "left" }} className="order-status-point ">Order Placed</li>
                                                                    <li className="  order-status-point mr-4 ml-4">Shipped</li>
                                                                    <li style={{ float: "right" }} className="order-status-point  ml-4">Delivered</li>
                                                                </div>
                                                                    : ""}

                                                                {/* <div className="text-center">
                                                                    <li style={{ float: "left" }} className="order-status-point text-danger ">Order not placed , Payment pending</li>
                                                                    <a style={{ float: "right" }} onclick="payPendingPayment('{{this._id}}')" className="order-status-point btn btn-primary text-white  ml-4">Pay</a>
                                                                </div> */}


                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }

                </div>
                :
                <div className='text-center'>
                    <h4>No Orders</h4>
                </div>
                }
            </section >

        </div>
    )
}

export default Order