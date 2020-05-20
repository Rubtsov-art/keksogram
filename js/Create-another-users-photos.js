'use strict';

(function(){

var onSuccess = function (data) {
        window.anotherUsersPhotos = data;
    };
        
var onError = function (message) {
        console.error(message);
    };
    
    
    
window.anotherUsersPhotosRequest = new XMLHttpRequest();

    
anotherUsersPhotosRequest.responseType = 'json';

anotherUsersPhotosRequest.addEventListener('load', function(){
    var error;
        switch (anotherUsersPhotosRequest.status) {
            case 200:
                onSuccess(anotherUsersPhotosRequest.response);
                photosDrow(anotherUsersPhotos);
                popularFilter();
                newFilter();

                    (function (){

                        var pictures = document.querySelector('.pictures');
                    
                    
                        function  bigPictureOpen  (evt) {
                            if (!evt.target.matches("img")) return;
                            document.querySelector(".big-picture__img img").src = evt.target.src;
                            document.querySelector(".likes-count").textContent = evt.target.nextElementSibling.childNodes[3].textContent;
                            document.querySelector(".big-picture").classList.remove("hidden");
                            document.addEventListener("keydown", function(evt){
                                if (evt.keyCode === 27) {
                                    document.querySelector(".big-picture").classList.add("hidden");
                                    document.removeEventListener("keydown", function(evt){});
                                }
                            })
                        };

        
                        pictures.addEventListener("click", bigPictureOpen);
                        
                        var avatarRandom = likeRandom(1, 5);
                        // document.querySelector(".likes-count").textContent = anotherUsersPhotos[0].likes;
                        // document.querySelector(".comments-count").textContent = 1;
                        // document.querySelector(".social__picture").src = "img/avatar-"+`${avatarRandom}`+".svg";
                        // document.querySelector(".social__text").textContent = anotherUsersPhotos[0].comments;
                        // document.querySelector(".social__caption").textContent = anotherUsersPhotos[0].description;
                    
                    
                    }) ()

                    console.log(anotherUsersPhotosRequest.response);
                
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

anotherUsersPhotosRequest.addEventListener('error', function(){
    onError('Произошла ошибка соединения');
});

anotherUsersPhotosRequest.timeout = 30000;

anotherUsersPhotosRequest.addEventListener('timeout', function(){
    onError("Запрос не успел выполниться за" + anotherUsersPhotosRequest.timeout + "мс");
});

anotherUsersPhotosRequest.open('GET', 'https://js.dump.academy/kekstagram/data');

anotherUsersPhotosRequest.send(); 


})();



