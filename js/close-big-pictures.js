'use strict';

(function (){

    var bigPicture = document.querySelector(".big-picture");

    var pictureCancelClickHandler = function(){
        bigPicture.classList.add("hidden");
    }
    
    var pictureCancel = document.querySelector("#picture-cancel");
    
    pictureCancel.addEventListener("click", pictureCancelClickHandler);

}) ()