document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".grid");
  if (!slider) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed
    slider.scrollLeft = scrollLeft - walk;
  });
});



// Horizontal scroll for charity & events
const sliders = document.querySelectorAll(".scrollable-grid, .event-slider");
sliders.forEach(slider => {
  let isDown = false, startX, scrollLeft;
  slider.addEventListener("mousedown", e => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => { isDown = false; slider.classList.remove("active"); });
  slider.addEventListener("mouseup", () => { isDown = false; slider.classList.remove("active"); });
  slider.addEventListener("mousemove", e => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    slider.scrollLeft = scrollLeft - (x - startX) * 1.5;
  });
  // Touch events
  slider.addEventListener("touchstart", e => { isDown = true; startX = e.touches[0].pageX - slider.offsetLeft; scrollLeft = slider.scrollLeft; });
  slider.addEventListener("touchend", () => { isDown = false; });
  slider.addEventListener("touchmove", e => { if(!isDown) return; const x = e.touches[0].pageX - slider.offsetLeft; slider.scrollLeft = scrollLeft - (x - startX) * 1.5; });
});

// FAQ accordion
document.querySelectorAll(".faq-question").forEach(q => {
  q.addEventListener("click", () => {
    q.parentElement.classList.toggle("active");
  });
});

// Add new testimonials dynamically
const testimonialForm = document.getElementById("testimonial-form");
const testimonialGrid = document.querySelector(".testimonial-grid");

testimonialForm.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("reviewer-name").value;
  const review = document.getElementById("review-text").value;
  
  if(!name || !review) return;

  // Create new testimonial card
  const newCard = document.createElement("div");
  newCard.classList.add("testimonial-card");
  newCard.innerHTML = `<p>"${review}"</p><h4>- ${name}</h4>`;
  
  // Append to testimonial grid
  testimonialGrid.appendChild(newCard);
  
  // Reset form
  testimonialForm.reset();
});


document.addEventListener("DOMContentLoaded", () => {
  const joinBtn = document.getElementById('join-btn');
  const modal = document.getElementById('volunteer-modal');
  const closeBtn = document.querySelector('.close-btn');

  // Show modal on button click
  joinBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  // Close modal on close button click
  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Close modal on clicking outside the modal content
  modal.addEventListener('click', (e) => {
    if(e.target === modal) {
      modal.classList.add('hidden');
    }
  });
});



