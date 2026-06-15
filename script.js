// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona todos os botões de adicionar ao carrinho
    const buttons = document.querySelectorAll('.add-to-cart');

    // Adiciona evento de clique em cada botão
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Captura o nome do produto (está no h3 anterior ao botão)
            const productName = button.parentElement.querySelector('h3').innerText;
            
            // Simula a adição ao carrinho
            adicionarAoCarrinho(productName);
        });
    });

    /**
     * Função para mostrar feedback ao usuário
     * @param {string} nome 
     */
    function adicionarAoCarrinho(nome) {
        // Exibe um alerta simples (pode ser substituído por um modal/toast)
        alert(`${nome} foi adicionado ao seu carrinho com sucesso! 🌸`);
        
        // Log no console para conferência do desenvolvedor
        console.log(`Log: Item "${nome}" enviado para a fila de pedidos.`);
    }
});