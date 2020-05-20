'use strict';

(function (){

    var uploadControlerChangeHandler = function() {
        document.querySelector(".img-upload__overlay").classList.remove("hidden");
        document.addEventListener("keydown", function(evt) {
            if (evt.keyCode === 27) {
                document.querySelector(".img-upload__overlay").classList.add("hidden");
    
                document.removeEventListener("keydown", function(evt) {
                    if (evt.keyCode === 27) {
                        document.querySelector(".img-upload__overlay").classList.add("hidden");
                    };
                });
            };
        });
    };
    
    var uploadControlerCloseHandler = function() {
        document.querySelector(".img-upload__overlay").classList.add("hidden");
    };
    
    var uploadControler =  document.querySelector("#upload-file");
    uploadControler.addEventListener("change", uploadControlerChangeHandler);
    
    var uploadCanceler = document.querySelector("#upload-cancel");
    uploadCanceler.addEventListener("click", uploadControlerCloseHandler);

}) ()