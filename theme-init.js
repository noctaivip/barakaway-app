(function () {
  const savedTheme = localStorage.getItem("siteTheme");

  if (savedTheme === "light") {
    document.documentElement.classList.add("light-mode");
  } else {
    document.documentElement.classList.add("dark-mode");
    localStorage.setItem("siteTheme", "dark");
  }
})();