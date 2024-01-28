const greetingText = document.querySelector('#greeting');
const data = new Date();
const hora = greeting(data.getHours());

console.log(data.getHours());

function greeting(horaAtual){
    let message;

    if (horaAtual >= 6 && horaAtual <= 11) {
        message = 'Bom dia!';
    } else if (horaAtual >= 12 && horaAtual <= 18) {
        message = 'Boa tarde!'; 
    } else if (horaAtual >= 19 || horaAtual <= 23) {
        message = 'Boa Noite!'; 
    } else if (horaAtual >= 1 || horaAtual <= 5) {
        message = 'Boa Madrugada!'; 
    } 
   
    showGreeting(message);
}

function showGreeting(message){
   greetingText.innerHTML = message;
}

