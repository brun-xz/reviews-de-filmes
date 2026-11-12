
document.querySelectorAll('.carrossel').forEach(carrossel => {

    const filmes = carrossel.querySelector('.filmes');
    const esquerda = carrossel.querySelector('.esquerda');
    const direita = carrossel.querySelector('.direita');

    direita.addEventListener('click', () => {
        filmes.scrollBy({
            left: 450,
            behavior: 'smooth'
        });
    });

    esquerda.addEventListener('click', () => {
        filmes.scrollBy({
            left: -450,
            behavior: 'smooth'
        });
    });

});
