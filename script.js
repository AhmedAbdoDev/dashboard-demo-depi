const toggleBtn = document.querySelector(".toggle-sidebar");
const sidebar = document.querySelector(".sidebar");
const links = document.querySelectorAll(".sidebar a[data-target]");
const sections = document.querySelectorAll(".main-content .section");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("data-target");
    sections.forEach((section) => {
      section.style.display = "none";
    });
    document.getElementById(targetId).style.display = "block";
    // sidebar.classList.remove("active");
  });
});
sections.forEach((section) => (section.style.display = "none"));
document.getElementById("overview").style.display = "block";
