document.addEventListener('DOMContentLoaded', function() {
  const metricValues = document.querySelectorAll('.metric-value');
  
  metricValues.forEach(value => {
    // Animate the numbers if you want
    if (value.textContent.includes('+') || value.textContent === '∞') {
      // No animation for these
      return;
    }
    
    let target = parseInt(value.textContent);
    let current = 0;
    const increment = target / 20;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(timer);
        value.textContent = target + '%';
      } else {
        value.textContent = Math.floor(current) + '%';
      }
    }, 50);
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Add your form submission logic here
  alert('Message sent!'); // Temporary for testing
  this.reset();
});
// Optional: Basic form success alert
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for your message, Tolu will reach out soon!");
  this.reset();
});