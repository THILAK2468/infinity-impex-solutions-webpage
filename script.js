// Product modal functionality
function openProductModal(button) {
  const card = button.closest('.product-card');
  const productName = card.getAttribute('data-product-name');
  const productImage = card.getAttribute('data-product-image');
  const productSpecs = card.querySelector('.product-specs-hidden');
  
  // Set modal content
  document.getElementById('modalProductName').textContent = productName;
  document.getElementById('modalProductImage').src = productImage;
  document.getElementById('modalProductSpecs').innerHTML = productSpecs.innerHTML;
  
  // Show modal
  document.getElementById('productModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  document.getElementById('productModal').classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close modal when pressing Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeProductModal();
  }
});

function sendMsg(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-send');
    btn.textContent = '✓ Message Sent!';
    btn.style.background = '#2d7a3a';
    setTimeout(() => {
      btn.textContent = 'SEND MESSAGE';
      btn.style.background = '';
      e.target.reset();
    }, 3500);
  }

  // Active nav on scroll
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) cur = s.id; });
    navLinks.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + cur) a.classList.add('active');
    });
  });