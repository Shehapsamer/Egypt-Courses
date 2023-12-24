// /////////////////////
window.addEventListener("scroll", function () {
    let nav = document.querySelector(".navbar");
    nav.classList.toggle("fix", window.scrollY > 150);
}) 
//////////////////////////
window.addEventListener("scroll" , function () {
    let scrollUp = document.querySelector(".scroll_up");
    scrollUp.classList.toggle("scroll_transition", window.scrollY > 150);
    scrollUp.classList.toggle("show_scroll", window.scrollY > 200)
})
    let scrollUp = document.querySelector(".scroll_up");

scrollUp.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
})
//////////////////////////
// //////////
let Courses_open = document.getElementById("Courses_open")
let sidebar = document.getElementById("sidebar")
let Courses_close = document.getElementById("Courses_close")

Courses_open.addEventListener("click", function () {
    sidebar.classList.add("Show")
})
Courses_close.addEventListener("click", function () {
    sidebar.classList.remove("Show")
})

////////////////////////////
let cart_open_tool = document.getElementById("cart_open_tool");
let cart_sidbar = document.getElementById("cart_sidbar");
let close_cart = document.getElementById("close_cart");

cart_open_tool.addEventListener("click", function () {
    cart_sidbar.classList.add("Show2")
})

close_cart.addEventListener("click", function () {
    cart_sidbar.classList.remove("Show2")
})
// //////////////