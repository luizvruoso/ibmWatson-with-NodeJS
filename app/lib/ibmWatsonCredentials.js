const AssistantV1 = require('ibm-watson/assistant/v1');
const {IamAuthenticator} = require('ibm-watson/auth');

module.exports.assistant = new AssistantV1({
    url: 'https://gateway.watsonplatform.net/assistant/api',
    version: '2020-01-04',
    authenticator: new IamAuthenticator ({ apikey:'adIrm55upwNnHlZsYOWyYmxt9e-PnzkKu6qgGd3awLbY' })

});

