window.addEventListener('scroll', function (e) {
    var header = document.getElementById('header');
    console.log(header)
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
            header.classList.add('nav-colored');
            header.classList.remove('nav-transparent');
        } else {
            header.classList.add('nav-transparent');
            header.classList.remove('nav-colored');
        }
  });