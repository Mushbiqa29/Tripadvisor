const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  sidebar.classList.toggle('active');

  // For tablets only
  if (window.innerWidth <= 1024 && window.innerWidth > 768) {
    sidebar.classList.toggle('expanded');
  }
});