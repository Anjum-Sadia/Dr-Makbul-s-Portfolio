/* =====================================================
   RESPONSIVE NAVIGATION & INTERACTIONS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ========================
     1. Create Hamburger Menu
  ======================== */
  const nav = document.querySelector("header nav");
  const header = document.querySelector("header");
  const menuBtn = document.createElement("div");
  menuBtn.classList.add("hamburger");
  menuBtn.innerHTML = "&#9776;"; // Hamburger icon
  header.appendChild(menuBtn);

  // Toggle nav visibility on click
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });

  /* ========================
     2. Highlight Current Page
  ======================== */
  const currentPage = location.pathname.split("/").pop();
  document.querySelectorAll("header nav a").forEach(link => {
    if(link.getAttribute("href") === currentPage) {
      link.style.color = "#ffcc00"; // Highlight color
      link.style.fontWeight = "bold";
    }
  });

  /* ========================
     3. Smooth Scroll for Anchors (optional)
  ======================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

});

/* ========================
   OPTIONAL: Add CSS for hamburger in JS dynamically
======================== */
const style = document.createElement("style");
style.innerHTML = `
  .hamburger {
    display: none;
    font-size: 28px;
    cursor: pointer;
    color: white;
    user-select: none;
  }

  header nav.nav-active {
    display: block !important;
  }

  @media (max-width: 768px) {
    header nav {
      display: none;
      flex-direction: column;
      background-color: #0b0b64;
      position: absolute;
      top: 65px;
      right: 0;
      width: 200px;
      border-radius: 0 0 10px 10px;
      padding: 10px 0;
    }

    header nav a {
      margin: 10px 20px;
      display: block;
    }

    .hamburger {
      display: block;
    }
  }
`;
document.head.appendChild(style);
