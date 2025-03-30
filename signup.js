document.getElementById("signupForm").addEventListener("submit", function(event){
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;

    // Lógica de validação ou requisição para um servidor
    alert("Cadastro realizado com sucesso!");
});