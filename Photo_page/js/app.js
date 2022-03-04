const sliderMain = new Swiper('.slider_main', {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
    0:{
        slidesPerView:2.5,
        spaceBetween:20
    },
    680:{
        slidesPerView:3.5,
        spaceBetween:60
    }
    }
})

const sliderBg = new Swiper('.slider_bg', {
    centeredSlides: true,
    parallax: true,
    spaceBetween: 60,
    slidesPerView: 3.5,
})

sliderMain.controller.control = sliderBg

document.querySelectorAll('.slider__item').forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('opened')
    })
})

let desc = document.querySelector('.description')
sliderMain.on('slideChange', e => {
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
    console.log(rawFile.readyState)
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                var SummDok = document.getElementById('desc'),
                SummSumm= allText;
                SummDok.innerHTML = SummSumm

            }
        }
    }
    rawFile.send(null);
}

window.onload = function () {
console.log(readTextFile('http://localhost:63342/My_website/Photo_page/html/text.txt'))
}




