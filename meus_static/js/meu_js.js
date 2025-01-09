// // Seleciona todos os elementos com a classe "hidden"
// const elementos = document.querySelectorAll('.hidden');

// // Cria um observador para monitorar quando os elementos entram ou saem da viewport
// const myObserver = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         // Verifica se o elemento está visível na viewport
//         if(entry.isIntersecting){
//             // Adiciona a classe "show" para o elemento visível
//             entry.target.classList.add('show');
//         } else {
//             // Remove a classe "show" para o elemento que saiu da viewport
//             entry.target.classList.remove('show');
//         }
//     });
// });

// // Observa cada elemento selecionado
// elementos.forEach((elementos) => myObserver.observe(elementos));

// // Adiciona um ouvinte de evento ao rolar a página
// window.addEventListener("scroll", function(){
//     // Seleciona o elemento com ID "header"
//     let header = document.querySelector('#header');
//     // Adiciona ou remove a classe "rolagem" com base na posição do scroll
//     header.classList.toggle('rolagem', window.scrollY > 0);
// });

// // Aguarda o carregamento completo do DOM
// document.addEventListener("DOMContentLoaded", function() {
//     // Seleciona todos os links com a classe "links"
//     var links = document.querySelectorAll('.links');
//     links.forEach(function(link) {
//         // Adiciona um ouvinte de clique para cada link
//         link.addEventListener('click', function(event) {
//             // Previne o comportamento padrão do link
//             event.preventDefault();
//             // Obtém o valor do atributo "data-id" do link
//             var targetId = this.getAttribute('data-id');
            
//             // Obtém o elemento correspondente ao ID especificado
//             var targetSection = document.getElementById(targetId);
            
//             // Verifica se o elemento com o ID especificado existe
//             if (targetSection) {
//                 // Obtém a posição do elemento alvo em relação ao topo da página
//                 var targetPosition = targetSection.offsetTop;
                
//                 // Faz o scroll suave até a posição do elemento alvo
//                 window.scrollTo({
//                     top: targetPosition,
//                     behavior: 'smooth'
//                 });
//             } else {
//                 // Exibe uma mensagem de erro no console se o elemento não for encontrado
//                 console.error("Elemento com o ID especificado não encontrado.");
//             }
//         });
//     });
// });

// // Seleciona o ícone do menu hamburguer e o menu de navegação
// const hamburguer = document.querySelector(".hamburguer");
// const navmenu = document.querySelector(".nav-menu");

// // Adiciona um ouvinte de clique ao ícone do menu hamburguer
// hamburguer.addEventListener("click", () => {
//     // Alterna a classe "active" no ícone e no menu de navegação
//     hamburguer.classList.toggle("active");
//     navmenu.classList.toggle("active");
// });


