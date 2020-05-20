'use strict';

(function (){

    var effectsChose = function(evt) {
        if (!evt.target.matches(".effects__radio")) return;
        if (evt.target.matches("#effect-chrome")) {
            uploadImg.classList.add("effects__preview--chrome");
            uploadImg.classList.remove("effects__preview--heat");
            uploadImg.classList.remove("effects__preview--phobos");
            uploadImg.classList.remove("effects__preview--marvin");
            uploadImg.classList.remove("effects__preview--sepia");
            scalePin.style.left = 455 + "px";
            uploadImg.style.filter = `grayscale(1)`;
            scaleLevel.style.width = 455 + "px";
        };
        if (evt.target.matches("#effect-sepia")) {
            uploadImg.classList.add("effects__preview--sepia");
            uploadImg.classList.remove("effects__preview--heat");
            uploadImg.classList.remove("effects__preview--phobos");
            uploadImg.classList.remove("effects__preview--marvin");
            uploadImg.classList.remove("effects__preview--chrome");
            scalePin.style.left = 455 + "px";
            uploadImg.style.filter = `sepia(1)`
            scaleLevel.style.width = 455 + "px";
        };
        if (evt.target.matches("#effect-marvin")) {
            uploadImg.classList.add("effects__preview--marvin");
            uploadImg.classList.remove("effects__preview--heat");
            uploadImg.classList.remove("effects__preview--phobos");
            uploadImg.classList.remove("effects__preview--sepia");
            uploadImg.classList.remove("effects__preview--chrome");
            scalePin.style.left = 455 + "px";
            uploadImg.style.filter = `invert(100%)`
            scaleLevel.style.width = 455 + "px";
        };
        if (evt.target.matches("#effect-phobos")) {
            uploadImg.classList.add("effects__preview--phobos");
            uploadImg.classList.remove("effects__preview--heat");
            uploadImg.classList.remove("effects__preview--chrome");
            uploadImg.classList.remove("effects__preview--marvin");
            uploadImg.classList.remove("effects__preview--sepia");
            scalePin.style.left = 455 + "px";
            uploadImg.style.filter =  `blur(5px)`
            scaleLevel.style.width = 455 + "px";
        };
        if (evt.target.matches("#effect-heat")) {
            uploadImg.classList.add("effects__preview--heat");
            uploadImg.classList.remove("effects__preview--chrome");
            uploadImg.classList.remove("effects__preview--phobos");
            uploadImg.classList.remove("effects__preview--marvin");
            uploadImg.classList.remove("effects__preview--sepia");
            scalePin.style.left = 455 + "px";
            uploadImg.style.filter = `brightness(3)`;
            scaleLevel.style.width = 455 + "px";
        };
        if (evt.target.matches("#effect-none")) {
            uploadImg.classList.remove("effects__preview--heat");
            uploadImg.classList.remove("effects__preview--chrome");
            uploadImg.classList.remove("effects__preview--phobos");
            uploadImg.classList.remove("effects__preview--marvin");
            uploadImg.classList.remove("effects__preview--sepia");
            uploadImg.style.filter = null;
            scalePin.style.left = 455 + "px";
            scaleLevel.style.width = 455 + "px";
        };
    };
    
    effectsFieldset.addEventListener("click", effectsChose);

}) ()