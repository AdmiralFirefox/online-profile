import Rellax from "rellax";
import skills from "../skills.json";

const frontendSkills = document.querySelector("[data-skills-frontend]");
const backendSkills = document.querySelector("[data-skills-backend]");
const databaseSkills = document.querySelector("[data-skills-databases]");
const mlSkills = document.querySelector("[data-skills-ml]");

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

// Frontend Skills
skills.frontend.map((skill, index) => {
  const frontendSkill = document.createElement("li");

  if (index === skills.frontend.length - 1) {
    frontendSkill.textContent = skill;
  } else {
    frontendSkill.textContent = skill + ",";
  }

  frontendSkills.appendChild(frontendSkill);
});

// Backend Skills
skills.backend.map((skill, index) => {
  const backendSkill = document.createElement("li");

  if (index === skills.backend.length - 1) {
    backendSkill.textContent = skill;
  } else {
    backendSkill.textContent = skill + ",";
  }

  backendSkills.appendChild(backendSkill);
});

// Database Skills
skills.databases.map((skill, index) => {
  const databaseSkill = document.createElement("li");
  databaseSkill.textContent = skill;

  if (index === skills.databases.length - 1) {
    databaseSkill.textContent = skill;
  } else {
    databaseSkill.textContent = skill + ",";
  }

  databaseSkills.appendChild(databaseSkill);
});

// Machine Learning
skills.machine_learning.map((skill, index) => {
  const mlSkill = document.createElement("li");

  if (index === skills.machine_learning.length - 1) {
    mlSkill.textContent = skill;
  } else {
    mlSkill.textContent = skill + ",";
  }

  mlSkills.appendChild(mlSkill);
});
