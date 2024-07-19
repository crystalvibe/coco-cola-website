const videos = document.querySelectorAll('.video');
const overlays = document.querySelectorAll('.overlay');

videos.forEach((video, index) => {
  const overlay = overlays[index];
  video.addEventListener('mouseover', () => {
    overlay.style.opacity = '1';
  });
  video.addEventListener('mouseout', () => {
    overlay.style.opacity = '0';
  });
});
