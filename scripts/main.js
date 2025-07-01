function loadComponent(id, path) {
  return fetch(path)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error(`Error loading ${path}:`, err));
}

// Load all components
Promise.all([
  loadComponent("navbar", "assets/navbar.html"),
  loadComponent("home", "assets/home.html"),
  loadComponent("about", "assets/about.html"),
  loadComponent("education", "assets/education.html"),
  loadComponent("skills", "assets/skills.html"),
  loadComponent("highlight", "assets/highlight.html"),
  loadComponent("projects", "assets/projects.html"),
  loadComponent("achievements", "assets/achievements.html"),
  loadComponent("clubs", "assets/clubs.html"),
  loadComponent("contact", "assets/contact.html"),
  loadComponent("footer", "assets/footer.html")
]).then(() => {
  // ✅ Now DOM is ready — activate scroll tracking
  const links = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
      const top = window.scrollY;
      if (top >= section.offsetTop - 60) {
        current = section.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
});
