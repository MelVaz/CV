
//responsividad barra de navegacion
var menu_btn = document.querySelector("#menu-btn"); //meno de barra
var sidebar = document.querySelector("#sidebar"); //barra lateral
var container = document.querySelector(".main"); // contenedor
//al hacer click se genera la accion del boton de la barra
menu_btn.addEventListener("click", () => { 
  sidebar.classList.toggle("active-nav"); //barra de navegacion
  container.classList.toggle("active-cont"); //contenedor
});

