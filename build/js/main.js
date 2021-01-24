(function($){
    new WOW().init();
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
        if($('div').is('.news-slider-wrapper')) {
            if($(window).width() < 1025) {
                $('.news-slider-wrapper').css({
                    'width': $(window).width() - $('.news-slider-wrapper').offset().left
                });
            } else {
                $('.news-slider-wrapper').css({
                    'width': '100%'
                });
            }

        }
    });
    //---------- HERO GAME HOVER ----------//
        var parentWidth,
            contentWidth,
            offsetClip,
            t;


        // initGameItm($('.hero-game-item:first-child .hero-game'));
        // $(window).on('resize',initGameItm($('.hero-game-item:first-child .hero-game')));
    // $('.hero-game').hover(function () {
    //     console.log('Hover',$(this))
    // },function () {
    //
    //     setTimeout(function () {
    //         console.log('Hover Over',$(this));
    //     },400);
    //
    // });

        // $('.hero-game').hover(function () {
        //     parentWidth = $(this).width();
        //     contentWidth = $(this).find('.hero-game-image').width();
        //     offsetClip = (contentWidth - parentWidth) / 2;
        //     $('.hero-game-item').removeClass('hero-game-hover');
        //     $(this).parent().addClass('hero-game-hover');
        //     $(this).find('.hero-game-image').css({
        //         'transform': 'translateX(-'+offsetClip+'px)',
        //         'clip-path' : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        //     });
        // }, function () {
        //     parentWidth = $(this).width();
        //     contentWidth = $(this).find('.hero-game-image').width();
        //     offsetClip = (contentWidth - parentWidth) / 2;
        //     $(this).find('.hero-game-image').css({
        //         'transform': 'translateX(-'+offsetClip+'px)',
        //         'clip-path' : 'polygon('+offsetClip+'px 0, calc(100% - '+offsetClip+'px) 0, calc(100% - '+offsetClip+'px) 100%, '+offsetClip+'px 100%)'
        //     });
        //
        //
        //     t = setTimeout(function () {
        //         // $('.hero-game-item').removeClass('hero-game-hover');
        //     },400);
        // });
    $(document).ready(function () {

        //-------- SLIDER INIT ---------//
        var scrollSlider = new Swiper('.competition-slider', {
            slidesPerView: 'auto',
            spaceBetween: 60,
            freeMode: true,
            pagination: false,
            observer: true,
            observeParents: true,
            mousewheel: {
                forceToAxis: true,
            },
            navigation: {
                nextEl: '.competition-slider-next',
                prevEl: '.competition-slider-prev',
            }
        });
        var twitchSlider = new Swiper('.twitch-slider', {
            slidesPerView: 'auto',
            spaceBetween: 60,
            freeMode: true,
            pagination: false,
            observer: true,
            observeParents: true,
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
            spaceBetween: 30,
            freeMode: true,
            pagination: false,
            mousewheel: {
                forceToAxis: true,
            },
            navigation: {
                nextEl: '.team-slider-next',
                prevEl: '.team-slider-prev',
            },
            breakpoints: {
                768: {
                    spaceBetween: 30,
                },
                1025: {
                    slidesPerView: 'auto',
                    spaceBetween: 60,
                }
            }
        });

        var chanelSlider = new Swiper('.channel-slider', {
            slidesPerView: 'auto',
            spaceBetween: 60,
            freeMode: true,
            pagination: false,
            loop: true,
            observer: true,
            observeParents: true,
            mousewheel: {
                forceToAxis: true,
            },
            navigation: {
                nextEl: '.chanel-slider-next',
                prevEl: '.chanel-slider-prev',
            },

        });
        var leaderSlider = new Swiper('.leader-slider', {
            slidesPerView: 'auto',
            spaceBetween: 60,
            freeMode: true,
            pagination: false,
            observer: true,
            observeParents: true,
            mousewheel: {
                forceToAxis: true,
            },
            navigation: {
                nextEl: '.leader-slider-wrapper .leader-slider-next',
                prevEl: '.leader-slider-wrapper .leader-slider-prev',
            }
        });
        var newsSlider = new Swiper('.news-slider', {
            slidesPerView: 'auto',
            spaceBetween: 30,
            freeMode: true,
            pagination: false,
            observer: true,
            observeParents: true,
            mousewheel: {
                forceToAxis: true,
            },
            navigation: {
                nextEl: '.news-slider-wrapper .news-slider-next',
                prevEl: '.news-slider-wrapper .news-slider-prev',
            },
            breakpoints: {
                1025: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 60,
                }
            }
        });
        var heroGameSlider = new Swiper('.mobileHeroGameList-slider', {
            slidesPerView: 'auto',
            spaceBetween: 22,
            freeMode: true,
            init: true,
            observer: true,
            observeParents: true,
            mousewheel: {
                forceToAxis: true,
            },
            breakpoints: {
                1025: {
                    init: false,
                    mousewheel: false,
                    spaceBetween: 0,
                },
            }
        });
        var competitionMobileSlider = new Swiper('.competition-mobile-slider', {
            slidesPerView: 'auto',
            spaceBetween: 39,
            freeMode: true,
            observer: true,
            observeParents: true,
            mousewheel: {
                forceToAxis: true,
            }
        });
        // competitionMobileSlider.update();
        var newsnMobileSlider = new Swiper('.news-mobile-slider', {
            slidesPerView: 'auto',
            spaceBetween: 39,
            freeMode: true,
            observer: true,
            observeParents: true,
            mousewheel: {
                forceToAxis: true,
            }
        });


        //--------- TEAM SLIDER DESTROY -------//
        $(window).on('resize load',function () {
            if($(window).width() < 1025 && $(window).width() > 767) {
                if ( teamSlider !== undefined ) {

                    teamSlider.destroy( true, true );
                    teamSlider = undefined;
                    // console.log(teamSlider);
                }
            } else {

                // console.log(teamSlider);
                if ( teamSlider == undefined) {
                    teamSlider = new Swiper('.team-slider', {
                        slidesPerView: 'auto',
                        spaceBetween: 30,
                        freeMode: true,
                        pagination: false,
                        mousewheel: {
                            forceToAxis: true,
                        },
                        navigation: {
                            nextEl: '.team-slider-next',
                            prevEl: '.team-slider-prev',
                        },
                        breakpoints: {
                            768: {
                                spaceBetween: 30,
                            },
                            1025: {
                                slidesPerView: 'auto',
                                spaceBetween: 60,
                            }
                        }
                    });
                }
            }

        });


        //--------- TIMER INIT ----------//
        if($('*').is('.countdown')) {
            $('.countdown').each(function () {
                var date = $(this).attr('data-date');
                // console.log(date)
                $(this).countdown({
                    date: date,
                    onEnd:function() {
                        // console.log(data);
                        var elClass = this;
                        // console.log(elClass);
                        $(this.el).parents('.status').addClass('started');
                        $(this.el).parents('.status').find('.countdown-title').text('Live Now');
                        $(this.el).parents('.status').find('.countdown').fadeOut(400);
                        $(this.el).parents('.twitch-stream').addClass('twitch-stream-active twitch-stream-started');
                        return;
                    },
                    render: function(data) {
                        $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + "<span>D:</span></div><div>" + this.leadingZeros(data.hours, 2) + "<span>H:</span></div><div>" + this.leadingZeros(data.min, 2) + "<span>M:</span></div><div>" + this.leadingZeros(data.sec, 2) + "<span>S</span></div>");
                    }
                });
            });
            // console.log('Has Contdown')
        }

        //-------- Menu Trigger -------//
        $('.menu-trigger').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $('.header-wrapper').toggleClass('open-menu-header');
            $('body').toggleClass('overflow-hidden');

            if($('div').is('.marquee-text') && $(window).scrollTop() < 58) {
                if($(this).hasClass('active')) {
                    $('.header-wrapper').css({
                        'transform': 'translateY(-'+ (58-$(window).scrollTop())+'px)'
                    })
                } else {
                    $('.header-wrapper').css({
                        'transform': 'translateY(0px)'
                    })
                }

            }
            if($('.mobile-menu-wrapper').hasClass('open-menu')) {
                $('.mobile-menu-wrapper').stop().fadeOut(500);
                setTimeout(function () {
                    $('.mobile-menu-wrapper').removeClass('open-menu')
                },500);
            } else {
                $('.mobile-menu-wrapper').show().addClass('open-menu');
            }

        });




        //--------- TAB HANDLER ---------//
        $('[data-tab]').on('click',function (e) {
            // e.preventDefault();
            if(!$(this).hasClass('active')) {
                var parent = $(this).parents('.tab-wrapper');
                var tabID = $(this).attr('data-tab');


                parent.find('.tab-content').css({
                    height: parent.find('.tab-content').outerHeight()
                });
                parent.find('[data-tab*="#"]').removeClass('active');
                $(this).addClass('active');

                parent.find('.tab-item').stop().fadeOut(400);
                if($(this).hasClass('dropdown-menu-item')) {
                    console.log('Has Dropdown');
                    $(this).parents('.custom-dropdown').removeClass('custom-dropdown--open');
                    $(this).parents('.custom-dropdown').find('.dropdown-trigger').text($(this).text());
                    parent.find('.tab-menu-mobile-item').stop().fadeOut(400).removeClass('active show');
                }
                setTimeout(function () {
                    parent.find('.tab-item').removeClass('active show');
                    $(tabID).stop().fadeIn(400).addClass('active');
                    parent.find('.tab-content').css({
                        height:  $(tabID).outerHeight()
                    });
                    console.log($('.tab-menu-mobile-item[data-menu-for="'+tabID+'"]'));
                    $('.tab-menu-mobile-item[data-menu-for="'+tabID+'"]').stop().fadeIn(400).addClass('active');
                    if($(this).hasClass('dropdown-menu-item')) {

                        console.log($('.tab-menu-mobile-item[data-menu-for="'+tabID+'"]'));
                    }
                },400);


            }

        });
        $('[data-tab-mobile]').on('click',function (e) {
            if(!$(this).hasClass('active')) {
                var parent = $(this).parents('.tab-wrapper');
                var tabID = $(this).attr('data-tab-mobile');
                var parentTabID = $(this).parents('.tab-menu-mobile-item').attr('data-menu-for');
                console.log(tabID);

                // parent.find('.tab-content').css({
                //     height: parent.find('.tab-content').outerHeight()
                // });
                $(this).parents('.tab-menu-mobile-item').find('[data-tab-mobile]').removeClass('active');
                $(this).addClass('active');

                $(parentTabID).find('.child-tab').stop().fadeOut(400);
                setTimeout(function () {
                    $(parentTabID).find('.tab-item').removeClass('active show');
                    $(tabID).stop().fadeIn(400).addClass('active');
                    console.log($(tabID).height());
                    parent.find('.tab-content').css({
                        height:  $(tabID).height()
                    });
                },400);

            }
        });
        $(window).on('load resize', function () {
            // if($(window).width() < 1500) {
            //     $('.competition-table__large .tab-head').addClass('mobile-view');
            // } else {
            //     $('.competition-table__large .tab-head').removeClass('mobile-view');
            // }

        });
        $('.dropdown-trigger').on('click',function (e) {
            e.preventDefault();
            $(this).parents('.custom-dropdown').toggleClass('custom-dropdown--open');
        });
        $('.dropdown-menu-item').on('click',function () {
            if(!$(this).hasClass('active')) {
                $(this).parents('.custom-dropdown').find('.dropdown-menu-item').removeClass('active');
                $(this).addClass('active');
                $(this).parents('.custom-dropdown').removeClass('custom-dropdown--open');
                $(this).parents('.custom-dropdown').find('.dropdown-trigger').text($(this).text());
            }
        });
        $(document).mouseup(function (e){ // событие клика по веб-документу
            var div = $(".custom-dropdown"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.removeClass('custom-dropdown--open'); // скрываем его
            }
        });

        //------ SELECT2 INIT -------//
        $('.select-green').select2({
            theme: "classic",
            width: '100%'
        });
        $('.select-green').on('select2:select', function (e) {
            // console.log($(this));
            $(this).parent().find('.select2-selection__rendered').css({'color':'#fff'})
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
                $(this).find('.submenu').addClass('active');
            } else {
                $('.header-wrapper').removeClass('header-hover');
                $(this).find('.submenu').removeClass('active');
                $('.main-menu-link').removeClass('active');
            }
        }, function () {
            $('.header-wrapper').removeClass('header-hover');
            $(this).find('.submenu').removeClass('active');
            $('.main-menu-link').removeClass('active');
        });
        $('.prof-link-logged,.profile-submenu').hover(function () {
            $('.header-wrapper').addClass('header-hover header-hover-profile');
            $('.profile-submenu').stop().fadeIn(400).addClass('active');
        }, function () {
            $('.header-wrapper').removeClass('header-hover header-hover-profile');
            $('.profile-submenu').stop().fadeOut(400).removeClass('active');
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
        });


        //---------- File Input Handler ------------//
        $('#file-upload').on('change', function () {
            getFileData(this);
        });

        function getFileData(myFile){
            var file = myFile.files[0];
            var filename = file.name;
            $('#filename').val(filename)
        }


        // ------- ANCOR Handler --------//
        $(".ancor").on("click", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();

            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),

                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top - 200;

            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });

        //--------- FAQ ------------//
        $('.faq-trigger').on('click',function (e) {
            e.preventDefault();
            $(this).parents('.faq').toggleClass('active').find('.faq-body').stop().slideToggle(400);
        });

        //---------- MODALS -----------//
        $('.create-ticket-btn').on('click',function (e) {
            e.preventDefault();
            $('.modal-ticket').stop().fadeToggle(400);
            $('body').toggleClass('overflow-hidden');
        });

        $('[data-modal]').on('click',function (e) {
            e.preventDefault();
            console.log('Click Upgrade');
            var modalId = $(this).attr('data-modal');
            $(modalId).fadeIn(400).addClass('modal-open');
            $('body').addClass('overflow-hidden');
        });
        $('.close-modal').on('click',function (e) {
            e.preventDefault();
            $('.modal').fadeOut(400).removeClass('modal-open');
            $('body').removeClass('overflow-hidden');
        });
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
