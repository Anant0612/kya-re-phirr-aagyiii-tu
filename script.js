const sections = document.querySelectorAll('.section');

function checkActiveSection() {
  const trigger = window.innerHeight / 1.5;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < trigger) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', checkActiveSection);
window.addEventListener('load', checkActiveSection);
