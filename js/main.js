(function () {
  var els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  if (!("IntersectionObserver" in window)) {
    els.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  els.forEach(function (el) {
    io.observe(el);
  });
})();

(function () {
  var header = document.querySelector(".site-header");
  if (!header) return;

  var lastY = window.scrollY;
  window.addEventListener(
    "scroll",
    function () {
      var y = window.scrollY;
      var scrollingDown = y > lastY;
      header.classList.toggle(
        "header-hidden",
        scrollingDown && y > header.offsetHeight,
      );
      lastY = y;
    },
    { passive: true },
  );
})();
