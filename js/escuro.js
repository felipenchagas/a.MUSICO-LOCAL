// Enable dark mode based on saved preference
function applySavedDarkMode() {
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    }
}

// Register button click handler to toggle dark mode
function registerDarkModeToggle() {
    const toggleButton = document.getElementById('toggle-dark-mode');
    if (!toggleButton) {
        console.error('Bot\xC3\xA3o com ID "toggle-dark-mode" n\xC3\xA3o encontrado.');
        return;
    }

    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', isDarkMode);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    applySavedDarkMode();
    registerDarkModeToggle();
});
