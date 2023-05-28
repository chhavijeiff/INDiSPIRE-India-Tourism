// Auto Slide Images
const slideImages = document.querySelectorAll('.slideimg');
let count = 0
setInterval(() => {
    document.querySelector(".active").style.animation = "next1 1s ease-in forwards";
    document.querySelector(".active").classList.remove("active");
    count = (count+1)%(slideImages.length);
    slideImages[count].setAttribute("class", "active");
    document.querySelector(".active").style.animation = "next2 1s ease-out forwards";
}, 3000);

// autoslide cards
slideCards = document.querySelectorAll(".card")
setInterval(() => {
    document.querySelector(".activecard").classList.remove("activecard")
    slideCards[Math.floor(Math.random()*(slideCards.length))].classList.add("activecard")
}, 3000);

const navli = document.querySelectorAll(".menu")