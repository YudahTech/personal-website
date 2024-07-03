const navLinks = document.querySelectorAll(".nav-link");
const time = document.getElementById("utc-time");
const day = document.getElementById("day-of-week");
const barsBtn = document.querySelector(".fa-bars");
const cancelBtn = document.querySelector(".fa-xmark");
const dropdownContent = document.querySelector(".drop-down");

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
  const barsBtn = document.querySelector(".fa-bars");
  const cancelBtn = document.querySelector(".fa-xmark");
  const dropdownContent = document.querySelector(".drop-down");

  barsBtn.addEventListener("click", function () {
    dropdownContent.style.display = "block";
    cancelBtn.style.display = "inline";
    barsBtn.style.display = "none";
  });

  cancelBtn.addEventListener("click", function () {
    dropdownContent.style.display = "none";
    barsBtn.style.display = "inline";
    cancelBtn.style.display = "none";
  });

  // Close the dropdown if the user clicks outside of it
  window.addEventListener("click", function (event) {
    if (
      !event.target.matches(".fa-bars") &&
      !event.target.matches(".fa-xmark")
    ) {
      dropdownContent.style.display = "none";
      barsBtn.style.display = "inline";
      cancelBtn.style.display = "none";
    }
  });
});
