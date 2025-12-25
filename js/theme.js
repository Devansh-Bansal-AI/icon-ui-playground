const toggleBtn = document.getElementById("themeToggle");

function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme") || "light";
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const currentTheme = document.body.classList.contains("dark")
    ? "dark"
    : "light";
  setTheme(currentTheme);
});