document.getElementById("dashboard").style.display = "none";

function login() {
  document.getElementById("login").style.display = "none";
  document.getElementById("dashboard").style.display = "block";
  showSection("training");
}

function showSection(id) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => section.style.display = "none");
  document.getElementById(id).style.display = "block";
}
