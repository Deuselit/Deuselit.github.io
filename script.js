function openMenu() {
  document.getElementById("sidebarMenu").style.width = "250px";
  document.querySelector(".burger-icon").style.display = "none"; 
  document.addEventListener("click", closeMenuOnClickOutside);
}

function closeMenu() {
  document.getElementById("sidebarMenu").style.width = "0";
  setTimeout(() => { document.querySelector(".burger-icon").style.display = "block" }, 250);
  document.removeEventListener("click", closeMenuOnClickOutside);
}

function closeMenuOnClickOutside(event) {
  const sidebar = document.getElementById("sidebarMenu");
  const burgerIcon = document.querySelector(".burger-icon");
  
  if (!sidebar.contains(event.target) && !burgerIcon.contains(event.target)) {
    closeMenu();
  }
}
