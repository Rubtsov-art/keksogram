'use strict';

(function (){

//Перемещение ползунка эффектов

var scalePin = document.querySelector(".scale__pin");
var scaleLine = document.querySelector(".scale__line");
var scaleLevel = document.querySelector(".scale__level");
var scale = document.querySelector(".scale");
scalePin.style.left = 455 + "px";
scaleLevel.style.width = 455 + "px";


scalePin.addEventListener("mousedown", function(evt){
    evt.preventDefault();


    var startCoords = {
        x: evt.clientX,
    };

    var onMouseMove = function (moveEvt) {
        moveEvt.preventDefault();
        var shift = {
            x: startCoords.x - moveEvt.clientX,
        }
    
        startCoords = {
            x: moveEvt.clientX,
        }
    
        if (parseInt(scalePin.style.left) >= scaleLine.offsetWidth) {
            scalePin.style.left = scaleLine.offsetWidth + "px";
        }
        if (parseInt(scalePin.style.left) <= (scaleLine.offsetLeft - scalePin.offsetWidth)) {
            scalePin.style.left = scaleLine.offsetLeft - scalePin.offsetWidth + "px";
        }
        scalePin.style.left = (scalePin.offsetLeft - shift.x) + "px";
        scaleLevel.style.width = `${scalePin.style.left}`;
    
        //насыщенность эффектов
    
        var valueScalePin = Math.round(parseInt(scalePin.style.left)/4.53); //процентная доля положения ползунка, относительной всей линии насыщенности
    
        var chrome = document.querySelector(".effects__preview--chrome");
        var heat = document.querySelector(".effects__preview--heat");
        var phobos = document.querySelector(".effects__preview--phobos");
        var marvin = document.querySelector(".effects__preview--marvin");
        var sepia = document.querySelector(".effects__preview--sepia");
        
        //эффект chrome
        var valueScaleChrome = (valueScalePin/100).toFixed(1);
        chrome.style.filter = `grayscale(${valueScaleChrome})`;
    
        //эффект heat
        var valueScaleHeat = (valueScalePin*3/100).toFixed(1);
        heat.style.filter = `brightness(${valueScaleHeat})`;
    
        //эффект phobos
        var valueScalePhobos = (valueScalePin*5/100).toFixed(1);
        phobos.style.filter = `blur(${valueScalePhobos+"px"})`;
    
        //эффект marvin
        var valueScaleMarv = valueScalePin + "%";
        marvin.style.filter = `invert(${valueScaleMarv})`;
    
        //эффект sepia
        var valueScaleSepia = (valueScalePin/100).toFixed(1);
        sepia.style.filter = `sepia(${valueScaleSepia})`;
    }

    var onMouseUp = function (upEvt) {
        upEvt.preventDefault();

        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
});

}) ()




