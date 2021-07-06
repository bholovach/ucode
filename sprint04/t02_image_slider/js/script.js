let index = 1;
showSlideAuto();

function changeSlide(n) {
    showSlide(index += n);
}

function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    if (n > slides.length)
        index = 1;
    if (n < 1)
        index = slides.length;
    for (i = 0; i < slides.length; i++)
        slides[i].style.display = "none";
    slides[index - 1].style.display = "block";
}

function showSlideAuto() {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    index++;
    if (index > slides.length) {index = 1}
        slides[index - 1].style.display = "block";
    setTimeout(showSlideAuto, 3000);
}