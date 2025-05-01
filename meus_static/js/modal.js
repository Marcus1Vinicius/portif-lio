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

document.addEventListener('DOMContentLoaded', function () {
    const abrirModalBtn = document.querySelector('#abrir_modal_projetos');
    const modalContainer = document.querySelector('#modal_body');

    abrirModalBtn.addEventListener('click', function () {
        // Faz a requisição AJAX
        $.ajax({
            url: '/modal/projetos/',
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



