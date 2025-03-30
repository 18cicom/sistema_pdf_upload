document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Aqui você pode validar as credenciais do usuário
    if (username === "admin" && password === "12345") {
        alert("Login bem-sucedido!");
        // Redireciona para a página de PDFs
        window.location.href = "pdfs.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
});