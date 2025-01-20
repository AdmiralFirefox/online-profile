import Rellax from "rellax";

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
