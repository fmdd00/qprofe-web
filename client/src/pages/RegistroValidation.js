function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/ 
    //Al menos un digito
    //Al menos una minuscula
    //Al menos una mayuscula
    //Longitud de contrasena minimo de 8 char

    if(values.name === "") {
        error.name = "Este campo no debe estar vacio"
    } else {
        error.name = ""
    }
    
    if(values.email === "") {
        error.email = "Este campo no debe estar vacio"
    } else if(!email_pattern.test(values.email)) {
        error.email = "Email invalido"
    } else {
        error.email = ""
    }

    if(values.password === "") {
        error.password = "Este campo no debe estar vacio"
    } else if(password_pattern.test(values.password)) {
        error.password = "Contraseña invalida"
    } else {
        error.password = ""
    }

    return error;
}

export default Validation;