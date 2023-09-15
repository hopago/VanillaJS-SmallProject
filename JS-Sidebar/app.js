const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll("#Img");
const bottom = document.querySelector(".bottom");

let slideNumber = 1;

const length = images.length;

for (let i = 0; i < length; i++) {
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);
};

const buttons = document.querySelectorAll(".button");

buttons[slideNumber - 1].style.backgroundColor = "white";

const resetBg = () => {
    buttons.forEach(button => button.style.backgroundColor = "transparent");
};

buttons.forEach((button,index) => {
    button.addEventListener("click", () => {
        resetBg();
        slider.style.transform = `translateX(-${index * 800})`;
        slideNumber = index + 1;
        button.style.backgroundColor = "white";
    })
});

const firstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
};

const lastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
    slideNumber = length;
};

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++;
};

const prevSlide = () => {
    slider.style.transform = `translateX(${(slideNumber - 2) * 800}px)`;
    slideNumber--;
}

const changeColor = () => {
    resetBg();
    buttons[slideNumber - 1].style.backgroundColor = "white";
}

right.addEventListener("click", () => {

    slideNumber < length ? nextSlide() : firstSlide();
    changeColor();

});

left.addEventListener("click", () => {

    slideNumber > 1 ?  prevSlide() : lastSlide();
    changeColor();

});