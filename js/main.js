function changelang(a) {
    a.classList.toggle("menu__list-link--rotate");
    document.getElementsByClassName('select-lang__list')[0].classList.toggle("select-lang__list--hidden"); 
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function preloader() {
      document.getElementById('preloader').classList.add("loading-block--active");
      await sleep(3000);
      document.getElementById('preloader').classList.remove("loading-block--active");
  }