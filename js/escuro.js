// Verifica o estado armazenado no localStorage ao carregar a página
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Adiciona o evento de clique ao botão
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-dark-mode');

    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            // Alterna a classe 'dark-mode' no <body>

            document.body.classList.toggle('dark-mode');

            // Salva o estado no localStorage
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('dark-mode', isDarkMode);

            // Log para verificar funcionamento
            console.log('Modo escuro alternado:', isDarkMode);
        });
    } else {
        console.error('Botão com ID "toggle-dark-mode" não encontrado.');
    }
});
