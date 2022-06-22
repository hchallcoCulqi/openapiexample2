const addTag = ({ sectionTag, tpyeElement, rel, type, href }) => {
  const section = document.getElementsByTagName(sectionTag)[0];
  const tag = document.createElement(tpyeElement);
  if (rel !== undefined && rel !== null) {
    tag.setAttribute('rel', rel);
  }
  if (type !== undefined && type !== null) {
    tag.setAttribute('type', type);
  }
  tag.setAttribute('href', href);
  section.appendChild(tag);
}

window.addEventListener('load', () => {
  addTag({
    sectionTag: 'head',
    tpyeElement: 'link',
    rel: 'stylesheet',
    type: 'text/css',
    href: '/assets/styles/main.css'
  });

  const toggleNavMobile = document.querySelectorAll('#toggle-nav-mobile');
  const overlayNavMobile = document.querySelector('#overlay-nav-mobile');
  const contentNavMobile = document.querySelector('#content-nav-mobile');

  toggleNavMobile.forEach(element => {
    element.addEventListener('click', () => {
      overlayNavMobile.classList.toggle('active');
      contentNavMobile.classList.toggle('active');
    })

  });

});

