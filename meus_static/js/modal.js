// // 1. Selecionar os elementos
// const abrirModalBtn = document.querySelector('.abrir_modal_sobre');
// const modalContainer = document.querySelector('.modal-container');
// const modalConteudo = document.querySelector('.modal_conteudo');

// // 2. Função para abrir o modal
// function abrirModal() {
//     modalContainer.style.opacity = '1';
//     modalContainer.style.pointerEvents = 'auto';
// }

// // 3. Função para fechar o modal
// function fecharModal() {
//     modalContainer.style.opacity = '0';
//     modalContainer.style.pointerEvents = 'none';
// }

// // 4. Event Listeners
// abrirModalBtn.addEventListener('click', abrirModal);

// modalContainer.addEventListener('click', (event) => {
//     // Verifica se o clique foi fora do conteúdo do modal
//     if (!modalConteudo.contains(event.target)) {
//         fecharModal();
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    const botoesAbrirModal = document.querySelectorAll('.abrir-modal');

    botoesAbrirModal.forEach(botao => {
        botao.addEventListener('click', () => {
            const url = botao.getAttribute('data-url');

            fetch(url)
                .then(response => response.text())
                .then(html => {
                    const container = document.createElement('div');
                    container.innerHTML = html;

                    // Adiciona o modal no body
                    document.body.appendChild(container);

                    const modalContainer = container.querySelector('.modal-container');
                    const modalConteudo = container.querySelector('.modal_conteudo');

                    modalContainer.style.opacity = '1';
                    modalContainer.style.pointerEvents = 'auto';

                    // Fecha o modal ao clicar fora
                    modalContainer.addEventListener('click', (event) => {
                        if (!modalConteudo.contains(event.target)) {
                            modalContainer.style.opacity = '0';
                            modalContainer.style.pointerEvents = 'none';
                            setTimeout(() => container.remove(), 300);
                        }
                    });
                })
                .catch(error => {
                    console.error('Erro ao carregar modal:', error);
                });
        });
    });
});
