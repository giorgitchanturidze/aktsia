const dropdownButton = document.getElementById("user-menu-button");
const dropdownMenu = document.getElementById("user-menu-dropdown");
const details = document.getElementById("details");

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
// onclick function that checks if div with id="sidebar" contains hidden class removes hidden and opacity-0 classes and adds opacity-100, if does not contain hidden class, removes opacity-100 class and adds hidden and opacity-0 classes
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.classList.contains("hidden")) {
    sidebar.classList.remove("hidden");
    sidebar.classList.add("opacity-0");
    setTimeout(() => {
      sidebar.classList.remove("opacity-0");
      sidebar.classList.add("opacity-100");
    }, 100);
  } else {
    sidebar.classList.remove("opacity-100");
    sidebar.classList.add("opacity-0");
    setTimeout(() => {
      sidebar.classList.add("hidden");
    }, 100);
  }
}

// onclick function that unhide Details sidebar when clicking on a card and showing the details of the card
document.querySelectorAll(".card").forEach(function(card) {
  card.addEventListener("click", function() {
    if (details.classList.contains("hidden")) {
      details.classList.remove("hidden");
    }
    document.querySelector("#detailed-image").src = card.getAttribute("data-details");
  });
});

function toggleDetails() {
  if (details.classList.contains("hidden")) {
    details.classList.remove("hidden");
  } else {
    details.classList.add("hidden");
  }
}