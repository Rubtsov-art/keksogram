'use strict';

(function(){
window.likeRandom = function(min, max) {
    var like = min + Math.random() * (max + 1 - min);
  return Number(Math.floor(like));
}
}) ()