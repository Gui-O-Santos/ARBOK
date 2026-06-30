const form = document.getElementById('cadastroForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const dados = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value
    };

    try {
        const resposta = await fetch('https://47dsr02q-3000.use2.app.github.dev/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });

        const resultado = await resposta.json();

        document.getElementById('mensagem').textContent = resultado.mensagem;

    } catch (erro) {
        console.error(erro);
        document.getElementById('mensagem').textContent =
            'Não foi possível conectar ao servidor.';
    }
});