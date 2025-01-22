const navIcon = document.querySelector("#check");
const mobileNavbar = document.querySelector("#mobile-navbar");
const webLogo = document.querySelector("#weblogo");
const navbarOverlay = document.querySelector("#navbar-overlay");

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
