(function () {
  var GTM_ID = "GTM-N74J7W2H";
  var KEY = "ga-consent";

  function read() {
    try {
      return localStorage.getItem(KEY);
    } catch (e) {
      return null;
    }
  }
  function write(v) {
    try {
      localStorage.setItem(KEY, v);
    } catch (e) {}
  }

  function loadGTM() {
    if (window.__gtmLoaded) return;
    window.__gtmLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      "gtm.start": new Date().getTime(),
      event: "gtm.js",
    });
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtm.js?id=" + GTM_ID;
    document.head.appendChild(s);
  }

  function show() {
    if (document.querySelector(".cc")) return;
    var b = document.createElement("div");
    b.className = "cc";
    b.setAttribute("role", "region");
    b.setAttribute("aria-label", "Cookie consent");
    b.innerHTML =
      "<p>This site uses cookies for analytics. Is that okay?</p>" +
      '<div class="cc-actions">' +
      '<button type="button" class="btn" data-v="yes">Accept </button>' +
      '<button type="button" class="btn alt" data-v="no">Decline</button>' +
      "</div>";
    b.addEventListener("click", function (e) {
      var v = e.target.getAttribute("data-v");
      if (!v) return;
      write(v);
      b.remove();
      if (v === "yes") loadGTM();
      else if (window.__gtmLoaded) location.reload();
    });
    document.body.appendChild(b);
  }

  function init() {
    var c = read();
    if (c === "yes") loadGTM();
    else if (!c) show();
    var link = document.getElementById("cookie-settings");
    if (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        show();
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
