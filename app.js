const logIn = document.getElementById("logIn");
const signUp = document.getElementById("signUp");
const btnlogIn = document.getElementById("btnlogIn");
const btnSignUp = document.getElementById("btnSignUp");

btnSignUp.addEventListener("click", function(){
    document.getElementById("signUp").style.display = "flex";
    document.getElementById("logIn").style.display = "none";
});

btnLogIn.addEventListener("click", function(){
    document.getElementById("logIn").style.display = "flex";
    document.getElementById("signUp").style.display = "none";
    
});

// cart

