document.getElementById('btn-cadastrar').addEventListener('click', function() {
    // Carrega a caixa de alerta personalizada
    fetch('./alertBox.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('alertBox').innerHTML = data;
        document.getElementById('alertBox').style.display = "block";

        document.getElementById('btn-ok').addEventListener('click', function() {
            // Esconde a caixa de alerta personalizada
            document.getElementById('alertBox').style.display = "none";

            // Redirecionamento para a "Tela de Login"
            window.location.href = '/login';
        });
    });
});