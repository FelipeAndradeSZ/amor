    $(document).ready(function() {
        $(window).scroll(function() {
            if (this.scrollY > 20) {
                $('.navbar').addClass("sticky");
            } else {
                $('.navbar').removeClass("sticky");
            }
        });
        var typed = new Typed(".typing", {
            strings: ["Seu Amor", "Seu namorado", "Felipe Andrade"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        })


        $('.menu-btn').click(function() {
            $('.navbar .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");

        });
        $('.carousel').owlCarousel({
            margin: 20,
            loop: true,
            autoplayTimeout: 2000,
            autoplayHoverPauser: true,
            responsive: {
                0: {
                    items: 1,
                    na: false
                },
                600: {
                    items: 2,
                    na: false
                },
                1000: {
                    items: 3,
                    na: false
                }
            }
        });
    });