import React from 'react'

function Favorites() {
    return (
        <div>
            <section style={{ borderBottom: " 1px solid #d2d2d7", marginTop: "60px" }} class="bg-white">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 ">
                            <div class="bag-header favorites-margin-sm ">
                                <div class="m-5 p-3 rs-bag-header">
                                    <h2 style={{ fontSize: "42px", lineHeight: "1.1", fontWeight: " 600" }}
                                        class="checkout-header-text imac-header-text bag-empty-text text-center ">Favourites</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="container">
                    <div class="row">
                        <div class="mt-2 favorites-device-container col-md-6 col-12 ">
                            <a href="/buy-product/{{this.products._id}}">
                                <div class="text-center row favorites-row-sm ">
                                    <div class="text-dark favorites-header col-md-12 col-12 mt-2">
                                        <h4 style={{color:"black"}} class=" favorites-text-color favorites-text-sm  favorites-device-name">
                                            iPhone </h4>
                                        <span
                                            class="favorites-text-color favorites-text-sm text-centerrs-favorites-item-price">₹ 50000</span>
                                        {/* <div class="favorites-text-sm favorites-show-button">
                                            <a id="rs-favorites-item-toggle{{this.products._id}}" class="text-primary" onclick="showMore('{{this.products._id}}')">Show more</a>
                                        </div> */}
                                    </div>
                                    <div class="mt-4 col-md-12 col-12 favorites-product-image-container">
                                        <a href="/buy-product/{{this.products._id}}"><img class="favorites-product-image"
                                            src="https://firebasestorage.googleapis.com/v0/b/applestore-80c22.appspot.com/o/product-image%2Fcompare_iphone_13_pro__bpn3x8hs692a_large.jpg?alt=media&token=e79aeb08-e990-4e44-b2e9-e3abb9a23730" alt="" /></a>
                                    </div>
                                </div>
                            </a>

                            <div id="continue-btn-container{{this.products._id}}" class="col-md-12 continue-btn-container mt-5">
                                <a style={{ borderRadius: "20px", width: " 100%" }} onclick="removeFromFavorite('{{this.products._id}}')"
                                    class="btn btn-primary text-white checkout-btn">Remove</a>
                            </div>
                        </div>
                        

                        
                    </div>
                </div>
            </section >
        </div>
    )
}

export default Favorites