window.onload = initialize;

function initialize(){
    var formClase = document.getElementById("form-clase");
    formClase.addEventListener("submit", validateFormClase);
}


function validateFormClase(event){
    var formClase= event.target;

    if(formClase.nombre.value == ""){
        var errorNombre = document.getElementById("error-nombre");
        errorNombre.style.display = "block";
        event.preventDefault();
    } else{
        var errorNombre = document.getElementById("error-nombre");
        errorNombre.style.display = "none";
    }
    if(formClase.apellido.value == ""){
        var errorApellido = document.getElementById("error-apellido");
        errorApellido.style.display = "block";
        event.preventDefault();
    } else{
        var errorApellido = document.getElementById("error-apellido");
        errorApellido.style.display = "none";
    }
    if(formClase.email.value == ""){
        var errorEmail = document.getElementById("error-email");
        errorEmail.style.display = "block";
        event.preventDefault();
    } else{
        var errorEmail = document.getElementById("error-email");
        errorEmail.style.display = "none";
    }
    
    var optionEdad = document.getElementById("edad").value;

    if(optionEdad<=17 || optionEdad>70) {
        var errorEdad = document.getElementById("error-edad");
        errorEdad.style.display = "block";
        event.preventDefault();
    } else{
        var errorEdad = document.getElementById("error-edad");
        errorEdad.style.display = "none";
    }


    if(formClase.comment.value == ""){
        var errorComment = document.getElementById("error-comment");
        errorComment.style.display = "block";
        event.preventDefault();
    } else{
        var errorComment = document.getElementById("error-comment");
        errorComment.style.display = "none";
    }


    if(formClase.eligepj.value == ""){
        var errorEligepj = document.getElementById("error-eligepj");
        errorEligepj.style.display = "block";
        event.preventDefault();
    } else{
        var errorEligepj = document.getElementById("error-eligepj");
        errorEligepj.style.display = "none";
    }


    if(formClase.eligefav.value == ""){
        var errorEligefav = document.getElementById("error-eligefav");
        errorEligefav.style.display = "block";
        event.preventDefault();
    } else{
        var errorEligefav = document.getElementById("error-eligefav");
        errorEligefav.style.display = "none";
    }

    if(formClase.eligeepi.value == ""){
        var errorEligeepi = document.getElementById("error-eligeepi");
        errorEligeepi.style.display = "block";
        event.preventDefault();
    } else{
        var errorEligeepi = document.getElementById("error-eligeepi");
        errorEligeepi.style.display = "none";
    }

    var optionPass = document.getElementById("pass").checked;
    var optionFail = document.getElementById("fail").checked;
    if(!(optionPass || optionFail)){
        var errorPass = document.getElementById("error-gender");
        errorPass.style.display = "block";
        event.preventDefault();

    } else{
        var errorPass = document.getElementById("error-gender");
        errorPass.style.display = "none";
    }

    var optionRecosi = document.getElementById("recosi").checked;
    var optionRecono = document.getElementById("recono").checked;
    if(!(optionRecosi || optionRecono)){
        var errorRecosi = document.getElementById("error-recommendation");
        errorRecosi.style.display = "block";
        event.preventDefault();

    } else{
        var errorRecosi = document.getElementById("error-recommendation");
        errorRecosi.style.display = "none";
    }
    var optionNewssi = document.getElementById("newssi").checked;
    var optionNewsno = document.getElementById("newsno").checked;
    if(!(optionNewssi || optionNewsno)){
        var errorNewssi = document.getElementById("error-newsletter");
        errorNewssi.style.display = "block";
        event.preventDefault();

    } else{
        var errorNewssi = document.getElementById("error-newsletter");
        errorNewssi.style.display = "none";
    }


    var optionConsent = document.getElementById("consent").checked;
    if(!optionConsent){
        var errorConsent = document.getElementById("error-consent");
        errorConsent.style.display = "block";
        event.preventDefault();

    } else{
        var errorConsent = document.getElementById("error-consent");
        errorConsent.style.display = "none";
    }

}