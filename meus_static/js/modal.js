// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    // 1. Encontra o container do modal de forma segura
    const modalContainer = document.getElementById('modal_body');
    
    // 2. Verifica se o modal existe antes de continuar
    if (!modalContainer) {
        console.error('ERRO: Elemento com ID "modal_body" não encontrado!');
        console.error('Verifique se existe um elemento com id="modal_body" no HTML');
        return; // Sai da função se o modal não existir
    }
    
    // 3. Função para fechar o modal
    const fecharModal = () => {
        modalContainer.style.opacity = '0';
        modalContainer.style.pointerEvents = 'none';
    };
    
    // 4. Configura o clique fora do conteúdo para fechar
    modalContainer.addEventListener('click', function(e) {
        const conteudoModal = modalContainer.querySelector('.modal_conteudo');
        if (conteudoModal && !conteudoModal.contains(e.target)) {
            fecharModal();
        }
    });
    
    // 5. Configura todos os botões que abrem modais
    document.querySelectorAll('[data-modal-url]').forEach(botao => {
        botao.addEventListener('click', function() {
            const url = this.getAttribute('data-modal-url');
            
            // Mostra estado de carregamento
            modalContainer.innerHTML = '<div class="loader">Carregando...</div>';
            modalContainer.style.opacity = '1';
            modalContainer.style.pointerEvents = 'auto';
            
            // Faz a requisição AJAX
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.html_form) {
                        // Insere o conteúdo no modal
                        modalContainer.innerHTML = data.html_form;
                        
                        // Configura botão de fechar se existir
                        const botaoFechar = modalContainer.querySelector('.fechar-modal');
                        if (botaoFechar) {
                            botaoFechar.addEventListener('click', fecharModal);
                        }
                    }
                })
                .catch(error => {
                    console.error('Erro ao carregar o modal:', error);
                    modalContainer.innerHTML = '<div class="erro">Falha ao carregar conteúdo</div>';
                    setTimeout(fecharModal, 2000);
                });
        });
    });
    
    // 6. Fecha o modal com tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.style.opacity === '1') {
            fecharModal();
        }
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//     const abrirModalBtn = document.querySelector('#abrir_modal_sobre');
//     const modalContainer = document.querySelector('#modal_body');

//     abrirModalBtn.addEventListener('click', function () {
//         // Faz a requisição AJAX
//         $.ajax({
//             url: '/modal/sobre/',
//             type: 'GET',
//             success: function (response) {
//                 // Insere o HTML retornado no modal
//                 modalContainer.innerHTML = response.html_form;

//                 // Mostra o modal (ajuste conforme sua lógica de exibição)
//                 modalContainer.style.opacity = '1';
//                 modalContainer.style.pointerEvents = 'auto';

//                 // Adiciona listener de clique para fechar ao clicar fora
//                 const modalConteudo = modalContainer.querySelector('.modal_conteudo');
//                 modalContainer.addEventListener('click', function (event) {
//                     if (!modalConteudo.contains(event.target)) {
//                         modalContainer.style.opacity = '0';
//                         modalContainer.style.pointerEvents = 'none';
//                     }
//                 });
//             },
//             error: function (xhr, status, error) {
//                 console.error('Erro ao carregar o modal:', error);
//             }
//         });
//     });
// });




