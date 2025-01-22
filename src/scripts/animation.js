import Rellax from "rellax";

const initialTextAnimation = document.querySelector("#initialTextAnimation");
const fadeUpAnimate = document.querySelectorAll("#fade-up-animation");
const titleSlide = document.querySelectorAll("#title-slide");
const revealOpacityAnimate = document.querySelectorAll(
  "#reveal-opacity-animation"
);
const revealAnimate = document.querySelectorAll("#reveal-animation");

// Inital Text Animation
function removeElement() {
  initialTextAnimation.classList.add("removed");

  document.getElementsByTagName("body")[0].style.overflowY = "scroll";
}

initialTextAnimation.addEventListener("transitionend", () => {
  initialTextAnimation.remove();
});

setTimeout(removeElement, 2800);

const parallaxEffect = () => {
  const rellax = new Rellax(".hero-title", {
    speed: -6,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false,
  });

  return rellax;
};

parallaxEffect();

// Fade Up Animation
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const intersecting = entry.isIntersecting;
      entry.target.classList.toggle("fade-up-animate", intersecting);

      if (entry.isIntersecting) {
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.8,
  }
);

fadeUpAnimate.forEach((element) => {
  fadeObserver.observe(element);
});

// Title Slide Animation
const slideObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const intersecting = entry.isIntersecting;
      entry.target.classList.toggle("title-slide", intersecting);

      if (entry.isIntersecting) {
        slideObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.8,
  }
);

titleSlide.forEach((element) => {
  slideObserver.observe(element);
});

// Reveal Opacity Animation
const revealOpacityObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const intersecting = entry.isIntersecting;
      entry.target.classList.toggle("reveal-opacity-animate", intersecting);

      if (entry.isIntersecting) {
        revealOpacityObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.8,
  }
);

revealOpacityAnimate.forEach((element) => {
  revealOpacityObserver.observe(element);
});

// Reveal Animation
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const intersecting = entry.isIntersecting;
      entry.target.classList.toggle("reveal-animate", intersecting);

      if (entry.isIntersecting) {
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.8,
  }
);

revealAnimate.forEach((element) => {
  revealObserver.observe(element);
});
