function screenSize() {
    if (window.screen.width < 735) {

        document.getElementById("myImg").src = "images/hero_ipad_pro_non_avail__fcrsmhs4b7ma_small_2x.jpg";
        var image1 = document.getElementById("myImg")
        image1.style.objectFit = "cover";
        image1.style.width = '324px';
        image1.style.height = '365px';

        var image2 = document.getElementById("banner-two")
        image2.src = "images/iphone_12_updated__jepm2xpxncuy_small_2x.jpg";

        var image3 = document.getElementById("banner-three").src = "images/hero_imac__dqh65mwjj04m_small_2x.jpg";

    } else {
        document.getElementById("dropdown-content-sm").style.display = "none";
        var image4 = document.getElementById("myImg")
        image4.src = "images/index-banner.jpg";
        image4.style.objectFit = "cover";
        image4.style.width = '847px';
        image4.style.height = '394px';


        var image5 = document.getElementById("banner-two")
        image5.src = "images/iphone_12_updated__jepm2xpxncuy_large_2x.jpg";

        var image6 = document.getElementById("banner-three").src = "images/hero_imac__dqh65mwjj04m_large.jpg";

    }
}
if (window.screen.width < 735) {
    document.getElementById("myImg").src = "images/hero_ipad_pro_non_avail__fcrsmhs4b7ma_small_2x.jpg";
    var image7 = document.getElementById("myImg")
    image7.style.objectFit = "cover";
    image7.style.width = '324px';
    image7.style.height = '365px';

    var image8 = document.getElementById("banner-two")
    image8.src = "images/iphone_12_updated__jepm2xpxncuy_small_2x.jpg";

    var image9 = document.getElementById("banner-three").src = "images/hero_imac__dqh65mwjj04m_small_2x.jpg";

} else {
    var image10 = document.getElementById("myImg")
    document.getElementById("myImg").src = "images/index-banner.jpg";
    image10.style.objectFit = "cover";
    image10.style.width = '847px';
    image10.style.height = '394px';


    var image11 = document.getElementById("banner-two")
    image11.src = "images/iphone_12_updated__jepm2xpxncuy_large_2x.jpg";

    var image12 = document.getElementById("banner-three").src = "images/hero_imac__dqh65mwjj04m_large.jpg";

}

//  hamburger menu for small devices
function openNav() {
    closesmBag();
    document.getElementById("mySidenav").style.height = "100%";
    document.getElementById("closebtn").onclick = closeNav;
    document.getElementById('closebtn').innerHTML = "&times;"
    document.getElementById("mySidenav").style.opacity = "1.5";
    document.getElementById("mySidenav").style.backgroundColor = "black";

}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("closebtn").onclick = openNav;
    document.getElementById('closebtn').innerHTML = "="
    document.getElementById("mySidenav").style.opacity = "0.8";
}

// Shop and Learn
function moreItems() {
    var items = document.getElementById('list-1')
    items.style.display = 'block'
    var icon1 = document.getElementById('icon-1')
    icon1.style.transition = '0.41s'
    icon1.style.transform = 'rotate(46deg)'
    var icon2 = document.getElementById('column-1')
    icon2.onclick = listHide;

}

function listHide() {
    var item = document.getElementById('list-1')
    item.style.display = 'none'
    var icon3 = document.getElementById('icon-1')
    icon3.style.transition = '0.3s'
    icon3.style.transform = 'rotate(0deg)'
    var icon4 = document.getElementById('column-1')
    icon4.onclick = moreItems;
}

//Bag

function openBag() {
    document.getElementById('bag').onclick = closeBag;
    document.getElementById("navbar").style.opacity = "1.5";
    document.getElementById("dropdown-content").style.display = "block";
}
function closeBag() {
    document.getElementById('bag').onclick = openBag;
    document.getElementById("navbar").style.opacity = "0.8";
    document.getElementById("dropdown-content").style.display = "none";

}
//bag sm devices

function opensmBag() {
    closeNav();
    document.getElementById('sm-bag').onclick = closesmBag;
    document.getElementById("dropdown-content-sm").style.display = "block";
}
function closesmBag() {
    document.getElementById('sm-bag').onclick = opensmBag;
    document.getElementById("dropdown-content-sm").style.display = "none";

}



