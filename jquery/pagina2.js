$(document).ready(function () {
    let contador = 4;

    $('#btnAgregar').click(function () {
        let nuevoCarnet = "2024-" + contador.toString().padStart(4, '0');
        let nuevoNombre = "Falso Adicionado " + contador;
        let nuevoCorreo = "falso" + contador + "@micorreo.com.gt";
        let nuevaFila = `
                    <tr>
                        <td>${nuevoCarnet}</td>
                        <td>${nuevoNombre}</td>
                        <td>${nuevoCorreo}</td>
                    </tr>
                `;

        $('#tablaEstudiantes tbody').append(nuevaFila);

        contador++;
    });

    $('#btnEliminar').click(function () {
        $('#tablaEstudiantes tbody tr:last').remove();
    });
});