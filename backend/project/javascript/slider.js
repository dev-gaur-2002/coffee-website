
/*--------------------------------------- COFFEE ---------------------------------- */

var slides = document.getElementsByClassName("shop-card");
const btnRight = document.getElementById('right-btn');
const btnLeft = document.getElementById('left-btn')
var currentSlide = slides[0];
var currentElement = currentSlide;
function showSlidesRight() {
  // console.log(slides)
  var nextSlide = currentElement.nextElementSibling
  var prevSlide = currentElement.previousElementSibling
  console.log(currentElement)
  if(currentElement != slides[0] && prevSlide != slides[slides.length - 1]){
    prevSlide.classList.add('not-visible')
  }
  currentElement.classList.remove('not-visible');
  prevSlide = currentElement
  if(currentElement!=slides[slides.length-1])
  currentElement = nextSlide;
}

function showSlidesLeft() {
  var prevSlide = currentElement.previousElementSibling
  if(currentElement != slides[0]){
    currentElement.classList.add('not-visible')
  }
  prevSlide.classList.remove('not-visible')
  if(currentElement!=slides[0]){
    currentElement = prevSlide;
  }
}
btnLeft.addEventListener('click',showSlidesLeft)
btnRight.addEventListener('click',showSlidesRight)

/* ------------------------ MERCH ----------------------------- */

var slidesMerch = document.getElementsByClassName("merch-card");
const btnRightMerch = document.getElementById('right-btn-merch');
const btnLeftMerch = document.getElementById('left-btn-merch')
var currentSlideMerch = slidesMerch[0];
var currentElementMerch = currentSlideMerch;
function showSlidesRightMerch() {
  // console.log(slides)
  var nextSlideMerch = currentElementMerch.nextElementSibling
  var prevSlideMerch = currentElementMerch.previousElementSibling
  console.log(currentElementMerch)
  if(currentElementMerch != slidesMerch[0] && prevSlideMerch != slidesMerch[slidesMerch.length - 1]){
    prevSlideMerch.classList.add('not-visible')
  }
  currentElementMerch.classList.remove('not-visible');
  prevSlideMerch = currentElementMerch
  if(currentElementMerch!=slidesMerch[slidesMerch.length-1])
  currentElementMerch = nextSlideMerch;
}

function showSlidesLeftMerch() {
  var prevSlideMerch = currentElementMerch.previousElementSibling
  if(currentElementMerch != slidesMerch[0]){
    currentElementMerch.classList.add('not-visible')
  }
  prevSlideMerch.classList.remove('not-visible')
  if(currentElementMerch!=slidesMerch[0]){
    currentElementMerch = prevSlideMerch;
  }
}
btnLeftMerch.addEventListener('click',showSlidesLeftMerch)
btnRightMerch.addEventListener('click',showSlidesRightMerch)

/* ---------------------------- GEARS-------------------------------------- */
var slidesGears = document.getElementsByClassName("gears-card");
const btnRightGears = document.getElementById('right-btn-gears');
const btnLeftGears = document.getElementById('left-btn-gears')
var currentSlideGears = slidesGears[0];
var currentElementGears = currentSlideGears;
function showSlidesRightGears() {
  // console.log(slides)
  var nextSlideGears = currentElementGears.nextElementSibling
  var prevSlideGears = currentElementGears.previousElementSibling
  console.log(currentElementGears)
  if(currentElementGears != slidesGears[0] && prevSlideGears != slidesGears[slidesGears.length - 1]){
    prevSlideGears.classList.add('not-visible')
  }
  currentElementGears.classList.remove('not-visible');
  prevSlideGears = currentElementGears
  if(currentElementGears!=slidesGears[slidesGears.length-1])
  currentElementGears = nextSlideGears;
}

function showSlidesLeftGears() {
  var prevSlideGears = currentElementGears.previousElementSibling
  if(currentElementGears != slidesGears[0]){
    currentElementGears.classList.add('not-visible')
  }
  prevSlideGears.classList.remove('not-visible')
  if(currentElementGears!=slidesGears[0]){
    currentElementGears = prevSlideGears;
  }
}
btnLeftGears.addEventListener('click',showSlidesLeftGears)
btnRightGears.addEventListener('click',showSlidesRightGears)