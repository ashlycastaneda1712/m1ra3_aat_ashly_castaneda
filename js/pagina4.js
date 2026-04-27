$(document).ready(function () {
    $('#btnCalcular').click(function () {
        let sueldoBase = parseFloat($('#sueldoBase').val()) || 0;
        let aniosTrabajados = parseInt($('#aniosTrabajados').val()) || 0;
        let mesesTrabajados = parseInt($('#mesesTrabajados').val()) || 0;
        let salarioPendiente = parseFloat($('#salarioPendiente').val()) || 0;
        let deudas = parseFloat($('#deudas').val()) || 0;

        if (sueldoBase <= 0 || aniosTrabajados < 0 || mesesTrabajados < 0) {
            alert('Por favor, ingrese valores válidos en los campos requeridos.');
            return;
        }
        let indemnizacionAnios = sueldoBase * aniosTrabajados;
        let bono14Proporcional = (sueldoBase / 12) * mesesTrabajados;
        let aguinaldoProporcional = (sueldoBase / 12) * mesesTrabajados;
        let total = indemnizacionAnios + bono14Proporcional + aguinaldoProporcional + salarioPendiente - deudas;
        $('#resAnios').text('Q ' + indemnizacionAnios.toFixed(2));
        $('#resBono14').text('Q ' + bono14Proporcional.toFixed(2));
        $('#resAguinaldo').text('Q ' + aguinaldoProporcional.toFixed(2));
        $('#resSalarioPendiente').text('Q ' + salarioPendiente.toFixed(2));
        $('#resDeudas').text('Q ' + deudas.toFixed(2));
        $('#resTotal').text('Q ' + total.toFixed(2));
        $('#resultado').removeClass('d-none');
    });
});