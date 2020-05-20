'use strict';

(function(){

var submitForm = document.querySelector(".img-upload__submit");
var formWindow = document.querySelector(".img-upload__overlay");

var onSuccess = function(){
    formWindow.classList.add("hidden");
};

var onError = function(message){
    console.error(message);
};

var submiting = function () {

    var xhr = new XMLHttpRequest;

    xhr.addEventListener("load", function(){
        var error;

        switch(xhr.status) {
            case 200: 
                onSuccess();
                break;
                break;
            case 400:
                error = "Неверный запрос";
                break;
            case 401:
                error = "Пользователь не авторизирован";
                break;
            case 404:
                error = "Ничего не найдено";
                break;
                
            default:
                error = "Статус ответа: :" + anotherUsersPhotosRequest.status + " " + anotherUsersPhotosRequest.statusText;
    
    
            if (error) {
                onError(error);
            };
        };

    });

    xhr.addEventListener('error', function(){
        onError('Произошла ошибка соединения');
    });
    
    xhr.timeout = 30000;
    
    xhr.addEventListener('timeout', function(){
        onError("Запрос не успел выполниться за" + xhr.timeout + "мс");
    });

    xhr.open("POST", 'https://js.dump.academy/kekstagram');

    xhr.send();

};

    submitForm.addEventListener("click", submiting);

});