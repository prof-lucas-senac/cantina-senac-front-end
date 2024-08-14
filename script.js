// Função para mostrar um alerta
function showAlert() {
    alert('Você clicou no botão!');
}

// Função para atualizar o texto do parágrafo
function updateText() {
    document.getElementById('responseText').textContent = 'Obrigado por clicar!';
}

// Adiciona um evento ao botão
document.getElementById('alertButton').addEventListener('click', function() {
    showAlert();
    updateText();
});
