const form = document.getElementById('cadastroForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const dados = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value
    };

    const resposta = await fetch('/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    });

    const resultado = await resposta.json();

    document.getElementById('mensagem').textContent =
        resultado.mensagem;
});