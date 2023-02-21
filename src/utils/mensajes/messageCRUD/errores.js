async function validarError(error, action) {
    let messageError = "";
    let status=false;
    if (action === 'select') {
        switch (error){
           case null:
            messageError=`Algo salio mal en user o paswor`;
            status=false;
            break;
        }

    } else if (action === 'insert') {

        switch (parseInt(error.sqlState)) {
            case 23000:
                messageError = 'Este usuario ya existe'
                status=false;
                break;

            default:
                status=false;
                console.log(error);
        }


    }

    const result = {
        message: messageError,
        status: status
    }

    return result;

}



module.exports = validarError;