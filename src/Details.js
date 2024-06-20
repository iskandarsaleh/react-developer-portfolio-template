// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import sonarqube from "./assets/techstack/sonarqube_logo_1.png";
import bitbucket from "./assets/techstack/bitbucket_logo.png";
import confluence from "./assets/techstack/confluence_logo_1.webp";
import js from "./assets/techstack/js.png";
import k8s from "./assets/techstack/k8s_logo_1.png";
import jira from "./assets/techstack/jira_logo_1.png";
import pytest from "./assets/techstack/Pytest_logo.png";
import Jenkins from "./assets/techstack/jenkins_logo_1.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "saleh iskandar",
  tagline: "all about software quality assurance",
  img: profile,
  about: `just another project`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/saleh-iskandar-87b3b5113/",
  github: "https://www.github.com/iskandarsaleh",
  // twitter: "https://twitter.com/",
  // instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Senior Software Quality Assurance",
    Company: `VIDA Digital Identity`,
    Location: "Jakarta",
    Type: "Full Time",
    Duration: "Jun 2022 - Apr 2024",
  },
  {
    Position: "Quality Assurance Specialist",
    Company: `OttoDigital`,
    Location: "Jakarta",
    Type: "Full Time",
    Duration: "Dec 2018 - Jun 2022",
  },
  {
    Position: "Software Quality Assurance",
    Company: `JPx`,
    Location: "Jakarta",
    Type: "Full Time",
    Duration: "Mar 2018 - Dec 2018",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Management Agribusiness",
    Company: "Bogor Agricultural University",
    Location: "Bogor",
    // Type: "Full Time",
    // Duration: "Jan 2022 - Present",
  },
  {
    Position: "Bachelor of Economics",
    Company: `University of Binaniaga`,
    Location: "Bogor",
    // Type: "Full Time",
    // Duration: "Aug 2020 - Present",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  sonarqube: sonarqube,
  bitbucket: bitbucket,
  js: js,
  confluence: confluence,
  jenkins: Jenkins,
  jira: jira,
  k8s: k8s,
  pytest: pytest,
  python: python,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "ISO-8583",
    image: projectImage1,
    description: `international standard for financial transaction card originated interchange messaging. It is the International Organization for Standardization standard for systems that exchange electronic transactions initiated by cardholders using payment cards`,
    techstack: "Golang, Postman-newman, sonarqube",
    // previewLink: "https://google.com",
    // githubLink: "https://github.com",
  },
  {
    title: "QRIS",
    image: projectImage2,
    description: `Quick Response Code Indonesia Standard (abbreviated as QRIS, the abbreviation being a play on keris, a traditional sword; Indonesian: Kode QR Standar Indonesia) is a QR code standard developed by Bank Indonesia (BI) and Indonesian Payment System Association for cashless payments in Indonesia.`,
    techstack: "Golang, Pstman-newman, sonarqube, locust",
    // previewLink: "https://google.com",
    // githubLink: "https://github.com",
  },
  {
    title: "Digital Signature",
    image: projectImage3,
    description: `A digital signature is a mathematical scheme for verifying the authenticity of digital messages or documents. A valid digital signature on a message gives a recipient confidence that the message came from a sender known to the recipient.`,
    techstack: "Java, Postman-newman, jmeter",
    // previewLink: "https://google.com",
    // githubLink: "https://github.com",
  },
  {
    title: "Emeterai",
    image: projectImage4,
    description: `digital emeterai`,
    techstack: "Java, Postman-newman, jmeter, pytest",
    // previewLink: "https://google.com",
    // githubLink: "https://github.com",
  },
  {
    title: "Income Verification",
    image: projectImage5,
    description: `Verify income of user`,
    techstack: "Java, Postman-newman, pytest"
    // previewLink: "https://google.com",
    // githubLink: "https://github.com",
  },
  {
    title: "Cloud Signature Consortium",
    image: projectImage6,
    description: `Cloud signature Consortium`,
    techstack: "Java, Postman-newman, linux-Curl",
    // previewLink: "https://google.com",
    // githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "sisalehiskandar@gmail.com",
  phone: "+62 819 0805 1279",
};
