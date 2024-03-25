// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
import Kasa from "./images/Kasa.webp";
import ArgentBank from "./images/ArgentBank.jpg";
import Portfolio from "./images/SophieB.webp";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "lkii2023";

// Navbar Logo image

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: (
      <Icon
        icon="mdi:language-html5"
        className="display-4"
      />
    ),
    name: "HTML5",
  },
  {
    id: 2,
    skill: (
      <Icon
        icon="ion:logo-css3"
        className="display-4"
      />
    ),
    name: "CSS3",
  },
  {
    id: 3,
    skill: (
      <Icon
        icon="fa6-brands:js"
        className="display-4"
      />
    ),
    name: "JavaScript",
  },
  {
    id: 4,
    skill: (
      <Icon
        icon="ri:bootstrap-fill"
        className="display-4"
      />
    ),
    name: "BootStrap",
  },
  {
    id: 5,
    skill: (
      <Icon
        icon="mdi:react"
        className="display-4"
      />
    ),
    name: "React",
  },
  {
    id: 6,
    skill: (
      <Icon
        icon="fa6-brands:sass"
        className="display-4"
      />
    ),
    name: "Sass",
  },
  {
    id: 7,
    skill: (
      <Icon
        icon="akar-icons:redux-fill"
        className="display-4"
      />
    ),
    name: "Redux",
  },
  {
    id: 8,
    skill: (
      <Icon
        icon="bi:git"
        className="display-4"
      />
    ),
    name: "Git",
  },
  {
    id: 9,
    skill: (
      <Icon
        icon="fa6-brands:square-github"
        className="display-4"
      />
    ),
    name: "GitHub",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = [
  "ArgentBank",
  "kasa",
  "Portfolio-Sophie-Bluel",
];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "ArgentBank",
    image: ArgentBank,
  },
  {
    name: "kasa",
    image: Kasa,
  },
  {
    name: "Portfolio-Sophie-Bluel",
    image: Portfolio,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mnqegaql";
