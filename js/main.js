document.addEventListener("click", function (e) {
    if (e.target.closest("header .navigation button") || e.target.closest(".menuMobile button.close")) {
        document.querySelector("body").classList.toggle("scrollHidden")
        document.querySelector(".menuMobile").classList.toggle("open")
    }
    if (e.target.closest(".NosotrosHome .part1-2 img.bombabtn")) {
        document.querySelector("body").classList.add("nerds")
        setTimeout(() => {
            document.querySelector("body").classList.remove("nerds")
        }, 2000);
    }
})

MyApp = {
    marqueeHome: {
        init: function () {
            $('.marquee').marquee({
                duration: 4000,
                gap: 0,
                delayBeforeStart: 0,
                direction: 'left',
                duplicated: true,
            });
        }
    },
    animatioPortfolio: {
        init: function () {
            const portafolioSectionRef = document.querySelector("section.portafolio");
            const elementoAnimadoRef = document.querySelector("section.portafolio .lista1");
            const elementoAnimadoRef2 = document.querySelector("section.portafolio .lista2");

            gsap.fromTo(
                elementoAnimadoRef,
                { x: '80%' },
                {
                    x: '-20%',
                    duration: 5,
                    ease: 'power2.inOut',
                    scrollTrigger: {
                        trigger: portafolioSectionRef,
                        start: 'top 100%',
                        end: '50% 0%',
                        scrub: true,
                    },
                }
            );

            gsap.fromTo(
                elementoAnimadoRef2,
                { x: '-80%' },
                {
                    x: '20%',
                    duration: 5,
                    ease: 'power2.inOut',
                    scrollTrigger: {
                        trigger: portafolioSectionRef,
                        start: 'top 100%',
                        end: '50% 0%',
                        scrub: true,
                    },
                }
            );

        }
    },
    opacidadLogo: {
        init: function () {
            window.addEventListener('scroll', function() {
            var logo = document.querySelector('header .logo');
            var scrollPosition = window.scrollY;
            var opacity = 1 - (scrollPosition / 500);
            opacity = Math.min(1, Math.max(0, opacity));
            logo.style.opacity = opacity.toString();
            });
        }
    },
    swiperPPortafolioInterna: {
        init: function () {
            var swiper = new Swiper(".swiperPPortafolioInterna", {
                slidesPerView: 4,
                spaceBetween: 40,
                loop: true,
                Infinity: true,
            });
        }
    }
}

if ($('section.hero .marquee').length > 0) {
    MyApp.marqueeHome.init();
}

if ($('section.portafolio .ListaItemsPortfolio').length > 0) {
    MyApp.animatioPortfolio.init();
}

if ($('header .logo').length > 0) {
    MyApp.opacidadLogo.init();
}

if ($('.swiperPPortafolioInterna').length > 0) {
    MyApp.swiperPPortafolioInterna.init();
}