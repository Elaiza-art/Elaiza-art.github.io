const photos = document.querySelectorAll('.clickable-photo');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const spanClose = document.getElementsByClassName('close')[0];

photos.forEach(function(photo) {
    photo.onclick = function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
    };
});

spanClose.onclick = function() {
    modal.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};