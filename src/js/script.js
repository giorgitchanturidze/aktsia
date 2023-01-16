const dropdownButton = document.getElementById("user-menu-button");
const dropdownMenu = document.getElementById("user-menu-dropdown");

dropdownButton.addEventListener("click", function() {
  if (dropdownMenu.classList.contains("hidden")) {
    dropdownMenu.classList.remove("hidden");
    dropdownMenu.classList.add("transition", "ease-out", "duration-100", "transform", "opacity-0", "scale-95");
    setTimeout(() => {
      dropdownMenu.classList.remove("transform", "opacity-0", "scale-95");
      dropdownMenu.classList.add("transform", "opacity-100", "scale-100");
    }, 100);
  } else {
    dropdownMenu.classList.remove("transform", "opacity-100", "scale-100");
    dropdownMenu.classList.add("transition", "ease-in", "duration-75", "transform", "opacity-0", "scale-95");
    setTimeout(() => {
      dropdownMenu.classList.add("hidden");
    }, 75);
  }
});

document.addEventListener("click", function(event) {
  if (!dropdownMenu.contains(event.target) && !dropdownButton.contains(event.target)) {
    if (!dropdownMenu.classList.contains("hidden")) {
      dropdownMenu.classList.add("transition", "ease-in", "duration-75");
      dropdownMenu.classList.add("transform", "opacity-0", "scale-95");
      setTimeout(() => {
        dropdownMenu.classList.add("hidden");
        dropdownMenu.classList.remove("transform", "opacity-0", "scale-95");
      }, 75);
    }
  }
});
