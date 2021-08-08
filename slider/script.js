const sliderContainer = document.querySelector(".slider-container");
const slider = document.querySelector(".right-slide");

const slidesLength = slider.querySelectorAll("div").length;

const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

prevButton.addEventListener("click", () => changeSlide("prev"));
nextButton.addEventListener("click", () => changeSlide("next"));

let activeSlideIndex = 0;

const changeSlide = (dir) => {
  const sliderHeight = sliderContainer.clientHeight;
  console.log(activeSlideIndex, dir);

  if (dir === "prev") {
    if (activeSlideIndex !== 0) {
      activeSlideIndex--;
    }

    slider.style.transform = `translateY(-${
      activeSlideIndex * sliderHeight
    }px)`;
  } else if (dir === "next") {
    if (activeSlideIndex < slidesLength - 1) {
      activeSlideIndex++;
    }
    console.log(activeSlideIndex, dir);

    slider.style.transform = `translateY(-${
      activeSlideIndex * sliderHeight
    }px)`;
  }
};
