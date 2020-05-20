'use strict';

(function(){

    // Управление масштабом загружаемого фото

var scaleSizeValue = document.querySelector(".resize__control--value");
var scaleMinus = document.querySelector(".resize__control--minus");
var scalePlus = document.querySelector(".resize__control--plus");

// функция уменьшения значения размера загружаемой фотографии

var scaleSizeReduce = function() {
    scaleSizeValue.value  = `${parseInt(scaleSizeValue.value) - parseInt(scaleSizeValue.step) + "%"}`;
    if (parseInt(scaleSizeValue.value)  <= parseInt(scaleSizeValue.min)) {
        scaleSizeValue.value  = scaleSizeValue.min;
    }
};


// Функция увеличения значения размера загружаемой фотографии 

var scaleSizeIncrease = function() {
    scaleSizeValue.value = `${parseInt(scaleSizeValue.value) + parseInt(scaleSizeValue.step) + "%"}`;
      if (parseInt(scaleSizeValue.value) >= 100) {
          scaleSizeValue.value = scaleSizeValue.max;
      };
}

scaleMinus.addEventListener("click", scaleSizeReduce);

scalePlus.addEventListener("click", scaleSizeIncrease);

// Функция мняющая масштаб загружаемого фото

var changeImgSize = function() {
    uploadImg.style = `transform: scale(${parseInt(scaleSizeValue.value)/100})`
};

scaleMinus.addEventListener("click", changeImgSize);

scalePlus.addEventListener("click", changeImgSize);

}) ()