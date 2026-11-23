// Hand Made Frames: theme toggle, mobile menu, scroll effects, gallery lightbox, enquiry form
(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- Dark mode toggle ----------
  // The inline script in <head> applies a saved choice before first paint.
  var darkQuery = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  function currentTheme() {
    return root.getAttribute("data-theme") || (darkQuery && darkQuery.matches ? "dark" : "light");
  }
  var themeBtn = document.querySelector(".theme-toggle");
  function syncThemeButton() {
    if (!themeBtn) return;
    var dark = currentTheme() === "dark";
    themeBtn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    themeBtn.setAttribute("aria-pressed", dark ? "true" : "false");
  }
  if (themeBtn) {
    syncThemeButton();
    themeBtn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("hmf-theme", next); } catch (e) {}
      syncThemeButton();
    });
    if (darkQuery && darkQuery.addEventListener) darkQuery.addEventListener("change", syncThemeButton);
  }

  // ---------- Mobile menu ----------
  var toggle = document.querySelector(".nav-toggle");
  function closeMenu() {
    document.body.classList.remove("nav-open");
    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    }
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    document.querySelectorAll(".main-nav a").forEach(function (a) { a.addEventListener("click", closeMenu); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });
  }

  // ---------- Header shadow + back-to-top on scroll ----------
  var header = document.querySelector(".site-header");
  var toTop = document.createElement("button");
  toTop.className = "to-top";
  toTop.type = "button";
  toTop.setAttribute("aria-label", "Back to top");
  toTop.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 14l6-6 6 6"/></svg>';
  document.body.appendChild(toTop);
  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });
  var ticking = false;
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle("scrolled", y > 8);
    toTop.classList.toggle("show", y > 600);
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  // ---------- Reveal on scroll (staggered) ----------
  var revealSel = ".section-head, .card, .split > *, .photo-strip a, .gallery a, .info-item, .cta-band .container, " +
    ".tick-list li, .details li, .hours, .form, .map-wrap, .highlight, .footer-grid > div";
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(revealSel));
  if (!reduceMotion && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      var shown = 0;
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        el.style.setProperty("--d", Math.min(shown * 60, 300) + "ms");
        el.classList.add("in");
        shown++;
        io.unobserve(el);
        // Drop the delay afterwards so hover effects respond instantly
        setTimeout(function () { el.style.removeProperty("--d"); }, 800);
      });
    }, { rootMargin: "0px 0px -40px 0px", threshold: 0.08 });
    revealEls.forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
  }

  // ---------- Lightbox ----------
  var links = Array.prototype.slice.call(document.querySelectorAll("a[data-lightbox]"));
  if (links.length) {
    var box = document.createElement("div");
    box.className = "lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", "Photo viewer");
    box.setAttribute("aria-hidden", "true");
    box.innerHTML =
      '<img alt="">' +
      '<button class="lb-btn lb-close" type="button" aria-label="Close">&times;</button>' +
      '<button class="lb-btn lb-prev" type="button" aria-label="Previous photo">&#8249;</button>' +
      '<button class="lb-btn lb-next" type="button" aria-label="Next photo">&#8250;</button>' +
      '<div class="lb-count" aria-live="polite"></div>';
    document.body.appendChild(box);
    var img = box.querySelector("img");
    var count = box.querySelector(".lb-count");
    var current = 0;
    var lastFocus = null;

    img.addEventListener("load", function () { img.classList.remove("loading"); });

    function show(i) {
      current = (i + links.length) % links.length;
      var a = links[current];
      var src = a.getAttribute("href");
      if (img.getAttribute("src") !== src) {
        img.classList.add("loading");
        img.src = src;
        if (img.complete) img.classList.remove("loading");
      }
      var thumb = a.querySelector("img");
      img.alt = thumb ? thumb.alt : "";
      count.textContent = (current + 1) + " / " + links.length;
      // Warm up the next photo so arrowing through feels instant
      var next = new Image();
      next.src = links[(current + 1) % links.length].getAttribute("href");
    }
    function open(i) {
      lastFocus = document.activeElement;
      show(i);
      box.classList.add("open");
      box.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      box.querySelector(".lb-close").focus({ preventScroll: true });
    }
    function close() {
      box.classList.remove("open");
      box.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (lastFocus) lastFocus.focus({ preventScroll: true });
    }

    links.forEach(function (a, i) {
      a.addEventListener("click", function (e) { e.preventDefault(); open(i); });
    });
    box.querySelector(".lb-close").addEventListener("click", close);
    box.querySelector(".lb-prev").addEventListener("click", function () { show(current - 1); });
    box.querySelector(".lb-next").addEventListener("click", function () { show(current + 1); });
    box.addEventListener("click", function (e) { if (e.target === box) close(); });
    document.addEventListener("keydown", function (e) {
      if (!box.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(current - 1);
      if (e.key === "ArrowRight") show(current + 1);
    });

    // Swipe on phones
    var startX = null;
    box.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; }, { passive: true });
    box.addEventListener("touchend", function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
      startX = null;
    });
  }

  // ---------- Enquiry form: opens the visitor's email app with the details filled in ----------
  var form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = form.elements;
      var body =
        "Name: " + f.name.value + "\n" +
        (f.company.value ? "Company: " + f.company.value + "\n" : "") +
        "Email: " + f.email.value + "\n" +
        (f.phone.value ? "Phone: " + f.phone.value + "\n" : "") +
        "\n" + f.enquiry.value;
      window.location.href =
        "mailto:mickhowarth@gmail.com?subject=" +
        encodeURIComponent("Framing enquiry from " + f.name.value) +
        "&body=" + encodeURIComponent(body);
    });
  }

  // ---------- Footer year ----------
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
