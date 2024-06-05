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

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Get all elements with the class "btn-quote" inside modals
  var quoteBtns = document.querySelectorAll('.modal .btn-quote');

  // Add a click event listener to each button
  quoteBtns.forEach(function (quoteBtn) {
    quoteBtn.addEventListener('click', function () {
      // Get the parent modal of the clicked button
      var modal = quoteBtn.closest('.modal');

      // Close the modal
      var modalInstance = bootstrap.Modal.getInstance(modal);
      modalInstance.hide();

      // Get the target section ID from the button's href attribute
      var targetSectionId = quoteBtn.getAttribute('href').replace('#', '');

      // Scroll to the target section
      document
        .getElementById(targetSectionId)
        .scrollIntoView({ behavior: 'smooth' });
    });
  });
});

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
