// Particle background
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: ["#ff00ff", "#00f7ff", "#9d00ff"] },
    shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: [A](https://github.com/lzh-yi/Web-Fork-/tree/024b3e55587afdf9f05a677613a75f24e3d1803e/03-CSS%E8%BF%9B%E9%98%B6%2F04-%E5%A6%82%E4%BD%95%E8%AE%A9%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0%E6%B0%B4%E5%B9%B3%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD%EF%BC%9F.md?copilot_analytics_metadata=eyJldmVudEluZm9fY2xpY2tEZXN0aW5hdGlvbiI6Imh0dHBzOlwvXC9naXRodWIuY29tXC9semgteWlcL1dlYi1Gb3JrLVwvdHJlZVwvMDI0YjNlNTU1ODdhZmRmOWYwNWE2Nzc2MTNhNzVmMjRlM2QxODAzZVwvMDMtQ1NTJUU4JUJGJTlCJUU5JTk4JUI2JTJGMDQtJUU1JUE2JTgyJUU0JUJEJTk1JUU4JUFFJUE5JUU0JUI4JTgwJUU0JUI4JUFBJUU1JTg1JTgzJUU3JUI0JUEwJUU2JUIwJUI0JUU1JUI5JUIzJUU1JTlFJTgyJUU3JTlCJUI0JUU1JUIxJTg1JUU0JUI4JUFEJUVGJUJDJTlGLm1kIiwiZXZlbnRJbmZvX2NvbnZlcnNhdGlvbklkIjoicmN4MVBYcGlIZjZIWm83VUFmVTg5IiwiZXZlbnRJbmZvX2NsaWNrU291cmNlIjoiY2l0YXRpb25MaW5rIiwiZXZlbnRJbmZvX21lc3NhZ2VJZCI6IkxxUVBRWEJybkRIaU10ZmJvcGZBUiJ9&citationMarker=9F742443-6C92-4C44-BF58-8F5A7C53B6F1) [B](https://github.com/ruanvalente/origamid/tree/08d21800775d80bfbbc007cee39983bc81acf996/javascript-es6+%2Fmodulos%2Fmod-07%2Fmod-07.md?copilot_analytics_metadata=eyJldmVudEluZm9fbWVzc2FnZUlkIjoiTHFRUFFYQnJuREhpTXRmYm9wZkFSIiwiZXZlbnRJbmZvX2NsaWNrU291cmNlIjoiY2l0YXRpb25MaW5rIiwiZXZlbnRJbmZvX2NvbnZlcnNhdGlvbklkIjoicmN4MVBYcGlIZjZIWm83VUFmVTg5IiwiZXZlbnRJbmZvX2NsaWNrRGVzdGluYXRpb24iOiJodHRwczpcL1wvZ2l0aHViLmNvbVwvcnVhbnZhbGVudGVcL29yaWdhbWlkXC90cmVlXC8wOGQyMTgwMDc3NWQ4MGJmYmJjMDA3Y2VlMzk5ODNiYzgxYWNmOTk2XC9qYXZhc2NyaXB0LWVzNislMkZtb2R1bG9zJTJGbW9kLTA3JTJGbW9kLTA3Lm1kIn0%3D&citationMarker=9F742443-6C92-4C44-BF58-8F5A7C53B6F1) [C](https://github.com/arbnorar/kino-tempus/tree/c43fbb6d97c264cfdeac791f4417661a0c3bc00b/contact.php?copilot_analytics_metadata=eyJldmVudEluZm9fbWVzc2FnZUlkIjoiTHFRUFFYQnJuREhpTXRmYm9wZkFSIiwiZXZlbnRJbmZvX2NsaWNrRGVzdGluYXRpb24iOiJodHRwczpcL1wvZ2l0aHViLmNvbVwvYXJibm9yYXJcL2tpbm8tdGVtcHVzXC90cmVlXC9jNDNmYmI2ZDk3YzI2NGNmZGVhYzc5MWY0NDE3NjYxYTBjM2JjMDBiXC9jb250YWN0LnBocCIsImV2ZW50SW5mb19jbGlja1NvdXJjZSI6ImNpdGF0aW9uTGluayIsImV2ZW50SW5mb19jb252ZXJzYXRpb25JZCI6InJjeDFQWHBpSGY2SFpvN1VBZlU4OSJ9&citationMarker=9F742443-6C92-4C44-BF58-8F5A7C53B6F1)
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
