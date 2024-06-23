document.addEventListener("DOMContentLoaded", function () {
  const darkModeSwitch = document.getElementById("switchButton");
  const iconElement = document.querySelector("#switchButton i");
  const body = document.body;

  darkModeSwitch.addEventListener("click", function () {
    if (body.hasAttribute("data-bs-theme")) {
      // light
      body.removeAttribute("data-bs-theme");
      iconElement.classList.remove("fa-sun");
      iconElement.classList.add("fa-moon");
    } else {
      // dark
      body.setAttribute("data-bs-theme", "dark");
      iconElement.classList.add("fa-sun");
      iconElement.classList.remove("fa-moon");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const darkModeSwitch = document.getElementById("switchButton2");
  const iconElement = document.querySelector("#switchButton2 i");
  const body = document.body;

  darkModeSwitch.addEventListener("click", function () {
    if (body.hasAttribute("data-bs-theme")) {
      // light
      body.removeAttribute("data-bs-theme");
      iconElement.classList.remove("fa-sun");
      iconElement.classList.add("fa-moon");
    } else {
      // dark
      body.setAttribute("data-bs-theme", "dark");
      iconElement.classList.add("fa-sun");
      iconElement.classList.remove("fa-moon");
    }
  });
});
