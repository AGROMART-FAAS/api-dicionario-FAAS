"use strict";
const AWS = require("aws-sdk");

AWS.config.update({ region: "sa-east-1" });

const call = function (action, params) {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    return dynamoDb[action](params).promise();
};

module.exports = { call };
