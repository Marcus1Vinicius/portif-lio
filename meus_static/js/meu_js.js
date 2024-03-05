const elementos = document.querySelectorAll('.hidden')

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else{
            entry.target.classList.remove('show')
        }
    })
})

elementos.forEach((elementos) => myObserver.observe(elementos))


window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.links');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            var targetId = this.getAttribute('data-id');
            
            var targetSection = document.getElementById(targetId);
            
            // Verificar se o elemento com o ID especificado existe
            if (targetSection) {
                var targetPosition = targetSection.offsetTop;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            } else {
                console.error("Elemento com o ID especificado não encontrado.");
            }
        });
    });
});


const hamburguer = document.querySelector(".hamburguer");
const navmenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navmenu.classList.toggle("active");
});
