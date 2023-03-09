
var swiper = new Swiper(".popular-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    cssMode: true,
    autoplay: {
        delay: 5500,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        510: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        758: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    },
    mousewheel: true,
    keyboard: true,
});



//show video

let playbutton = document.querySelector(".play-movie");

let video = document.querySelector(".video-container");


let myvideo = document.querySelector("#myvideo");


let closebtn = document.querySelector('.close-video');

playbutton.onclick = () => {
    video.classList.add("show-video");

    myvideo.play();
};

closebtn.onclick = () => {
    video.classList.remove("show-video");
    myvideo.pause();
}




// playbutton.addEventListener("click", function () {
//     video.classList.add("show-video");
//     console.log("clicked");
// });


