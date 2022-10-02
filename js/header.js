document.addEventListener("DOMContentLoaded", function(){
   /// Prevent closing from click inside dropdown
   document.querySelectorAll('.dropdown-menu').forEach(function(element){
      element.addEventListener('click', function (e) {
         e.stopPropagation();
      });
   })
}); 

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => {
      bsCollapse.toggle() 
   }
   )})