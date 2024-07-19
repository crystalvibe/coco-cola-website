const video = document.getElementById('coca-cola-video');
const exploreButton = document.getElementById('exploreBtn');
const videoContainer = document.querySelector('.video-container');

video.addEventListener('mouseenter', () => {
  exploreButton.style.display = '1';
});

video.addEventListener('mouseleave', () => {
  exploreButton.style.display = '0';
});
exploreButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevents the default link behavior
  
    const contentSection = document.getElementById('content1');
    contentSection.scrollIntoView({ behavior: 'smooth' });
  });
