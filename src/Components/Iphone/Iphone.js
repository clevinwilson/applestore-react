import React from 'react'
import styled from 'styled-components';
import Ribborn from '../Ribborn/Ribborn';

function Iphone() {
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
        </Container>
    )
}
const Container=styled.div`


@media (max-width:734px){
.iphone-12{
    content:url("/images/iphone_12__d51ddqcc7oqe_small_2x.jpg")
}
`
export default Iphone