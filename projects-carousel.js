const projects = [
  {
    title: "Mini Mikimix",
    description:
      "Created an order management system for Mini Mikimix, a donut retail business based in Bacolod.",
    projectType: "UI/UX Design",
    viewLink: "Records Management System for Mini Mikimix.pdf",
    images: [
      "MINIM1.png",
      "MINIM2.png",
      "MINIM3.png",
      "MINIM4.png",
      "MINIM5.png",
      "MINIM6.png",
      "MINIM7.png",
    ],
  },
  {
    title: "codev",
    description:
      "Developed a concept for an ideal technology company and designed a website to represent it.",
    projectType: "UI/UX Design",
    viewLink: "https://gerlyntan07.github.io/codev/",
    images: ["CODEV1.png", "CODEV2.PNG"],
  },
  {
    title: "CvSU Website",
    description:
      "Developed a website for our university, as a primer for outsiders and incoming freshmen.",
    projectType: "UI/UX Design",
    viewLink: "https://gerlyntan07.github.io/group1_cvsuwebsite/",
    images: ["CVSU1.png", "CVSU2.PNG"],
  },
  {
    title: "Inventory",
    description:
      "Developed an inventory system in fulfillment of the requirements for ITEC 50.",
    projectType: "UI/UX Design, Full Stack Development",
    viewLink: "Inventory Management System.pdf",
    images: ["INV1.png", "INV2.png", "INV3.png", "INV4.png", "INV5.png"],
  },
  {
    title: "Student Records",
    description:
      "Developed a records system that stores grades and issues certificates, in fulfillment of the requirements for DCIT 55.",
    projectType: "UI/UX Design",
    viewLink:
      "Cavite State University Bacoor City Campus Student Records System.pdf",
    images: [
      "RECORDS1.png",
      "RECORDS2.png",
      "RECORDS3.png",
      "RECORDS4.png",
      "RECORDS5.png",
      "RECORDS6.png",
      "RECORDS7.png",
      "RECORDS8.png",
      "RECORDS9.png",
      "RECORDS10.png",
      "RECORDS11.png",
      "RECORDS12.png",
      "RECORDS13.png",
      "RECORDS14.png",
      "RECORDS15.png",
      "RECORDS16.png",
      "RECORDS17.png",
      "RECORDS18.png",
      "RECORDS19.png",
      "RECORDS20.png",
      "RECORDS21.png",
      "RECORDS22.png",
      "RECORDS23.png",
      "RECORDS24.png",
      "RECORDS25.png",
      "RECORDS26.png",
      "RECORDS27.png",
      "RECORDS28.png",
      "RECORDS29.png",
      "RECORDS30.png",
    ],
  },
];

let currentProjectIndex = 0;
let currentImageIndex = 0;

function loadProject(index) {
  const project = projects[index];
  const projectInfo = document.getElementById("project-info");
  const carouselContainer = document.getElementById("carousel-container");

  projectInfo.classList.add("fade-out");
  carouselContainer.classList.add("fade-out");

  setTimeout(() => {
    document.getElementById("project-title").textContent = project.title;
    document.getElementById("project-description").textContent =
      project.description;
    document.getElementById("project-type").textContent = project.projectType;
    document.getElementById("view-project").onclick = () => {
      window.open(project.viewLink, "_blank");
    };
    loadImage(0);

    projectInfo.classList.remove("fade-out");
    carouselContainer.classList.remove("fade-out");
  }, 500);
}

function loadImage(index) {
  const project = projects[currentProjectIndex];
  const projectImage = document.getElementById("project-image");
  projectImage.src = project.images[index];
  currentImageIndex = index;
}

function nextProject() {
  currentProjectIndex = (currentProjectIndex + 1) % projects.length;
  loadProject(currentProjectIndex);
}

function prevProject() {
  currentProjectIndex =
    (currentProjectIndex - 1 + projects.length) % projects.length;
  loadProject(currentProjectIndex);
}

function nextImage() {
  const project = projects[currentProjectIndex];
  currentImageIndex = (currentImageIndex + 1) % project.images.length;
  loadImage(currentImageIndex);
}

function prevImage() {
  const project = projects[currentProjectIndex];
  currentImageIndex =
    (currentImageIndex - 1 + project.images.length) % project.images.length;
  loadImage(currentImageIndex);
}

document
  .getElementById("next-project-btn")
  .addEventListener("click", nextProject);
document
  .getElementById("prev-project-btn")
  .addEventListener("click", prevProject);
document.getElementById("next-image-btn").addEventListener("click", nextImage);
document.getElementById("prev-image-btn").addEventListener("click", prevImage);

loadProject(currentProjectIndex);
