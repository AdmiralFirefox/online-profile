import skills from "../skills.json";
import projects from "../projects.json";

// Navbar
const navIcon = document.querySelector("#check");
const mobileNavbar = document.querySelector("#mobile-navbar");
const webLogo = document.querySelector("#weblogo");
const navbarOverlay = document.querySelector("#navbar-overlay");

// Skills and Projects
const frontendSkills = document.querySelector("[data-skills-frontend]");
const backendSkills = document.querySelector("[data-skills-backend]");
const databaseSkills = document.querySelector("[data-skills-databases]");
const mlSkills = document.querySelector("[data-skills-ml]");
const projectsData = document.querySelector("[data-projects]");

// Accordion
const accHeading = document.querySelectorAll(".accordion");
const accPanel = document.querySelectorAll(".panel");

// Scroll Links
const scrollHero = document.querySelectorAll("#scroll-home");
const scrollAbout = document.querySelectorAll("#scroll-about");
const scrollSkills = document.querySelectorAll("#scroll-skills");
const scrollProjects = document.querySelectorAll("#scroll-projects");
const scrollInterests = document.querySelectorAll("#scroll-interests");
const scrollQuestions = document.querySelectorAll("#scroll-questions");
const scrollContacts = document.querySelectorAll("#scroll-contacts");

// Sections
const scrollHeroSection = document.querySelector("#hero-section");
const scrollAboutSection = document.querySelector("#about-section");
const scrollSkillsSection = document.querySelector("#skills-section");
const scrollProjectsSection = document.querySelector("#projects-section");
const scrollInterestsSection = document.querySelector("#interests-section");
const scrollQuestionsSection = document.querySelector("#questions-section");
const scrollContactsSection = document.querySelector("#contacts-section");

// Toggle Navbar
const toggleNavbar = () => {
  mobileNavbar.classList.toggle("navbar-active");
  navbarOverlay.classList.toggle("navbar-overlay-active");

  if (!mobileNavbar.classList.contains("navbar-active")) {
    document.getElementsByTagName("body")[0].style.overflow = "unset";

    navIcon.checked = false;
  } else {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";

    // Web Logo
    webLogo.addEventListener("click", () => {
      document.getElementsByTagName("body")[0].style.overflow = "unset";

      mobileNavbar.classList.remove("navbar-active");
      navbarOverlay.classList.remove("navbar-overlay-active");

      navIcon.checked = false;
    });
  }
};

navIcon.addEventListener("click", toggleNavbar);

// Navbar Links
for (const child of mobileNavbar.children) {
  child.addEventListener("click", toggleNavbar);
}

// Navbar Overlay
navbarOverlay.addEventListener("click", toggleNavbar);

// Scroll to Hero Section
webLogo.addEventListener("click", () => {
  scrollHeroSection.scrollIntoView({
    behavior: "smooth",
  });
});

// Scroll to Home Section
scrollHero.forEach((sectionLinks) => {
  sectionLinks.addEventListener("click", () => {
    scrollHeroSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll to About Section
scrollAbout.forEach((sectionLinks) => {
  sectionLinks.addEventListener("click", () => {
    scrollAboutSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll to Skills Section
scrollSkills.forEach((sectionLinks) => {
  sectionLinks.addEventListener("click", () => {
    scrollSkillsSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll to Projects Section
scrollProjects.forEach((sectionLinks) => {
  sectionLinks.addEventListener("click", () => {
    scrollProjectsSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll to Interests Section
scrollInterests.forEach((sectionLinks) => {
  sectionLinks.addEventListener("click", () => {
    scrollInterestsSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll to Questions Section
scrollQuestions.forEach((sectionLinks) => {
  sectionLinks.addEventListener("click", () => {
    scrollQuestionsSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll to Contacts Section
scrollContacts.forEach((sectionLinks) => {
  sectionLinks.addEventListener("click", () => {
    scrollContactsSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

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

// Shows Panel
const showPanel = (elem) => {
  hidePanels();
  elem.classList.add("active");
  elem.nextElementSibling.style.maxHeight = `${elem.nextElementSibling.scrollHeight}px`;
};

// Hides all shown Panels
const hidePanels = () => {
  for (let i = 0; i < accPanel.length; i++) {
    accPanel[i].style.maxHeight = null;
    accHeading[i].classList.remove("active");
  }
};

for (let i = 0; i < accHeading.length; i++) {
  accHeading[i].onclick = () => {
    if (accHeading[i].nextElementSibling.style.maxHeight) {
      hidePanels();
    } else {
      showPanel(accHeading[i]);
    }
  };
}
