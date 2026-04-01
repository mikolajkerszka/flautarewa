document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.querySelector('.theme-switch');
    const body = document.body;

    // Funkcja do zmiany motywu
    const toggleTheme = () => {
        body.classList.toggle('dark-mode');
        const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    };

    // Sprawdź i zastosuj zapisany motyw
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    // Nasłuchiwanie na kliknięcie przełącznika motywu
    if (themeSwitch) {
        themeSwitch.addEventListener('click', toggleTheme);
    }

    // Obsługa przełącznika języka
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            // Usuń klasę 'active' ze wszystkich opcji
            langOptions.forEach(opt => opt.classList.remove('active'));
            // Dodaj klasę 'active' do klikniętej opcji
            e.target.classList.add('active');
            // W przyszłości tutaj można dodać logikę zmiany języka
            // np. na podstawie atrybutu data-lang
        });
    });
});
