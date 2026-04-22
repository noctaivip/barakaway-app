(function () {
  const switchEl = document.getElementById("themeSwitch");
  const label = document.querySelector(".theme-toggle-label");

  if (!switchEl) return;

  function applyTheme(theme) {
    document.documentElement.classList.remove("light-mode", "dark-mode");
    document.documentElement.classList.add(theme + "-mode");
    localStorage.setItem("siteTheme", theme);

    switchEl.checked = theme === "light";

    if (label) {
      label.textContent = theme === "dark" ? "Light mode" : "Dark mode";
    }
  }

  const savedTheme = localStorage.getItem("siteTheme") || "dark";
  applyTheme(savedTheme);

  switchEl.addEventListener("change", function () {
    applyTheme(this.checked ? "light" : "dark");
  });
})();