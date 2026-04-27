$(document).ready(function () {
    $('#btn-ocultar').click(function () {
        $('.parrafo').hide();
    });
    $('#btn-mostrar').click(function () {
        $('.parrafo').show();
    });
    $('#btn-ocultar-despacio').click(function () {
        $('.parrafo').hide('slow');
    });
    $('#btn-mostrar-despacio').click(function () {
        $('.parrafo').show('fast');
    });
    $('#btn-ocultar-slide').click(function () {
        $('.parrafo').slideUp(2000);
    });
    $('#btn-mostrar-slide').click(function () {
        $('.parrafo').slideDown(2000);
    });
});