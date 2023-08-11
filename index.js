
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

//! Learn more about this
// when someone clicks the hamburger button
navToggle.addEventListener("click", () => {

    const visility = nav.getAttribute("data-visible");

    if (visility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded",true); // if the nav is closed, open it
    }else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded",false); // if the nav is open, close it
    }

    console.log(navToggle.getAttribute("aria-expanded"));

})
