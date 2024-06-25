let sidebars = document.querySelectorAll(".sidebar");
let sidebarBtns = document.querySelectorAll(".sidebar-btn");

const toggleSidebar = () =>{
  sidebars[0].classList.toggle("active")
  sidebars[1].classList.toggle("active")
}
for(let btn of sidebarBtns){
  btn.addEventListener("click",toggleSidebar);
}