function Calculate(){

    console.log("teste")
    height = parseFloat(document.getElementById("height").value);
    weight = parseFloat(document.getElementById("weight").value);

    let imc = (weight / (height * height)).toFixed(1);
    ShowMessage(imc);
}

function ShowMessage(imc){

    let message = "";
    if(imc < 18.5){
        message = "Voce esta abaixo do peso";
    }else if(imc < 24.9){
        message = "Voce esta no peso normal";

    }else if(imc < 29.9){
        message = "Voce esta acima do peso";

    }else if(imc < 34.9){
        message = "Voce esta com obesidade grau I";

    }else if(imc < 39.9){
        message = "Voce esta com obesidade grau II";

    }else{
        message = "Voce esta com obesidade grau III";
 
    }

    document.getElementById("message").textContent = `Seu IMC é ${imc}. ${message}`;

}
window.onload = function (){

    document.querySelector("button").addEventListener("click", Calculate)

}
