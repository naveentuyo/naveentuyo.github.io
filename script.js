console.log("JavaScript is connected!");

document.addEventListener('DOMContentLoaded', () => {
  const scrollLinks = document.querySelectorAll('.scroll-link');

  
  scrollLinks.forEach(link => {

    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default anchor behavior
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
});


