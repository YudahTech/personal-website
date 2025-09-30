const navLinks = document.querySelectorAll(".nav-link");
const time = document.getElementById("utc-time");
const day = document.getElementById("day-of-week");
const barsBtn = document.querySelector(".fa-bars");
const cancelBtn = document.querySelector(".fa-xmark");
const dropdownContent = document.querySelector(".drop-down");
const menuToggle = document.querySelector(".menu-toggle");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    navLinks.forEach((navLink) => navLink.classList.remove("active"));
    this.classList.add("active");
  });
});

function updateUTCTime() {
  const now = new Date();
  const utcTime = now.toUTCString();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = dayNames[now.getUTCDay()];

  time.innerText = `${utcTime}`;
  day.innerText = `${dayOfWeek}`;
}

updateUTCTime();
setInterval(updateUTCTime, 1000);

document.addEventListener("DOMContentLoaded", function () {
  // Show dropdown when hamburger clicked
  menuToggle.addEventListener("click", function (event) {
    event.stopPropagation(); // prevent the click from bubbling up
    dropdownContent.classList.toggle("show");
    menuToggle.classList.toggle("open");
  });

  // Hide dropdown if user clicks outside
  window.addEventListener("click", function (event) {
    if (
      !event.target.closest(".menu-toggle") &&
      !event.target.closest(".drop-down")
    ) {
      dropdownContent.classList.remove("show");
      menuToggle.classList.remove("open");
    }
  });

  // Also handle individual close when xmark clicked
  cancelBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdownContent.classList.remove("show");
    menuToggle.classList.remove("open");
  });
});
