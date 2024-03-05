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
    // Adiciona um evento de clique para todos os links com a classe "links"
    var links = document.querySelectorAll('.links');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link
            
            // Obtém o ID da seção a ser scrollada do atributo data-id do link
            var targetId = this.getAttribute('data-id');
            
            // Obtém a posição da seção alvo
            var targetSection = document.getElementById(targetId);
            var targetPosition = targetSection.offsetTop;
            
            // Realiza o scroll suave até a seção alvo
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});