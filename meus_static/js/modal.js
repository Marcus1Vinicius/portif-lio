document.addEventListener('DOMContentLoaded', function () {
    const abrirModalBtn = document.querySelector('#abrir_modal_sobre');
    const modalContainer = document.querySelector('#modal_body');

    abrirModalBtn.addEventListener('click', function () {
        // Faz a requisição AJAX
        $.ajax({
            url: '/modal/sobre/',
            type: 'GET',
            success: function (response) {
                // Insere o HTML retornado no modal
                modalContainer.innerHTML = response.html_form;

                // Mostra o modal (ajuste conforme sua lógica de exibição)
                modalContainer.style.opacity = '1';
                modalContainer.style.pointerEvents = 'auto';

                // Adiciona listener de clique para fechar ao clicar fora
                const modalConteudo = modalContainer.querySelector('.modal_conteudo');
                modalContainer.addEventListener('click', function (event) {
                    if (!modalConteudo.contains(event.target)) {
                        modalContainer.style.opacity = '0';
                        modalContainer.style.pointerEvents = 'none';
                    }
                });
            },
            error: function (xhr, status, error) {
                console.error('Erro ao carregar o modal:', error);
            }
        });
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//     const modalContainer = document.querySelector('#modal_body');

//     function abrirModal(botaoId, url) {
//         const botao = document.querySelector(botaoId);

//         if (!botao) return;

//         botao.addEventListener('click', function () {
//             $.ajax({
//                 url: url,
//                 type: 'GET',
//                 success: function (response) {
//                     modalContainer.innerHTML = response.html_form;
//                     modalContainer.style.opacity = '1';
//                     modalContainer.style.pointerEvents = 'auto';

//                     const modalConteudo = modalContainer.querySelector('.modal_conteudo');

//                     modalContainer.addEventListener('click', function (event) {
//                         if (!modalConteudo.contains(event.target)) {
//                             modalContainer.style.opacity = '0';
//                             modalContainer.style.pointerEvents = 'none';
//                         }
//                     });
//                 },
//                 error: function (xhr, status, error) {
//                     console.error('Erro ao carregar o modal:', error);
//                 }
//             });
//         });
//     }

//     abrirModal('#abrir_modal_sobre', '/modal/sobre/');
//     abrirModal('#abrir_modal_projetos', '/modal/projetos/');
//     abrirModal('#abrir_modal_skills', '/modal/skills/');
//     abrirModal('#abrir_modal_redes', '/modal/redes/');
//     abrirModal('#abrir_modal_formacoes', '/modal/formacoes/');
// });



