const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
  
        // Disconnect the observer when the element is visible
        observer.unobserve(entry.target);
      }
    });
  });
  
  // Observe hidden elements when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  });
  