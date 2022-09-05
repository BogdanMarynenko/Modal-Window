let btns = document.querySelectorAll('*[data-btn]');

for(let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function (event) {
    let atr = event.target.getAttribute('data-btn');
    let modal = document.querySelector(`[data-window = ${atr}]`);
    modal.style.display = 'block';
    modal.querySelector(".close_modal_window").addEventListener('click', () => modal.style.display = "none");
  });
};
window.onclick = (e) =>{
 if(e.target.hasAttribute('data-window')){
  e.target.style.display = "none";
 };
};
