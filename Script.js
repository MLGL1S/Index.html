let logged = false;

// Вход
document.getElementById("login-btn").onclick = () => {
  logged = true;
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("app").style.display = "block";
  document.getElementById("nav").style.display = "flex";
  openPage("market");
};

// Переходы между страницами
function openPage(page) {
  if (!logged) return alert("Сначала войдите!");
  document.querySelectorAll(".page").forEach(p => p.style.display = "none");
  document.getElementById(page).style.display = "block";

  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".nav-btn")[ ["market","inventory","balance","profile"].indexOf(page) ].classList.add("active");
}
