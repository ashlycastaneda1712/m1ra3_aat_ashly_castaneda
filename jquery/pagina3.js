const btnPromedio = document.querySelector("#btnPromedio");
const btnLetras = document.querySelector("#btnLetras");
const resultado = document.querySelector("#resultado");
function ejecutar(e) {
    e.preventDefault();
    let nombre = document.querySelector("#nombre").value;
    let nota1 = parseFloat(document.querySelector("#n1").value) || 0;
    let nota2 = parseFloat(document.querySelector("#n2").value) || 0;
    let nota3 = parseFloat(document.querySelector("#n3").value) || 0;
    let suma = nota1 + nota2 + nota3;
    let promedio = suma / 3;
    let estado = "";
    if (promedio >= 70) {
        estado = "Aprobado";
    } else {
        estado = "Reprobado";
    }
    document.getElementById("resultado").innerHTML = " El promedio es: " + promedio + " <br>" + estado;
}
function ejecutar2(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const cantidadCaracteres = nombre.length;
    document.getElementById('resultado').innerText = "Largo del nombre: " + cantidadCaracteres;
}
btnPromedio.addEventListener("click", ejecutar);
btnLetras.addEventListener("click", ejecutar2);
