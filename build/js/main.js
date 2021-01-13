(function($){
    new WOW().init();

    //---------- HERO GAME HOVER ----------//
        var parentWidth,
            contentWidth,
            offsetClip,
            t;


        initGameItm($('.hero-game-item:first-child .hero-game'));
        $(window).on('resize',initGameItm($('.hero-game-item:first-child .hero-game')));


        $('.hero-game').hover(function () {
            parentWidth = $(this).width();
            contentWidth = $(this).find('.hero-game-image').width();
            offsetClip = (contentWidth - parentWidth) / 2;
            $('.hero-game-item').removeClass('hero-game-hover');
            $(this).parent().addClass('hero-game-hover');
            $(this).find('.hero-game-image').css({
                'transform': 'translateX(-'+offsetClip+'px)',
                'clip-path' : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
            });
        }, function () {
            parentWidth = $(this).width();
            contentWidth = $(this).find('.hero-game-image').width();
            offsetClip = (contentWidth - parentWidth) / 2;
            $(this).find('.hero-game-image').css({
                'transform': 'translateX(-'+offsetClip+'px)',
                'clip-path' : 'polygon('+offsetClip+'px 0, calc(100% - '+offsetClip+'px) 0, calc(100% - '+offsetClip+'px) 100%, '+offsetClip+'px 100%)'
            });


            t = setTimeout(function () {
                // $('.hero-game-item').removeClass('hero-game-hover');
            },400);
        });
    $(document).ready(function () {

        //-------- SLIDER INIT ---------//
        var scrollSlider = new Swiper('.competition-slider', {
            slidesPerView: 'auto',
            spaceBetween: 60,
            freeMode: true,
            pagination: false,
            mousewheel: {
                forceToAxis: true,
            },
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // }
        });
        var twitchSlider = new Swiper('.twitch-slider', {
            slidesPerView: 'auto',
            spaceBetween: 60,
            freeMode: true,
            pagination: false,
            mousewheel: {
                forceToAxis: true,
            },
            navigation: {
                nextEl: '.twitch-slider-next',
                prevEl: '.twitch-slider-prev',
            }
        });
        var teamSlider = new Swiper('.team-slider', {
            slidesPerView: 'auto',
            spaceBetween: 60,
            freeMode: true,
            pagination: false,
            mousewheel: {
                forceToAxis: true,
            },
            navigation: {
                nextEl: '.team-slider-next',
                prevEl: '.team-slider-prev',
            }
        });

        var chanelSlider = new Swiper('.channel-slider', {
            slidesPerView: 'auto',
            spaceBetween: 60,
            freeMode: true,
            pagination: false,
            mousewheel: {
                forceToAxis: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        });
        var leaderSlider = new Swiper('.leader-slider', {
            slidesPerView: 'auto',
            spaceBetween: 60,
            freeMode: true,
            pagination: false,
            mousewheel: {
                forceToAxis: true,
            },
            navigation: {
                nextEl: '.leader-slider-wrapper .leader-slider-next',
                prevEl: '.leader-slider-wrapper .leader-slider-prev',
            }
        });







            $(window).on('load resize',function () {
                if($('div').is('.scroll-slider')) {
                    $('.scroll-slider').css({
                        'width': $(window).width() - $('.scroll-slider').offset().left
                    });
                }
                if($('div').is('.slider-wrapper')) {
                    $('.slider-wrapper').css({
                        'width': $(window).width() - $('.slider-wrapper').offset().left
                    });
                }
            });


        //--------- TAB HANDLER ---------//
        $('[data-tab*="#"]').on('click',function (e) {
            e.preventDefault();
            if(!$(this).hasClass('active')) {
                var parent = $(this).parents('.tab-wrapper');
                var tabID = $(this).attr('data-tab');


                parent.find('.tab-content').css({
                    height: parent.find('.tab-content').outerHeight()
                });
                parent.find('[data-tab*="#"]').removeClass('active');
                $(this).addClass('active');

                parent.find('.tab-item').stop().fadeOut(400);
                setTimeout(function () {
                    parent.find('.tab-item').removeClass('active show');
                    $(tabID).stop().fadeIn(400).addClass('active');
                    parent.find('.tab-content').css({
                        height:  $(tabID).outerHeight()
                    });
                },400);
            }
        });


        //------ MARQUE BANNER ------//
        $('.marquee-text').marquee({
            //speed in milliseconds of the marquee
            duration: 10000,
            //gap in pixels between the tickers
            gap: 0,
            //time in milliseconds before the marquee will start animating
            delayBeforeStart: 0,
            //'left' or 'right'
            direction: 'left',
            //true or false - should the marquee be duplicated to show an effect of continues flow
            duplicated: true
        });


        //-------- MENU HOVER --------//

        $('.main-menu-item').hover(function () {
            if($(this).hasClass('main-menu-item__has-child')) {
                $('.header-wrapper').addClass('header-hover');
                $(this).find('.main-menu-link').addClass('active');
            } else {
                $('.header-wrapper').removeClass('header-hover');
                $('.main-menu-link').removeClass('active');
            }
        }, function () {
            $('.header-wrapper').removeClass('header-hover');
            $('.main-menu-link').removeClass('active');
        });





        //---------- FILTER CLICK ---------//
        $('.platform-list.filter .platform-item').on('click',function (e) {
            e.preventDefault();
            $(this).toggleClass('active');
        });


        //--------- TWITCH SWITCHER ---------//

        $('[data-twitch]').on('click', function (e) {
            e.preventDefault();
            if(!$(this).parents('.twitch-stream').hasClass('twitch-stream-active') && $(this).parents('.twitch-stream').hasClass('twitch-stream-started') ) {
                var parentLocation = window.location.host;
                var twitchLink = $(this).attr('data-twitch') + '&parent=' + parentLocation;
                $('.twitch-video iframe').attr('src',twitchLink);
                $(this).parents('.swiper-container').find('.twitch-stream').removeClass('twitch-stream-active');
                $(this).parents('.twitch-stream').addClass('twitch-stream-active');
            }
        });


        //---------- SEARCH HANDLER ---------//
        $('.btn-search').on('click',function () {
            $(this).parents('.search-block').toggleClass('active-search')
        });

        $('.input-search').keyup(function() {
            var searchVal = $(this).val();
            if(searchVal != '') {
                $('.search-result').stop().fadeIn(400);
            } else {
                $('.search-result').stop().fadeOut(400);
            }
        });


        //----------- VIDEO WIDGET HANDLER -----------//
        $('.video-widget .btn-close').on('click',function (e) {
            e.preventDefault();
            $(this).parents('.video-widget').stop().fadeOut(400);
        })

    });

    function initGameItm(item) {
        var parentWidth = item.width();
        var contentWidth = item.find('.hero-game-image').width();
        var offsetClip = (contentWidth - parentWidth) / 2;
        $('.hero-game-image').css({
            'transform': 'translateX(-'+offsetClip+'px)',
            'clip-path' : 'polygon('+offsetClip+'px 0, calc(100% - '+offsetClip+'px) 0, calc(100% - '+offsetClip+'px) 100%, '+offsetClip+'px 100%)'
        });
        $('.hero-game-item:last-child').hover(function () {
            $(this).find('.hero-game-image').css({
                'transform': 'translateX(-'+offsetClip*2+'px)',
            })
            console.log('last child Hover')
        },function () {
            $(this).find('.hero-game-image').css({
                'transform': 'translateX(-'+offsetClip+'px)',
            })
        });
    }
})(jQuery);
