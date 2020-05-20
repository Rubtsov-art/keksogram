'use strict';

(function(){

    window.templatePhoto = document.querySelector('#picture').content.querySelector('.picture__link');
            
    window.renderPhoto = function (photo) {
        var photoElement = templatePhoto.cloneNode(true);
        photoElement.querySelector('.picture__img').src = photo.url;
        photoElement.querySelector('.picture__stat--likes').textContent = photo.likes;
        photoElement.querySelector('.picture__stat--comments').textContent = photo.comments;
        return photoElement;
    };

    var parent = document.querySelector('.pictures');
    

    window.removePhoto = function () {
        while (parent.querySelector('.picture__link')) {
            parent.removeChild(parent.querySelector('.picture__link'));
        };
    };

    var indexRandom = function(min, max) {
        var index = min + Math.random() * (max + 1 - min);
        return Number(Math.floor(index));
    };

    function shuffle(arr){
        var j, temp;
        for(var i = arr.length - 1; i > 0; i--){
            j = Math.floor(Math.random()*(i + 1));
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }

    var photosSort = document.querySelector('.img-filters');
    
    anotherUsersPhotosRequest.addEventListener('load', function(){
        photosSort.classList.remove('img-filters--inactive');
    })

    var popularPhotos = document.querySelector('#filter-popular');
    var newPhotos = document.querySelector('#filter-new');
    var discussedPhotos =  document.querySelector('#filter-discussed');

    window.photosDrow = function(arr) {
        renderPhoto(anotherUsersPhotosRequest.response);
            
        var fragment = document.createDocumentFragment();

        for (var j = 0; j < arr.length; j++) {
            fragment.appendChild(renderPhoto(arr[j]));
        }
            
        document.querySelector('.pictures').appendChild(fragment);
    };


    window.popularFilter = function() {
        
            popularPhotos.addEventListener('click', function() {
                removePhoto();
                var anotherUsersPhotosClonPopular = anotherUsersPhotos.slice();
                shuffle(anotherUsersPhotosClonPopular);
                var popularTen = anotherUsersPhotosClonPopular.slice(0, 11);
                 console.log(popularTen);
                photosDrow(popularTen);
    });
};

    window.newFilter = function () {

        newPhotos.addEventListener('click', function() {

            removePhoto();

            photosDrow(anotherUsersPhotos);

    });
};
    

}) ();