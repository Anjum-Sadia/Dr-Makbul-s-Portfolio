// ============================
// Highlight Schedule & Contact
// ============================
document.querySelectorAll('.schedule, .contact').forEach(box => {
  box.addEventListener('mouseenter', () => box.classList.add('active-schedule'));
  box.addEventListener('mouseleave', () => box.classList.remove('active-schedule'));
});

// ============================
// Smooth Scroll for Navigation Links
// ============================
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ============================
// Load Footer Dynamically
// ============================
fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch(err => console.error("Footer load error:", err));

// ============================
// Contact Icon Click Effects
// ============================
const phone = document.querySelector(".contact p span img[alt='call']");
const whatsapp = document.querySelector(".contact p span img[alt='whatsapp']");
const email = document.querySelector(".contact p span img[alt='email']");

if(phone) phone.addEventListener("click", () => alert("Call: 01782-662 665"));
if(whatsapp) whatsapp.addEventListener("click", () => alert("WhatsApp: 01782-662 665"));
if(email) email.addEventListener("click", () => alert("Email: drmmhmukul@gmail.com"));

// ============================
// Responsive Mobile Menu
// ============================
const nav = document.querySelector("nav");
const header = document.querySelector("header");
let mobileMenu;

function createMobileMenu() {
  if(window.innerWidth <= 768 && !mobileMenu) {
    mobileMenu = document.createElement("button");
    mobileMenu.textContent = "☰ Menu";
    mobileMenu.classList.add("mobile-menu-btn");
    header.insertBefore(mobileMenu, nav);
    
    mobileMenu.addEventListener("click", () => {
      nav.classList.toggle("mobile-nav-open");
    });
  } else if(window.innerWidth > 768 && mobileMenu) {
    mobileMenu.remove();
    mobileMenu = null;
    nav.classList.remove("mobile-nav-open");
  }
}

// Initial check
createMobileMenu();

// Update on window resize
window.addEventListener("resize", createMobileMenu);
