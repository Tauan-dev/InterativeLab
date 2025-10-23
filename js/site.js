// site-wide JS: menu toggle and small behaviors
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('menu-h');
  if(toggle && menu){
    toggle.addEventListener('click', function(){
      const visible = menu.classList.toggle('show');
      toggle.setAttribute('aria-expanded', visible);
    });
  }
});
