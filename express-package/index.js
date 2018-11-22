const Joi = require('joi');
const express = require('express');
const app = express();
const request = require('request');

const headers = {
    Authorization: "Basic YXZpZC5wdWJsaXNoLnR3aXR0ZXItODkwNjdjNjJmYWFkNDJiODgxMGNmMzI4ZjdjNTU0ZDg6MjUzOTIzOTI5OGUyNzM" +
    "0ZDU5YzIwNzI4YWFmMmQxOTI3MDNjOWZjNzUwODc4Mjc4YTg3N2E0NDQ5YTM4ZDQwMQ=="
};
headers['Content-Type'] = "application/x-www-form-urlencoded";

const formData = {
    grant_type: "password",
    username: "Administrator",
    password: "Avid123"
};

request.post(
    {
        url: 'https://10.42.24.55/auth/sso/login/oauth2/ropc/ldap',
        form: formData,
        rejectUnauthorized: false,
        headers: {
            Authorization: "Basic YXZpZC5wdWJsaXNoLnR3aXR0ZXItODkwNjdjNjJmYWFkNDJiODgxMGNmMzI4ZjdjNTU0ZDg6MjUzOTIzOTI5OGUyNzM" +
                "0ZDU5YzIwNzI4YWFmMmQxOTI3MDNjOWZjNzUwODc4Mjc4YTg3N2E0NDQ5YTM4ZDQwMQ=="
        }
    },
    function (err, httpResponse, body) {
        console.log(err, body);
    }
);

headers['Content-Type'] = "application/x-www-form-urlencoded";
headers['Authorization'] = "Bearer YWY5MDg0MmUtMjJjMS00MTM3LTk3YjAtOTEzZGFjNmQ5MmUw";

request.get(
    {
        url: 'https://10.42.24.55/apis/avid.pam;version=2;realm=B1C9D208-7A67-47BB-B392-6E307AC6F796',
        form: formData,
        rejectUnauthorized: false,
        headers: {
            headers
        }
    },
    function (err) {
        console.log(err);
    }
);