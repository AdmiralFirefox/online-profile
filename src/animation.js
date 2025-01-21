import Rellax from "rellax";

const fadeUpAnimate = document.querySelectorAll("#fade-up-animation");
const titleSlide = document.querySelectorAll("#title-slide");

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
