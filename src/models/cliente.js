function model(body, id) {
    if(
        body.nome != "" &&
        body.telefone != "" &&
        body.senha != "" &&
        body.email != "" 
    ) {
        
        return {
            id,
            nome: body.nome,
            telefone: body.telefone,
            email: body.email,
            senha: body.senha,
        }
    } else {
        return undefined;
    }
}

module.exports = model;