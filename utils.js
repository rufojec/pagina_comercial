function changeTrip(message) {
    document.getElementById("trip").textContent = message;
}

// necesito imprimir primero tick y despues tock
let auxiliar = true;

function ticktok() {
    if (auxiliar === true) {
        console.log('tick');
    } else {
        console.log('tock');
    }
    auxiliar = !auxiliar;
}