let fadeIns = document.querySelectorAll('.fadeIn'); 

function fadeIn() {
    fadeIns.forEach(fadein => { 
        let viewHeight = window.innerHeight - 100; 
        let topEdge = fadein.getBoundingClientRect().top; 
        if (viewHeight > topEdge) { 
            fadein.classList.add('inView'); 
        } else {
            fadein.classList.remove('inView'); 
        }
    })
}

window.addEventListener('scroll', fadeIn);