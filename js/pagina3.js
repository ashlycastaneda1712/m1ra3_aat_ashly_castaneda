const resultado = document.getElementById("resultadoFinal");
const btnCalcular = document.getElementById("btnCalcular");

function ejecutar(e) {
    e.preventDefault();
    const salario = parseFloat(document.getElementById('salario').value) || 0;
    const bonificacion = parseFloat(document.getElementById('bonificacion').value) || 0;
    const comisiones = parseFloat(document.getElementById('comisiones').value) || 0;

    const ahorro = parseFloat(document.getElementById('ahorro').value) || 0;
    const igss = parseFloat(document.getElementById('igss').value) || 0;
    const prest = parseFloat(document.getElementById('prestamos').value) || 0;

    const totalIngresos = salario + bonificacion + comisiones;
    const totalEgresos = ahorro + igss + prest;
    const sueldoLiquido = totalIngresos - totalEgresos;

    document.getElementById('totalGanado').innerText = totalIngresos.toFixed(2);
    document.getElementById('totalDescuentos').innerText = totalEgresos.toFixed(2);
    document.getElementById('resultadoFinal').innerText = "Q " + sueldoLiquido.toFixed(2);
}
btnCalcular.addEventListener("click", ejecutar);