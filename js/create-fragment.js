'use strict';

(function(){

var templatePhoto = document.querySelector('#picture').content.querySelector('.picture__link');

var renderPhoto = function (photo) {
    var photoElement = templatePhoto.cloneNode(true);
    photoElement.querySelector('.picture__img').src = photo.url;
    photoElement.querySelector('.picture__stat--likes').textContent = photo.likes;
    photoElement.querySelector('.picture__stat--comments').textContent = photo.comments;
    return photoElement;
};


var fragment = document.createDocumentFragment();
for (var j = 0; j < anotherUsersPhotos.length; j++) {
    fragment.appendChild(renderPhoto(anotherUsersPhotos[j]));
}

document.querySelector('.pictures').appendChild(fragment);

}) ()