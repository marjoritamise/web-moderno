function tratarErroELancar(erro) {
    // throw new Error('.....')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try { // tentativa
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) { // erro
        tratarErroELancar(e)
    } finally { // sempre será executado
        console.log('Final')
    }

}

const obj = {
    name: 'Roberto'
}

imprimirNomeGritado(obj)