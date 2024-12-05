"use strict";

const repo = require("./repository");

module.exports.getCsas = async (event, context) => {
    return (
        repo
            //TODO: Falta passar a paginação
            .getCsas()
            .then((data) => {
                return {
                    statusCode: 200,
                    body: JSON.stringify(data),
                };
            })
            .catch((err) => {
                console.error("erro DB ", err);
                return {
                    statusCode: 200,
                    body: JSON.stringify({
                        message: "Erro ao obter todos registros",
                    }),
                };
            })
    );
};

module.exports.getcsaById = async (event, context) => {
    const id = event.pathParameters["id"];
    if (!id) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: "uuid deve ser informado",
            }),
        };
    }

    return repo
        .getcsaById(id)
        .then((data) => {
            return {
                statusCode: 200,
                body: JSON.stringify(data),
            };
        })
        .catch((err) => {
            console.error("erro DB ", err);
            return {
                statusCode: 500,
                body: JSON.stringify({
                    message: "Erro ao obter um registro",
                }),
            };
        });
};

module.exports.createCsa = async (event, context) => {
    const data = JSON.parse(event.body);
    if (!data || !data.content) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: "Conteúdo deve ser informado",
            }),
        };
    }

    return repo
        .createCsa(data.content)
        .then((data) => {
            return {
                statusCode: 200,
                body: JSON.stringify({
                    message: "cadastrado com sucesso",
                }),
            };
        })
        .catch((err) => {
            console.error("erro DB ", err);
            return {
                statusCode: 500,
                body: JSON.stringify({
                    message: "Erro ao salvar",
                }),
            };
        });
};
