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
      const offset = 75;

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

// Refresh the legacy footer with the current VIT positioning and identity.
document.addEventListener('DOMContentLoaded', function () {
  const footer = document.querySelector('#footer');
  if (!footer) return;

  const approvedLogo =
    'https://www.videoimagetechnologies.co.za/assets/landing/vit-logo.webp';

  const footerStyle = document.createElement('style');
  footerStyle.textContent = `
    #footer .vit-footer-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 2rem;
      align-items: center;
    }

    #footer .vit-footer-copy {
      text-align: left;
    }

    #footer .vit-footer-copy small {
      display: block;
      max-width: 36rem;
    }

    #footer .vit-footer-logo-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #footer .vit-footer-logo {
      width: min(170px, 72%);
      height: auto;
      object-fit: contain;
      filter: drop-shadow(0 14px 24px rgba(0, 0, 0, 0.22));
    }

    #footer .vit-footer-socials {
      display: flex;
      justify-content: center;
      gap: 0.45rem;
      margin-bottom: 1.4rem;
    }

    #footer .vit-footer-meta p {
      margin-bottom: 0.7rem;
    }

    #footer .vit-footer-rights {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
    }

    #footer .vit-footer-small-logo {
      width: 32px;
      height: 32px;
      object-fit: contain;
    }

    #footer .vit-footer-tagline {
      margin-bottom: 0;
      font-weight: 600;
    }

    @media (max-width: 991.98px) {
      #footer .vit-footer-grid {
        grid-template-columns: 1fr;
      }

      #footer .vit-footer-copy,
      #footer .vit-footer-copy small {
        max-width: none;
        text-align: center;
      }
    }
  `;
  document.head.appendChild(footerStyle);

  footer.innerHTML = `
    <div class="container text-dark">
      <div class="vit-footer-grid">
        <div class="vit-footer-copy">
          <h6 class="fw-bold text-uppercase">About Video Image Technologies</h6>
          <small class="fw-light lh-base">
            Video Image Technologies designs technical media data systems for
            secure handling, reliable backup, structured archive and clean
            workflow handover. We help productions and media teams move content
            safely from ingest through delivery.
          </small>
        </div>

        <div class="vit-footer-logo-wrap">
          <img
            class="vit-footer-logo"
            src="${approvedLogo}"
            alt="Video Image Technologies logo"
            width="170"
            height="170"
          />
        </div>

        <div class="vit-footer-meta text-center">
          <div class="vit-footer-socials">
            <a
              href="https://www.linkedin.com/in/david-miller-07376015/"
              aria-label="Video Image Technologies LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              class="text-decoration-none"
            >
              <i class="fab fa-linkedin fa-3x text-dark mx-1"></i>
            </a>
            <a
              href="https://www.instagram.com/videoimagetechnologies/"
              aria-label="Video Image Technologies Instagram"
              target="_blank"
              rel="noopener noreferrer"
              class="text-decoration-none"
            >
              <i class="fab fa-instagram fa-3x text-dark mx-1"></i>
            </a>
            <a
              href="#contact-us"
              class="text-decoration-none"
              aria-label="Contact Video Image Technologies"
            >
              <i class="fa fa-paper-plane fa-3x text-dark mx-1"></i>
            </a>
            <a
              href="#contact-us"
              class="text-decoration-none"
              aria-label="Contact Video Image Technologies by phone"
            >
              <i class="fa fa-mobile-screen-button fa-3x text-dark mx-1"></i>
            </a>
          </div>

          <p>
            Video Image Technologies &copy;
            <span class="year-range"></span>
          </p>

          <p class="vit-footer-rights">
            <img
              class="vit-footer-small-logo"
              src="${approvedLogo}"
              alt=""
              width="32"
              height="32"
            />
            <span>All Rights Reserved &reg;</span>
          </p>

          <p class="vit-footer-tagline">Clear Vision. Reliable Systems.</p>
        </div>
      </div>
    </div>
  `;

  const companyStartYear = 2016;
  const currentYear = new Date().getFullYear();
  const yearToDate = footer.querySelector('.year-range');
  if (yearToDate) {
    yearToDate.textContent = `${companyStartYear} - ${currentYear}`;
  }
});

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
