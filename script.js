console.log("JavaScript is connected!");

document.addEventListener('DOMContentLoaded', () => {
  const scrollLinks = document.querySelectorAll('.scroll-link');

  // const luaIcons = document.querySelectorAll('.lua');

  // luaIcons.forEach(icon => {
  //   icon.width *=1.1
  //   icon.width = 90

  //   icon.height *=1.1

  // })

  scrollLinks.forEach(link => {

    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector("#"+targetId);
    const navbarHeight = document.getElementById('topholder').offsetHeight;

    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default anchor behavior

      
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = targetPosition - navbarHeight - 20; // Extra 20px buffer
      // const offsetPosition = targetPosition - 70;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      // targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const seeBtn = document.querySelector(".see-more")
  seeBtn.addEventListener("click", ()=>{
    const content = document.getElementById('section1');


    if (content.classList.contains('expanded')) {
      seeBtn.textContent = 'See More ▼';
    } else {
      seeBtn.textContent = 'See Less ▲';
    }

    content.classList.toggle('expanded');
    seeBtn.classList.toggle("open-see");
  })

});


// Typewriter effect

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '<div class="cursor"></div></span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewriter');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }

};

// document.addEventListener('DOMContentLoaded', () => {


// // Circles
// const background = document.getElementById('content');
// const colors = ['#3498db', '#2ecc71', '#9b59b6'];
// const numCircles = 10;
// // '#e74c3c' red "#f39c12" orange

// for (let i = 0; i < numCircles; i++) {
//     const circle = document.createElement('div');
//     circle.classList.add('circle');
    
//     // Random properties
//     const size = Math.random() * 150 + 50; // 50-200px
//     const color = colors[Math.floor(Math.random() * colors.length)];
    
//     // Random position
//     const left = Math.random() * 100;
//     const top = Math.random() * 100;
    
//     // Random animation duration and delay
//     const duration = Math.random() * 30 + 10; // 10-40s
//     const delay = Math.random() * 5; // 0-5s
    
//     // Apply styles
//     circle.style.width = `${size}px`;
//     circle.style.height = `${size}px`;
//     circle.style.backgroundColor = color;
//     circle.style.left = `${left}%`;
//     circle.style.top = `${top}%`;
//     circle.style.animationDuration = `${duration}s`;
//     circle.style.animationDelay = `-${delay}s`;
    
//     // Add unique animation path for variety
//     const randomPath = Math.floor(Math.random() * 4);
//     circle.style.animationName = `float`;
    
//     background.appendChild(circle);
// }
// });
