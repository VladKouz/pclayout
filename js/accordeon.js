const contents = document.querySelectorAll('.program-line__content');
//console.log(contents);

contents.forEach((elem) => {
    const title = elem.querySelector('.program-line__title')
    const descr = elem.querySelector('.program-line__descr')
    // console.dir(title)
    // title.onclick = () => {
    //     console.log(title.nodeValue)
    // }

    title.addEventListener('click', () => {
        //console.log(title)
        descr.classList.toggle('active')
    })

    //   title.addEventListener('click', () => {
    //         console.log(title.nodeName)
    //     })

    //console.dir(descr.classList.remove);

})