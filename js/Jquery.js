
$(function () {
    $("#formularioCrearUsuario").validate({
        rules: {
            txtNombre: {
                required: true,
                minlength: 3
            },
            txtApellido: {
                required: true
            },
            inputNac: {
                required: true
            },
            txtUsuario: {
                required: true,
                minlength: 5
            },
            inputEmail: {
                required: true
            },
            inputPassword: {
                required: true,
                minlength: 10
            },
            inputCheck: {
                required: true
            }
        },
        messages: {
            txtNombre: {
                required: "El nombre es obligatorio.",
                minlength: "El minimo de caracteres es tres."
            },
            txtApellido: {
                required: "El apellido es obligatorio."
            },
            inputNac: {
                required: "La fecha de nacimiento es obligatoria."
            },
            txtUsuario: {
                required: "El usuario es obligatorio."
            },
            inputEmail: {
                required: "El email es obligatorio."
            },
            inputPassword: {
                required: "La contraseña es obligatoria",
                minlength: "La contraseña debe contener al menos dies caracteres."
            },
            inputCheck: {
                required: "Debe aceptar los terminos y servicios."
            }
        }
    })
})

$(function () {
    $("#formularioInicioSesion").validate({
        rules: {
            inputUsuario: {
                required: true,
                minlength: 3
            }
        },
        messages: {
            inputUsuario: {
                required: "El nombre es obligatorio.",
                minlength: "El minimo de caracteres es tres."
            }
        }
    })
})




function validarInicio() {

    var usuario = document.getElementById("inputUsuario").value;
    var contra = document.getElementById("inputApellido").value;

    if (usuario == "user" && contra == "123") {
        
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

showTime();
function showTime() {
    myDate = new Date();
    hours = myDate.getHours();
    minutes = myDate.getMinutes();
    seconds = myDate.getSeconds();
    if (hours < 10) hours = 0 + hours;

    if (minutes < 10) minutes = "0" + minutes;

    if (seconds < 10) seconds = "0" + seconds;

    $("#HoraActual").text(hours + ":" + minutes + ":" + seconds);
    setTimeout("showTime()", 1000);
}


