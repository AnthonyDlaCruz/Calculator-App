//MODO OSCURO//
const toggleDarkMode = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");

  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
};

document
  .querySelector("#darkModeToggle")
  .addEventListener("click", toggleDarkMode);

localStorage.setItem("theme", "dark"); // o "light"

// Recuperar la preferencia
const userPreferredTheme = localStorage.getItem("theme");

if (userPreferredTheme) {
  document.documentElement.setAttribute("data-theme", userPreferredTheme);
}
