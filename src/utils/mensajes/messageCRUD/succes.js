const message=require('../allMessages')
async function validarSuccefull(respuesta, action) {
    let messageS = '';
    let status = false;

    if (action === "select") {
        switch (respuesta.length) {
            case 1:
                messageS = message.messageGeneroCorrect
                status = true;
                break;
            case 0:
                messageS = message.messageDataNothing
                status = false
            default:
                break;
        }
    } else if (action === "insert") {

        switch (respuesta.affectedRows) {
            case 1:
                messageS = message.messageInserCorrect
                status = true;
                break;
            default:
                status = false;
                console.log("Error al momento de insertar");
                break;
        }



    }

    const result = {
        message: messageS,
        status: status
    }

    return result;



}


module.exports = validarSuccefull;

