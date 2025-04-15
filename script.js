document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-bar a');
    const menuCheckbox = document.getElementById('menu-active');

    links.forEach(link => {
        link.addEventListener('click', function() {
            if (menuCheckbox.checked) {
                menuCheckbox.checked = false;
            }
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


});


function onClick(element) {
    document.getElementById("full-size").src = element.src;
    document.getElementById("full-size-pic").style.display = "block";
}   
   
 
window.addEventListener('load', () => {
    setTimeout(() => {
      const overlay = document.getElementById('websiteOverlay');
      if (overlay) {
        overlay.remove();
      }
    }, 1500);
  });