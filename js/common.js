document.addEventListener("DOMContentLoaded", function(e){
    const contents = document.querySelector("section#contents");

    const slider = document.querySelector("div.slider");
    const imgSlider = tns({
        container: slider,
        nav: false,
        tems: 1,
        mouseDrag: true,
        // loop: true,
        // autoplay: true,
        // autoplayHoverPause: true,
        // autoplayTimeout: 2500,
        controls: false
    });

    const imgSliderPrev = document.querySelectorAll("ul.sliderControl button.prev");
    const imgSliderNext = document.querySelectorAll("ul.sliderControl button.next");

    for (let i = 0; i < imgSliderPrev.length; i++){
        imgSliderPrev[i].onclick = (() => {
            imgSlider.goTo("prev");
        });
    }

    for (let i = 0; i < imgSliderNext.length; i++){
        imgSliderNext[i].onclick = (() => {
            imgSlider.goTo("next");
        });
    }

    const slidePageNumCurrent = document.querySelector("p.num > span.current");
    const slidePageNumTotal = document.querySelectorAll("p.num > span.total");
    imgSlider.events.on("transitionEnd", function(){
        slidePageNumCurrent.innerText = imgSlider.getInfo().slideCount;
        slidePageNumTotal.innerText = imgSlider.getInfo().index;
    });

});