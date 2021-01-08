const projects = [
  {
    title: "Four card feature section",
    image: "./four-card-feature-section-master//design/desktop-design.jpg",
    link: "./four-card-feature-section-master/index.html",
  },

  {
    title: "sign up form",
    image:
      "./intro-component-with-signup-form-master/design/desktop-design.jpg",
    link: "./intro-component-with-signup-form-master/index.html",
  },

  {
    title: "Base apparel coming soon page",
    image: "./base-apparel-coming-soon-master/design/desktop-design.jpg",
    link: "./base-apparel-coming-soon-master/index.html",
  },

  {
    title: "single price grid component master",
    image: "./single-price-grid-component-master/design/desktop-design.jpg",
    link: "./single-price-grid-component-master/index.html",
  },

  {
    title: "ping coming soon page master",
    image: "./ping-coming-soon-page-master/design/desktop-design.jpg",
    link: "./ping-coming-soon-page-master/index.html",
  },
];

const mainSection = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", (event) => {
  const projectData = projects
    .map((project) => {
      return `
        <a
          href="${project.link}"
          target="_blank"
          class="project"
        >
          <img
            src="${project.image}"
            alt=""
          />
          <footer>
            <h4>${project.title}</h4>
          </footer>
        </a>
        `;
    })
    .join("");
  mainSection.innerHTML = projectData;
});
