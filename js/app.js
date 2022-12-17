    let lefty= document.getElementById('left-pan');
    let righty= document.getElementById('right-pan');

    window.addEventListener('scroll', function(){
        let value = window.scrollY;

        lefty.style.left = value * 2 + 'px';
    })