/* ---------------------- code for cards ---------------------------------->>*/

const coupon1 = document.getElementById("coupon1")
const couponText1 = document.getElementById("coupon-text1")

function getText1(){
    coupon1.classList.add('animate-img')
    couponText1.classList.add('animate-txt')
}
 
function goNormal1(){
    coupon1.classList.remove('animate-img')
    couponText1.classList.remove('animate-txt')
}

const coupon2 = document.getElementById("coupon2")
const couponText2 = document.getElementById("coupon-text2")

function getText2(){
    coupon2.classList.add('animate-img')
    couponText2.classList.add('animate-txt')
}
 
function goNormal2(){
    coupon2.classList.remove('animate-img')
    couponText2.classList.remove('animate-txt')
}

/* ------------------------------------------------------------------------ */