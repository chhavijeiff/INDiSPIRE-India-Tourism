const slideImages = document.querySelectorAll('img');
let count = 0
setInterval(() => {
    document.querySelector(".active").style.animation = "next1 1s ease-in forwards";
    document.querySelector(".active").classList.remove("active");
    slideImages[count].setAttribute("class", "active");
    document.querySelector(".active").style.animation = "next2 1s ease-in forwards";
    count = (count+1)%8;
}, 3000);