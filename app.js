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

barsBtn.addEventListener("click", function () {
  dropdownContent.classList.remove("hide");
  cancelBtn.classList.remove("hide");
  barsBtn.classList.add("hide");
});

cancelBtn.addEventListener("click", function () {
  dropdownContent.classList.add("hide");
  barsBtn.classList.remove("hide");
  cancelBtn.classList.add("hide");
});

//   Close the dropdown if the user clicks outside of it
window.addEventListener("click", function (event) {
  if (!event.target.matches(".fa-bars") && !event.target.matches(".fa-xmark")) {
    dropdownContent.classList.add("hide");
    barsBtn.classList.remove("hide");
    cancelBtn.classList.add("hide");
  }
});
