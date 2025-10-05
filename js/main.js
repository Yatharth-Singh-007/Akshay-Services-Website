// js/main.js

// Mobile nav toggle
function toggleMobile() {
  const mobile = document.getElementById('mobileNav');
  mobile.classList.toggle('hidden');
}

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Lightbox
function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  img.src = src;
  lb.classList.remove('hidden');
}
function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.add('hidden');
  document.getElementById('lightboxImg').src = '';
}

// Contact form submission (demo behaviour)
// For real-world use, integrate Formspree, EmailJS, or a backend endpoint.
function handleForm(e) {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const msg = document.getElementById('formMsg');

  if (!name || !email) {
    msg.textContent = 'Please provide your name and email.';
    msg.style.color = 'crimson';
    return;
  }

  // For demo: simulate successful sending
  msg.style.color = 'green';
  msg.textContent = 'Thanks! Your inquiry has been recorded. We will contact you soon.';

  // Clear form after success (optional)
  setTimeout(() => {
    form.reset();
    msg.textContent = '';
  }, 3000);
}

function clearForm() {
  document.getElementById('contactForm').reset();
}
