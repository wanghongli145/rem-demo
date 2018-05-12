require('../scss/rem.scss');
function initResize () {
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  let htmlDom = document.getElementsByTagName('html')[0];
  htmlDom.style.fontSize = (htmlWidth / 10) + 'px';
}
initResize();
window.addEventListener('resize',(e) => {initResize();})