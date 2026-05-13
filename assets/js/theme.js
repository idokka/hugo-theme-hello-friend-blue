// Toggle theme

const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.classList.contains("dark-theme") ? "dark-theme" : "light-theme";
  const newTheme = (currentTheme === "dark-theme") ? "light-theme" : "dark-theme";
  document.documentElement.className = newTheme;
  window.localStorage && window.localStorage.setItem("theme", newTheme);
});
