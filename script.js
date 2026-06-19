document.querySelector('form').onsubmit = async e => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  const name = e.target.name.value.trim();
  
  if(name.length < 2) {
    toast("Please enter your name");
    return;
  }
  
  btn.disabled = true;
  btn.textContent = 'Sending...';
  
  // Simulate send - replace with your backend later
  setTimeout(() => {
    btn.textContent = 'Sent! We\'ll call you back ✅';
    toast("Thanks! We received your message");
    e.target.reset();
    setTimeout(() => { btn.textContent = 'Send Message'; btn.disabled = false }, 3000);
  }, 1500);
}

function toast(msg) {
  const t = document.createElement('div');
  t.textContent = msg;
  t.style = 'position:fixed; bottom:20px; right:20px; background:#1e3a8a; color:white; padding:14px 20px; border-radius:8px; z-index:9999; box-shadow:0 4px 12px rgba(0,0,0,0.3)';
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 4000);
}
document.querySelectorAll('.card h3').forEach(title => {
  title.style.cursor = 'pointer';
  title.onclick = () => {
    const content = title.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  }
});
const lightbox = document.getElementById('img-lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox-close');

// 1. Make all images clickable
document.querySelectorAll('img').forEach(img => {
  img.classList.add('clickable');
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // stop background scroll
  });
});

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if(e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeLightbox();
});

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = 'auto';
}
