var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        }
    },
});


document.querySelector('.menu-burger').addEventListener('click', ()=> {
    document.querySelector('.main-menu').classList.toggle('main-menu--active');
    document.querySelector('.menu-burger').classList.toggle('menu-burger--active');
    document.body.classList.toggle('overflow--active');
});

const menuItems = document.querySelector('.main-menu__list').getElementsByClassName('main-menu__item');
for (const menuItem of menuItems) {
    menuItem.addEventListener('click', ()=>{
        document.querySelector('.main-menu__link--active').classList.toggle('main-menu__link--active');
        menuItem.classList.toggle('main-menu__link--active');
        document.querySelector('.main-menu').classList.toggle('main-menu--active');
        document.querySelector('.menu-burger').classList.toggle('menu-burger--active');
        document.body.classList.toggle('overflow--active');
    })
}

$("form").submit(function() {
    let th = $(this);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: th.serialize(),
        success: function(data) {
            th.trigger("reset");
        }
    });
    return false;
});