var contextDialog = '{}';

function sendMessageToAssistant(){
    //recupera mensagem digitada pelo usuario
    var txtMessage = document.getElementById('inputChatbot').value;
    var chat = document.getElementById('body-container');

    //na primeira chamada (boa vindas) txtMessage é undefined
    // entao define como vazio para erro n aPI

    if(txtMessage === undefined || txtMessage === '') txtMessage = '';
    else{
        chat.innerHTML += "<div class='container-message-user'>"+ txtMessage + '</div>';
    } 


    //limpa input

    document.getElementById('inputChatbot').value = '';

    $.post("/assistant",
        {text: txtMessage, contextDialog},
        
        function(ret, status){

            if(ret.status === 'ERRO') alert(ret.data);
            else{

                chat.innerHTML += "<div class='container-message-watson'>"+ ret.data.result.output.text + '</div>';
                contextDialog = JSON.stringify(ret.data.result.context);

            }
        }

    ).fail(function(returnedData){
        alert('Erro'+returnedData.status + ' ' + returnedData.statusText);
    });

}