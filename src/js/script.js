const template = function ({
  commentTitle,
  comment,
  profileSrc,
  userName,
  userLocation,
}) {
  return `    <div class="slider__slide" data-name='${userName}'>
  <div class="slider__slide--row">
    <div class="slider__slide--row__desing"></div>
    <div class="slider__slide--row__desing"></div>
  </div>
  <div class="slider__slide--row">
    <p class="slider__slide--row__comment">
      <span>${commentTitle}</span> <br />
      ${comment}
    </p>
  </div>
  <div class="slider__slide--row">
    <img
      class="slider__slide--row__profile"
      src="${profileSrc}"
      alt="profile"
    />
    <span class="slider__slide--row__info">
      <h1 class="slider__slide--row__username">${userName}</h1>
      <h3 class="slider__slide--row__location">${userLocation}</h3>
    </span>
  </div>
</div>`;
};

const comments = [
  {
    userName: "faryadi",
    userLocation: "iran, tehran",
    profileSrc: "src/images/testimonial-2.jpg",
    commentTitle: "in my opinion",
    comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
    odit fugiat id aut eos qui voluptatibus vel est, nesciunt magni
    consectetur saepe, voluptas delectus perspiciatis sit aliquid cumque
    nulla cupiditate!`,
  },
  {
    userName: "daryayee",
    userLocation: "iran, shahsavar",
    profileSrc: "src/images/testimonial-2.jpg",
    commentTitle: "ye",
    comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
    odit fugiat id aut eos qui voluptatibus vel est, nesciunt magni
    consectetur saepe, voluptas delectus perspiciatis sit aliquid cumque
    nulla cupiditate!`,
  },
  {
    userName: "mehrad",
    userLocation: "japon",
    profileSrc: "src/images/testimonial-2.jpg",
    commentTitle: "in my opinion",
    comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
    odit fugiat id aut eos qui voluptatibus vel est, nesciunt magni
    consectetur saepe, voluptas delectus perspiciatis sit aliquid cumque
    nulla cupiditate!`,
  },
];

const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let currentSlide = 0;

comments.forEach(slide => {
  const slideEl = template(slide);
  slider.insertAdjacentHTML("beforeend", slideEl);
});

const slides = document.querySelectorAll(".slider__slide");

const orderSlides = function () {
  slides.forEach((element, i) => {
    element.style.cssText = `transform: translateX(${
      (i - currentSlide) * 100
    }%)`;
  });
};

orderSlides();

const nextSlide = function () {
  currentSlide == slides.length - 1 ? (currentSlide = 0) : currentSlide++;
  orderSlides();
};

const prevSlide = function () {
  currentSlide = currentSlide == 0 ? slides.length - 1 : currentSlide - 1;
  orderSlides();
};

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

setInterval(nextSlide, 5000);
