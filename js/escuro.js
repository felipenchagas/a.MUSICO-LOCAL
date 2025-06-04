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

<!-- Botão e Balão -->
<a href="https://wa.me/554198205307" class="zap-glass" target="_blank" aria-label="Fale com um de nossos agentes">
   <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg" alt="WhatsApp">
</a>
<div class="zap-msg-bubble">💬 Precisa de ajuda jurídica?<br><strong>Fale com um de nossos agentes agora mesmo!</strong></div>
      <!-- Botão e Balão -->
<a href="https://wa.me/554198205307" class="zap-glass" target="_blank" aria-label="Fale com um de nossos agentes">
   <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg" alt="WhatsApp">
</a><div class="zap-msg-bubble">💬 Precisa de ajuda jurídica?<br><strong>Fale com um de nossos agentes agora mesmo!</strong></div>
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
