import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Ribborn from '../Ribborn/Ribborn';
import { db } from '../Firebase/Firebase';
import BeatLoader from "react-spinners/BeatLoader";
import { Link } from 'react-router-dom';

function Iphone() {
    const [phones, setphones] = useState([]);

    useEffect(() => {
        db.collection('products').get().then((snapshort) => {
            const allPhones = snapshort.docs.map((product) => {
                if (product.data().category == "phone") {
                    return (
                        {
                            ...product.data(),
                            id: product.id

                        }
                    )
                }
            })
            setphones(allPhones)
        })
    }, [])

    return (
        <Container>
            <Ribborn />

            {/* <!-- iphone12,12mini banner --> */}
            <section style={{ backgroundColor: "#f2f2f2" }} class="pt-5">
                <div style={{ width: "100%" }} class="row">
                    <div class="pt-2 col-md-12">
                        <div class="text-center text-light text">
                            <h3 class="iphone-sub-text imac-sub-text text-dark"> iPhone 12 and iPhone 12 mini</h3>
                            <h2 class="iphone-header-text imac-header-text ">Blast past fast.</h2>
                            <h4 class="imac-price">From ₹69900* before trade‑in</h4>
                            <p><a href="buy-product.html" class="buy-btn btn btn-primary">Buy</a> </p>
                            <div class="mt-1 banner-links">
                                <a className='text-decoration-none' href="iphone-12.html">Learn more <i style={{ fontSize: "13px" }} class="mr-2 fa-solid fa-angle-right"></i></a>
                            </div>
                            <div class="col-md-12 banner-image-box imac-banner">
                                <img id="imacImage" class="iphone-12 imac-image" src="/images/iphone_12__d51ddqcc7oqe_large.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- iphone 12 pro banner --> */}
            <section style={{ backgroundColor: "#000000" }} class="pt-5">
                <div style={{ width: "100%" }} class="row">
                    <div class="pt-2 col-md-12">
                        <div class="text-center text-light text">
                            <h3 class="imac-sub-text text-white">iPhone 12 Pro and iPhone 12 Pro Max</h3>
                            <h2 class="imac-header-text text-white ">It’s a leap year.</h2>
                            <h4 class="imac-price text-white">From ₹119900* before trade‑in</h4>
                            <p><a href="buy-product.html" class="buy-btn btn mt-3 btn-primary">Buy</a> </p>
                            <div class="mt-1 banner-links">
                                <a className='text-decoration-none' href="iphone-12.html">Learn more<i style={{ fontSize: "13px" }} class="mr-2 fa-solid fa-angle-right"></i></a>
                            </div>
                            <div class="p-5 banner-image-box imac-banner">
                                <img id="iphone12proImage" class="iphone-12-pro imac-image" src="/images/iphone_12_pro__f7wokw1n4lm6_large.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- product listing trigger --> */}
            <section style={{ backgroundColor: "#fafafa" }}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 product-listing">
                            <div class="heading text-center ">
                                <h2 class="typography-headline">Which iPhone is right for you?</h2>
                                <div style={{ fontSize: "19px" }} class="m-4 banner-links text-center  ">
                                    <a href="">Compare all iPhone models   <i style={{ fontSize: "13px" }} class="mr-2 fa-solid fa-angle-right"></i></a>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "end" }} id="iphones" class="row mt-3">
                        {
                            phones[0] ?
                                phones.map((phone, key) => {
                                    return (
                                        <div key={key} class="col-md-3 m-3 col-4 p-0 ">
                                            <div class="product-image-outer text-center">
                                                <img class="product-image image-compare-iphone-12-pro" src={phone.productImage} />
                                                <div class="device-title ">
                                                    <h3 class="device-name">{phone.productName}</h3>
                                                    <p class="device-price-spec  ">From ₹{phone.productPrice}*</p>
                                                    <img class="device-colors" src={phone.allColorImage}
                                                        alt="" />
                                                    <div class="product-buy">
                                                        <Link to={'/buy-product/' + phone.id}>
                                                            <a class="device-buy-btn text-white  btn btn-primary">Buy </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="mt-5 device-details">
                                                        <h4 style={{ fontSize: "17px" }} class="device-details-head">{phone.display}</h4>
                                                        <p class="device-details-text">all-screen OLED display1</p>
                                                    </div>
                                                    <div class="device-memory mt-5">
                                                        <img src="/images/icon_5g__ew2qs88wie4i_large.png" alt="" />
                                                        <p class="mt-2 device-details-text">5G capable</p>
                                                    </div>
                                                    <div class="device-chip mt-5 ">
                                                        <img src={phone.processorImage} alt="" />
                                                        <p class="mt-2 device-details-text">{phone.processor}</p>
                                                        <p class="device-subtext">Fastest chip in a smartphone</p>
                                                    </div>
                                                    <div class="mt-5 device-details">
                                                        <h4 class="device-details-head">{phone.storageOptions[0].storage}</h4>
                                                        <p class="device-details-text">Maximum configurable storage2</p>
                                                    </div>
                                                    <div class="device-memory mt-5">
                                                        <img src="/images/icon_triple_camera__e6vgz42wpwom_large.png" alt="" />
                                                        <p class="mt-2 device-details-text">Pro camera system</p>
                                                        <p class="device-subtext">Ultra Wide, Wide, Telephoto

                                                        </p>
                                                    </div>
                                                    <div class="device-chip mt-5 ">
                                                        <img src="/images/icon_lidar__f6bhejsvbdqy_large.png" alt="" />
                                                        <p class="mt-2 device-details-text">LiDAR Scanner</p>
                                                        <p class="device-subtext">For Night mode portraits and next‑level AR </p>
                                                    </div>
                                                    <div class="device-memory mt-5">
                                                        <img src="/images/icon_magsafe__ibh1kzdigzqm_large.png" alt="" />
                                                        <p class="mt-2 device-details-text">Compatible with</p>
                                                        <p class="device-subtext">MagSafe accessories </p>
                                                    </div>
                                                    <div class="product-link">
                                                        <Link to={'/buy-product/' + phone.id}>
                                                            <a style={{ fontSize: "14px", letterSpacing: "0.02em" }} > Learn more <span
                                                                style={{ fontSize: "9px" }} class="fas fa-chevron-right"></span></a>
                                                        </Link>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                <span style={{ textAlign: "center" }}>
                                    <BeatLoader color={"#0066cc"} loading={phones} size={17} />
                                </span>
                        }

                    </div>
                </div>
            </section>

        </Container>
    )
}
const Container = styled.div`


@media (max-width:734px){
.iphone-12{
    content:url("/images/iphone_12__d51ddqcc7oqe_small_2x.jpg");
}
#iphone12proImage{
     content:url("/images/iphone_12_pro__f7wokw1n4lm6_small_2x.jpg")
}
`
export default Iphone