document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const nav = document.getElementById('nav');
    
    menuButton.addEventListener('click', function() {
        // Alterna a classe 'active' no menu
        nav.classList.toggle('active');
        
        // Alterna o ícone entre barras e "X"
        if (nav.classList.contains('active')) {
            menuButton.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            menuButton.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Fechar o menu quando um item for clicado
    const navLinks = document.querySelectorAll('#nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuButton.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
});