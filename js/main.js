(() => {
  "use strict";

  document.documentElement.classList.add("js");

  const menuToggle = document.querySelector("[data-menu-toggle]");
  const siteNav = document.querySelector("[data-site-nav]");
  const servicesToggle = document.querySelector("[data-services-toggle]");
  const servicesMenu = document.querySelector("[data-services-menu]");

  if (!menuToggle || !siteNav || !servicesToggle || !servicesMenu) {
    return;
  }

  const desktopMedia = window.matchMedia("(min-width: 56rem)");

  const setServicesState = (open) => {
    servicesToggle.setAttribute("aria-expanded", String(open));
    servicesMenu.hidden = !open;
  };

  const setMenuState = (open) => {
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation",
    );
    siteNav.classList.toggle("is-open", open);

    if (!open) {
      setServicesState(false);
    }
  };

  setServicesState(false);
  setMenuState(false);

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  servicesToggle.addEventListener("click", () => {
    const isOpen = servicesToggle.getAttribute("aria-expanded") === "true";
    setServicesState(!isOpen);
  });

  siteNav.addEventListener("click", (event) => {
    const link = event.target.closest("a");

    if (link && !desktopMedia.matches) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    const menuWasOpen = menuToggle.getAttribute("aria-expanded") === "true";
    const servicesWasOpen =
      servicesToggle.getAttribute("aria-expanded") === "true";

    if (!menuWasOpen && !servicesWasOpen) {
      return;
    }

    if (menuWasOpen) {
      setMenuState(false);
      menuToggle.focus();
      return;
    }

    setServicesState(false);
    servicesToggle.focus();
  });

  const resetNavigation = () => {
    setMenuState(false);
    setServicesState(false);
  };

  if (typeof desktopMedia.addEventListener === "function") {
    desktopMedia.addEventListener("change", resetNavigation);
  } else if (typeof desktopMedia.addListener === "function") {
    desktopMedia.addListener(resetNavigation);
  }
})();
