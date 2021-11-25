document.addEventListener('DOMContentLoaded', function () {

    // Swipers

    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // And if we need scrollbar
        scrollbar: {
            hide: true,
        },

        autoplay: {
            delay: 4000,
        },

        speed: 1000,

    });

    const swiperGallery = new Swiper('.swiper-container-gallery', {
        loop: false,

        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    const swiperEditions = new Swiper('.swiper-container-editions', {
        loop: true,

        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
        loopFillGroupWithBlank: true,

        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.editions-swiper-button-next',
            prevEl: '.editions-swiper-button-prev',
        },

    })

    const swiperProjects = new Swiper('.projects__swiper', {
        loop: true,

        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 0,

        loopFillGroupWithBlank: true,

        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.projects-swiper-button-next',
            prevEl: '.projects-swiper-button-prev',
        },

    })

    // Select Custom

    const element = document.querySelector('#SelectCustom')
    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
    });

    // Yandex map

    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init() {
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.758468, 37.601088],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 15
        });


        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Леонтьевский переулок, дом 5/1',
                balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/placemark.svg',
                // Размеры метки.
                iconImageSize: [20, 20],
            }),
            // Размещение геообъекта на карте.
            myMap.geoObjects.add(myPlacemark);
    }

    // Input mask

    var selector = document.querySelector("input[type='tel']");
    var im = new Inputmask("+7(999) 999-99-99");
    im.mask(selector);

    new JustValidate('.contacts__form', {
        rules: {
            name: {
                required: true,
                minLength: 2,
                maxLength: 30
            },

            tel: {
                required: true,
                function: (name, value) => {
                    const phone = selector.inputmask.unmaskedvalue()
                    return Number(phone) && phone.length === 10
                }
            },

        },

        messages: { 
            name: {
                required: 'Недопустимый формат'
            },

            tel: {
                required: 'Недопустимый формат'
            },
        }
    });

    // Accordion 

    $(function () {
        $("#accordion").accordion();
        $("#accordionEmpty").accordion();
    });
});