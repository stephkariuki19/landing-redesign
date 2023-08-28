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
document.querySelector('.back-top').addEventListener('click', () => {
  // Scroll back to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

//NEWS 
fetch('https://www.africa-newsroom.com/africarc/rss/Tzo4OiJzdGRDbGFzcyI6Mzp7czo5OiJsYW5ndWFnZXMiO3M6MTk6ImE6MTp7aTowO3M6MjoiZW4iO30iO3M6NDoidGFncyI7YToxOntpOjA7YToyOntzOjY6InRhZ19pZCI7czozOiIxMzMiO3M6NToidGFnX2MiO3M6MzoiNjAxIjt9fXM6NDoidHlwZSI7czoxOiJyIjt9')
    .then(response => response.text())
    .then(data => {
        // Parse the XML data
        console.log('rss data')
        console.log(data)
    })
    .catch(error => {
        console.error('Error fetching RSS feed:', error);
    });
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, 'text/xml');
    const items = xmlDoc.querySelectorAll('item'); // Get all the <item> elements
    const container = document.getElementById('rss-container'); // Assuming you have a container element
items.forEach(item => {
    const title = item.querySelector('title').textContent;
    const link = item.querySelector('link').textContent;
    const description = item.querySelector('description').textContent;
    const pubDate = item.querySelector('pubDate').textContent;

    const article = document.createElement('article');
    article.innerHTML = `
        <h2><a href="${link}" target="_blank">${title}</a></h2>
        <p>${description}</p>
        <p>${pubDate}</p>
    `;
    container.appendChild(article);
});
