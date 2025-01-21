import skills from "../skills.json";
import projects from "../projects.json";

const frontendSkills = document.querySelector("[data-skills-frontend]");
const backendSkills = document.querySelector("[data-skills-backend]");
const databaseSkills = document.querySelector("[data-skills-databases]");
const mlSkills = document.querySelector("[data-skills-ml]");
const projectsData = document.querySelector("[data-projects]");

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

// Projects
projects.map((project) => {
  const revBlock = document.createElement("li");
  revBlock.className = "rev-block";
  revBlock.id = "reveal-animation";

  const projectContent = document.createElement("div");
  projectContent.className = "project-content";
  projectContent.id = "reveal-opacity-animation";

  // Project Name
  const projectName = document.createElement("p");
  projectName.textContent = project.name;

  // Project Description
  const projectDescription = document.createElement("p");
  projectDescription.textContent = project.description;

  // Project Site Link
  const projectLink = document.createElement("a");
  projectLink.href = project.site_link;
  projectLink.textContent = "View the Site Here";
  projectLink.target = "_blank";

  projectContent.appendChild(projectName);
  projectContent.appendChild(projectDescription);
  projectContent.appendChild(projectLink);

  revBlock.appendChild(projectContent);
  projectsData.appendChild(revBlock);
});
