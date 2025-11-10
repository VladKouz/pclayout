const modalbtn = document.querySelector('.modal__button')
const modal = document.querySelector('.modal')
//console.log(modal);

modalbtn.addEventListener('click', ()=> {
    //console.dir(modal);
    modal.style.display = 'flex';

})

modal.addEventListener('click', (event) => {
    modalContent = event.target.closest('.modal__inner')
    //console.log(modalContent);
    if (!modalContent) {
        modal.style.display = 'none';
     }
})

