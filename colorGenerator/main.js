function activeNavbar() {
  const links = document.querySelectorAll('.nav-link');

  links.forEach(link => {
    if (document.location.href.indexOf(link.href) >= 0) {
      return link.classList.add('active');
    };
  });
};
activeNavbar()