"use strict";
const { v4: uuidv4 } = require("uuid");
const TABLE_NAME = "CsaTable";
const dynamoDbLib = require("./dynamodb-lib");

const getCsas = function () {
    return dynamoDbLib.call("scan", {
        TableName: TABLE_NAME,
    });
};

const getcsaById = function (id) {
    return dynamoDbLib.call("get", {
        TableName: TABLE_NAME,
        Key: {
            id: id,
        },
    });
};

const createCsa = function (content) {
    return dynamoDbLib.call("put", {
        TableName: TABLE_NAME,
        Item: {
            id: uuidv4(),
            nomeCSA: content.nomeCSA,
            responsavelCSA: content.responsavelCSA,
            emailCSA: content.emailCSA,
            urlBase: content.urlBase,
        },
    });
};

module.exports = {
    getCsas,
    getcsaById,
    createCsa,
};
