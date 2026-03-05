const toggle = document.getElementById('menuToggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
    });
});

function alternarTema() {
    document.body.classList.toggle('dark-mode');

    // Salvar escolha no navegador
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem("tema", "dark");
    } else {
        localStorage.setItem("tema", "light");
    }
}

