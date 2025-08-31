// Dark Mode Toggle
const toggleBtn = document.getElementById("darkToggle");
const body = document.body;

// Load user preference
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
});

// Smooth Fade-in Animations
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
// Sticky Navbar shadow on scroll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Smooth Scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
// Load Blog Posts dynamically
if (document.getElementById("blogContainer") && window.blogPosts) {
  const container = document.getElementById("blogContainer");

  window.blogPosts.forEach(post => {
    const card = document.createElement("div");
    card.classList.add("blog-card", "fade-in");

    card.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <div class="blog-card-content">
        <h3>${post.title}</h3>
        <p>${post.description}</p>
        <a href="${post.link}" class="btn">Read More</a>
      </div>
    `;
    container.appendChild(card);
  });
}

