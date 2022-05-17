function changelang(a) {
    a.classList.toggle("menu__list-link--rotate");
    document.getElementsByClassName('select-lang__list')[0].classList.toggle("select-lang__list--hidden"); 
}

function changelangdrop(b) {
    b.classList.toggle("menu-drop__list-link--rotate");
    document.getElementsByClassName('select-lang-drop__list')[0].classList.toggle("select-lang-drop__list--hidden"); 
}


function myFunction(x) {
    x.classList.toggle("change");
   document.getElementsByClassName('menu-drop__list')[0].classList.toggle("menu-drop__list--active");
  };

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function preloader() {
      document.getElementById('preloader').classList.add("loading-block--active");
      await sleep(3000);
      document.getElementById('preloader').classList.remove("loading-block--active");
  }