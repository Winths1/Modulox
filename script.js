totop.addEventListener('click',()=>window.scrollTo(0,0)) ;

window.addEventListener('scroll',
    () => {
        if (window.scrollY > 250) {
            totop.classList.remove('cache')
        } else {
            totop.classList.add('cache')
        }
    }
)