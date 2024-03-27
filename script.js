const images = document.querySelectorAll('img');
const bthNext = document.querySelector('.bth__next');
const bthPrev = document.querySelector('.bth__prev');
let slideIndex = 0 

bthNext.addEventListener("click", nextSlide);
bthPrev.addEventListener("click", prevSlide);

function nextSlide(){
hiddenSlide(slideIndex)
slideIndex++;
showSlide(slideIndex)
};

function prevSlide(){
    hiddenSlide(slideIndex)
    slideIndex--;
    showSlide(slideIndex)
};

function showSlide(index){
    if( slideIndex === 0){
        bthPrev.style.display = 'none'
    } else {
        bthPrev.style.display = "block";
    }; if (index === images.length -1 ){
        bthNext.style.display = 'none'
    } else {
        bthNext.style.display = "block";
    };
    images[index].style.display = 'block';
};

function hiddenSlide(index){
    images[index].style.display = 'none';
};

