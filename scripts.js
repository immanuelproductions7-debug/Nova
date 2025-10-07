// Particle background
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: ["#ff00ff", "#00f7ff", "#9d00ff"] },
    shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
    opacity: {
      value: 0.5,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0.1 }
      }
    }
  }); // Closing the particlesJS function
// Fade-in effect on page load
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade-in');
});

// Music player toggle
document.querySelectorAll('.play-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const track = this.parentElement.querySelector('h3').textContent;
    alert(`Now playing: ${track}`);
    this.textContent = this.textContent === '▶' ? '❚❚' : '▶';
    this.style.backgroundColor = this.textContent === '❚❚' ? 'var(--neon-pink)' : 'transparent';
  });
});
