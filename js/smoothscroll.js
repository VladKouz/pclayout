
//console.log(navBar);

const smoothscroll = () => {
    const navBar = document.querySelector('.header__nav')
    const links = navBar.querySelectorAll('a')

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            // console.log(link.getAttribute('href'))
            //console.log(seamless);
            const section = document.querySelector(link.getAttribute('href'))
            if (section) {
                //     //console.log('go');
                //     section.scrollIntoView({
                //         block: 'start',
                //         behavior: 'smooth'
                //     })
                // не кроссбраузерное...
                seamless.scrollIntoView(section, {
                    behavior: "smooth",
                    block: "start",
                    inline: "center",
                });


            }
        })
    })

}

smoothscroll()