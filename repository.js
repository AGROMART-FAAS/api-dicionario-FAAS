"use strict";
// const uuidv1 = require("uuid/v1");
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
            content: content,
        },
    });
};

module.exports = {
    getCsas,
    getcsaById,
    createCsa,
};
