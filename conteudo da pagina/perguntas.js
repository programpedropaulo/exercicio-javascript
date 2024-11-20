// Seleciona o formulário pelo ID
const form = document.getElementById("formFeedback");

// Adiciona um evento de escuta para o envio do formulário
form.addEventListener("submit", function (event) {
    // Impede o envio padrão do formulário
    event.preventDefault();

    // Obtém os valores dos campos do formulário
    const nome = document.getElementById("pergunta1").value.trim();
    const idade = document.getElementById("pergunta2").value.trim();
    const opiniao = document.getElementById("pergunta3").value.trim();

    // Verificação simples dos campos
    if (!nome || !idade || !opiniao) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (isNaN(idade) || idade <= 0) {
        alert("Por favor, insira uma idade válida.");
        return;
    }

    // Exibe os dados no console (ou pode enviar via fetch/axios para um servidor)
    console.log("Nome:", nome);
    console.log("Idade:", idade);
    console.log("Opinião:", opiniao);

    // Exibe uma mensagem de sucesso
    alert("Obrigado pelo feedback!");

    // Aqui você pode enviar os dados para o servidor com fetch/axios se necessário
    // Por exemplo:
    // fetch('/enviar-resposta', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ nome, idade, opiniao })
    // });

    // Opcional: Reinicia o formulário
    form.reset();
});
