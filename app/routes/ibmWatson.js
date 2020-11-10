var express = require('express');

const ibmWatson = require('../lib/ibmWatsonCredentials');

module.exports = function (route) {
    // GET na raiz logada (AKA Dashboard)
    route.get('/index', function (req, res) {
        route.app.controller.chatbot.index(route, req, res);
        //route acessa o app, o app o controller que enfim acessa chatbot que renderiza index;
    });

}