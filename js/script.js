// Replace Text In Header
const checkReplace = document.querySelector('.replace-me');
if (checkReplace) {
  const replace = new ReplaceMe(checkReplace, {
    animation: 'animated fadeIn',
    speed: 2000,
    separator: ',',
    loopCount: 'infinite',
    autoRun: true,
  });
}

// User Scroll For Navbar
function userScroll() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add(
        'bg-dark',
        'border-bottom',
        'border-secondary',
        'navbar-sticky'
      );
    } else {
      navbar.classList.remove(
        'bg-dark',
        'border-bottom',
        'border-secondary',
        'navbar-sticky'
      );
    }
  });
}
userScroll();

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      const offset = 75; // Adjust this value to set the stopping point

      if (targetElement) {
        const targetOffsetTop = targetElement.offsetTop - offset;
        window.scrollTo({
          top: targetOffsetTop,
          behavior: 'smooth',
        });
      }
    });
  });
});

// Activate Bootstrap scrollspy on the main nav element
const mainNav = document.body.querySelector('#mainNav');
if (mainNav) {
  new bootstrap.ScrollSpy(document.body, {
    target: '#mainNav',
    offset: 10,
  });
}

// Change Footer year
const companyStartYear = 2016;
const currentYear = new Date().getFullYear();
const yearToDate = document.querySelector('.year-range');
if (yearToDate) {
  yearToDate.textContent = `${companyStartYear} - ${currentYear}`;
}

// Back to top button
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
