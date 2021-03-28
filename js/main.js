function loadImage(id, targetId) {
    var el = documemnt.getElementById(id);
    var targetEl = targetId ? document.getElementById(targetId): el;
    var imageToLoad;

    if (el.dataset.image) {
        imageToLoad = el.dataset.image;
    } else if (typeof el.currentSrc === 'undefined') {
        imageToLoad = el.src;
    } else {
        imageToLoad = el.currentSrc;
    }

    if (imageToLoad) {
        var img = new Image();
        img.src = imageToLoad;
        img.onload = function () {
            targetEl.classList.add('is-loaded');
        };
    }
}

.document.addEventListener('DOMContentLoaded', function () {
    loadImage('walpaper');
    loadImage('pictureImage', 'picture');
});