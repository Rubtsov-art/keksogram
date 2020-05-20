'use strict';

(function (){

    var pictures = document.querySelector('.pictures');


    function  bigPictureOpen  (evt) {
        if (!evt.target.matches("img")) return;
        document.querySelector(".big-picture__img img").src = evt.target.src;
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