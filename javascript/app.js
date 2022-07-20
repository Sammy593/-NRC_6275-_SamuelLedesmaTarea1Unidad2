$(document).ready(function() {
    $("#form").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 3
            },
            apellido: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            asunto: {
                required: true,
                minlength: 2
            },
            mensaje:{
                required: true,
                maxlength: 100
            },
            captcha: {
                required: true
            }
        },
        messages: {
            nombre: {
                required: "Debes completar tu Nombre",
                minlength: "Tu nombre debe tener al menos 3 caracteres"
            },
            apellido :{
                required: "Debes completar tu Apellido"
            },
            comentario: {
                required: "El campo comentarios es obligatorio",
                minlength: "El campo comentario debe tener al menos 5 caracteres"
            },
            email: "Debes ingresar un email valido",
            mensaje: {
                maxlength: "Tu mensaje excede el limite de caracteres"
            }
        }
    });
    /*
    if($('#captcha').val() != 'qGpgJD'){
        alert("Los caracteres no coinciden");
    }*/
  });

