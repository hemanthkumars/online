let setAllParentClassZIndexToOne=function () {
    document.getElementsByClassName("backdropforleftdrawer")[0].style.zIndex=1;
    document.getElementsByClassName("backdrop")[0].style.zIndex=1;
    document.getElementsByClassName("fullmenupage")[0].style.zIndex=1;
    document.getElementsByClassName("homepagesegment")[0].style.zIndex=1;
    document.getElementsByClassName("orderlistpage")[0].style.zIndex=1;
    document.getElementsByClassName("orderdetailpage")[0].style.zIndex=1;
    document.getElementsByClassName("productdetailpage")[0].style.zIndex=1;
    document.getElementsByClassName("searchpage")[0].style.zIndex=1;
    document.getElementsByClassName("paymentpage")[0].style.zIndex=1;
    document.getElementsByClassName("leftdrawer")[0].style.zIndex=1;
    document.getElementsByClassName("cartpage")[0].style.zIndex=1;
    document.getElementsByClassName("choosetable")[0].style.zIndex=1;
    document.getElementsByClassName("backdrop2")[0].style.zIndex=1;
    document.getElementsByClassName("menubottomsheet")[0].style.zIndex=1;
}

let goToFullMenuPage=function () {
    setAllParentClassZIndexToOne();
    document.getElementsByClassName("fullmenupage")[0].style.zIndex=2;
}

let openLeftDrawer=function () {
    setAllParentClassZIndexToOne();
    document.getElementsByClassName("backdropforleftdrawer")[0].style.zIndex=2;
    document.getElementsByClassName("leftdrawer")[0].style.zIndex=3;
}

let closeLeftDrawer=function () {
    setAllParentClassZIndexToOne();
    document.getElementsByClassName("fullmenupage")[0].style.zIndex=2;
}

let goToHomePage=function () {
    setAllParentClassZIndexToOne();
    document.getElementsByClassName("homepagesegment")[0].style.zIndex=2;
}

let goToOrderListPage=function () {
    setAllParentClassZIndexToOne();
    document.getElementsByClassName("orderlistpage")[0].style.zIndex=2;
}

let goToProductDetailPage=function () {
    setAllParentClassZIndexToOne();
    document.getElementsByClassName("productdetailpage")[0].style.zIndex=2;
}

let goToCartPage=function () {
    setAllParentClassZIndexToOne();
    document.getElementsByClassName("cartpage")[0].style.zIndex=2;
}

let goToSearchPage=function () {
    setAllParentClassZIndexToOne();
    document.getElementsByClassName("searchpage")[0].style.zIndex=2;
    
}

let showMenu=function () {
    setAllParentClassZIndexToOne();
    document.getElementsByClassName("fullmenupage")[0].style.zIndex=2;
    document.getElementsByClassName("backdrop")[0].style.zIndex=3;
    document.getElementsByClassName("menubottomsheet")[0].style.zIndex=4;
}

let closeMenu=function () {
    setAllParentClassZIndexToOne();
    document.getElementsByClassName("fullmenupage")[0].style.zIndex=2;
}

let goToPaymentPage=function () {
    setAllParentClassZIndexToOne();
    document.getElementsByClassName("paymentpage")[0].style.zIndex=2;
}

let goToOrderDetailPage=function () {
    setAllParentClassZIndexToOne();
    document.getElementsByClassName("orderdetailpage")[0].style.zIndex=2;
}

