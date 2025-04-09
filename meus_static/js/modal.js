// 1. Selecionar os elementos
const abrirModalBtn = document.querySelector('.abrir_modal_sobre');
const modalContainer = document.querySelector('.modal-container');
const modalConteudo = document.querySelector('.modal_conteudo');

// 2. Função para abrir o modal
function abrirModal() {
    modalContainer.style.opacity = '1';
    modalContainer.style.pointerEvents = 'auto';
}

// 3. Função para fechar o modal
function fecharModal() {
    modalContainer.style.opacity = '0';
    modalContainer.style.pointerEvents = 'none';
}

// 4. Event Listeners
abrirModalBtn.addEventListener('click', abrirModal);

modalContainer.addEventListener('click', (event) => {
    // Verifica se o clique foi fora do conteúdo do modal
    if (!modalConteudo.contains(event.target)) {
        fecharModal();
    }
});

// // Exemplo com AJAX
// $.ajax({
//     url: 'modal/sobre/',
//     type: 'GET',
//     success: function(response) {
//         // Insere o HTML do modal no DOM
//         $('#container-do-modal').html(response.html_modal);
        
//         // Abre o modal (exemplo com Bootstrap)
//         $('#meuModal').modal('show');
//     }
// });