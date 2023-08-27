  //STLYING FOR DROPDOWN
  document.querySelector(".menu-btn").addEventListener("click", showMenu);
function showMenu() {
  document.querySelector(".main-menu").classList.toggle("show");
}

const chevronDown = document.querySelector(".chevron-down");
const dropdownContent = document.querySelector('.dropdown-content');

chevronDown.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});

//STYLING FOR SLIDER
const spans = document.querySelector('.progress-span')
  let currentSlide = 0;
  const slides = document.getElementsByClassName("slide");
  const progressNav = document.getElementsByClassName("progress-nav")[0].getElementsByTagName("span");

  //to show actual pictures in slideshow
  //new
// Function to show a specific slide
function showSlide(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    progressNav[i].classList.remove("active");
  }

  if (n < 0) {
    currentSlide = slides.length - 1;
  } else if (n >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = n;
  }

  slides[currentSlide].style.display = "block";
  progressNav[currentSlide].classList.add("active");
}

// Function to change the slide
function changeSlide(n) {
  showSlide(currentSlide + n);
}

// Show the initial slide
showSlide(currentSlide);

// Set interval to automatically change slides every 8000 milliseconds (8 seconds)
setInterval(function () {
  changeSlide(1);
}, 5500);

 

//STYLING FOR NAVIGATION
// Add an event listener to the "Back to the top" link
document.querySelector('.top').addEventListener('click', () => {
  // Scroll back to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

//NA 
/*
 <div class="slideshow-buttons">
            <div>
              <svg  onclick="changeSlide(-1) " class ="slider-icon-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-left-circle-outline</title><path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M15.4,16.6L10.8,12L15.4,7.4L14,6L8,12L14,18L15.4,16.6Z" /></svg>
            </div>

            <div>
              <svg  onclick="changeSlide(1) " class="slider-icon-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-right-circle-outline</title><path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M8.6,16.6L13.2,12L8.6,7.4L10,6L16,12L10,18L8.6,16.6Z" /></svg>
            </div>
* */