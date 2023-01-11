const userMenuButton = document.getElementById("user-menu-button");
const userMenuDropdown = document.getElementById("user-menu-dropdown");

userMenuButton.addEventListener("click", function() {
  userMenuDropdown.classList.toggle("hidden");

  if (userMenuDropdown.classList.contains("hidden")) {
    userMenuDropdown.classList.add("ease-in", "duration-75", "opacity-0", "scale-95");
    userMenuDropdown.classList.remove("ease-out", "duration-100", "opacity-100", "scale-100");
  } else {
    userMenuDropdown.classList.add("ease-out", "duration-100", "opacity-100", "scale-100");
    userMenuDropdown.classList.remove("ease-in", "duration-75", "opacity-0", "scale-95");
  }
});




