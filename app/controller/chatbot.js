
module.exports.index = function (app, req, res) {
    res.render('index');
};

module.exports.callAssistant = function (app, req, res) {
    const ibmWatson = require('../lib/ibmWatsonCredentials');

    //recupera mensagem de texto e contexto da conversa
    var { text, contextDialog } = req.body;
    context = JSON.parse(contextDialog);
    // constroi json para envio dos dados ao serviço

    const params = {
        input: { text },
        workspaceId: 'Workspaceid',
        context
    };
    //envia os dados ao serviço e retorna mensagem 
    ibmWatson.assistant.message(
        params,
        function(err, response){
            if(err) res.json({ status: 'ERRO', data: err.toString() });
            else res.json({ status:'OK', data: response });
        }
    );



};