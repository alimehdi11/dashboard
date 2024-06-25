let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebar-btn");

const toggleSidebar = () =>{
  sidebar.classList.toggle("active")
}

sidebarBtn.addEventListener("click",toggleSidebar);