function openNav() {
  document.getElementById("mySidenav").style.width = "270px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const active = document.querySelectorAll('.inactive');

active.addEventListener('click',()=>{
  active.classList.toggle(".active")
})

