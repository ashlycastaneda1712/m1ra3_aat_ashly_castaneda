document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario");
    const tabla = document.getElementById("tablaCuerpo");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const fecha = document.getElementById("fecha").value;
        const puesto = document.getElementById("puesto").value;
        const salario = document.getElementById("salario").value;

        const nuevaFila = tabla.insertRow();
        nuevaFila.innerHTML = `
        <td>${nombre}</td>
        <td>${fecha}</td>
        <td>${puesto}</td>
        <td>${salario}</td>
        `;
        form.reset();
    });
    document.getElementById("btnEliminarPrimero").addEventListener("click", () => {
        if (tabla.rows.length > 0) {
            tabla.deleteRow(0);
        }
    });
    document.getElementById("btnEliminarUltimo").addEventListener("click", () => {
        if (tabla.rows.length > 0) {
            tabla.deleteRow(tabla.rows.length - 1);
        }
    })
});
