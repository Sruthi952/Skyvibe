const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnTcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click",(e) =>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnTcon.setAttribute("class",isOpen?"ri-close-line" : "ri-menu-line")
});


navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove("open");
    menuBtnTcon.setAttribute("class","ri-menu-line");
});
const scrollRevealOption={
    origin:"bottom",
    distance:"50px",
    duration:1000,
};

ScrollReveal().reveal(".header__image img",{
    ...scrollRevealOption,
    origin:"right",
});
ScrollReveal().reveal(".header__content p",{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".header__content h1",{
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".header__btns",{
    ...scrollRevealOption,
    delay:1500,
});

ScrollReveal().reveal(".destination__card",{
    ...scrollRevealOption,
    interval:500,
});

ScrollReveal().reveal(" .showcase__image img",{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".showcase__content h4",{
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".showcase__content p",{
    ...scrollRevealOption,
    delay:1500,
});
ScrollReveal().reveal(".showcase__btn ",{
    ...scrollRevealOption,
    delay:1500,
});
ScrollReveal().reveal(".banner__card",{
    ...scrollRevealOption,
    interval:500,
});

ScrollReveal().reveal(".discover__card",{
    ...scrollRevealOption,
    interval:500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
