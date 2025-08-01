jQuery(document).ready(function ($) {

	 $("<span class='clickD'></span>").insertAfter(".navbar-nav li.menu-item-has-children > a");
    $('.navbar-nav li .clickD').click(function (e) {
        e.preventDefault();
        var $this = $(this);
        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.removeClass('toggled');
        }
        else {
            $this.parent().parent().find('.sub-menu').removeClass('show');
            $this.parent().parent().find('.toggled').removeClass('toggled');
            $this.next().toggleClass('show');
            $this.toggleClass('toggled');
        }
    });

    $(window).on('resize', function () {
        if ($(this).width() < 1025) {
            $('html').click(function () {
                $('.navbar-nav li .clickD').removeClass('toggled');
                $('.toggled').removeClass('toggled');
                $('.sub-menu').removeClass('show');
            });
            $(document).click(function () {
                $('.navbar-nav li .clickD').removeClass('toggled');
                $('.toggled').removeClass('toggled');
                $('.sub-menu').removeClass('show');
            });
            $('.navbar-nav').click(function (e) {
                e.stopPropagation();
            });
        }
    });
    // Navbar end



    /* ===== For menu animation === */
    $(".navbar-toggler").click(function () {
        $(".navbar-toggler").toggleClass("open");
        $(".navbar-toggler .stick").toggleClass("open");
        $('body,html').toggleClass("open-nav");
    });

    // Navbar end

if (document.querySelector(".cursor")) {
	// curser
	const cursor = document.querySelector(".cursor");
	const follower = document.querySelector(".cursor-follower");
	const cards = document.querySelectorAll(".timeline-item");
	const section = document.querySelector(".why-choose");

	let posX = 0,
		posY = 0,
		mouseX = 0,
		mouseY = 0;


	TweenMax.to({}, 0.02, {
		repeat: -1,
		onRepeat: function () {
			posX += (mouseX - posX) / 9;
			posY += (mouseY - posY) / 9;

			TweenMax.set(cursor, {
				css: {
					left: mouseX,
					top: mouseY,
				},
			});
		},
	});


	section.addEventListener("mousemove", function (e) {
		mouseX = e.pageX;
		mouseY = e.pageY;

		cursor.style.display = "block";
	});

	section.addEventListener("mouseleave", function () {
		cursor.style.display = "none";
	});

	cards.forEach((el) => {
		el.addEventListener("mouseenter", () => {
			cursor.classList.add("active");
		});

		el.addEventListener("mouseleave", () => {
			cursor.classList.remove("active");
		});
	});
	}

	// social slider

	$('.js-address-slid').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 8000,
		arrows: false,
		pauseOnHover: false,
		cssEase: 'linear',
		responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});

	$('.js-team-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 8000,
		arrows: false,
		pauseOnHover: false,
		cssEase: 'linear',
				responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 475,
      settings: {
        slidesToShow: 1,
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});

	// client
	$('.js-client-txt-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		autoplay: true,
		fade: true,
		asNavFor: '.js-client-images-slider',
	});
	$('.js-client-images-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.js-client-txt-slider',
		dots: false,
		autoplay: true,
		arrows: false,
		centerMode: true,
		focusOnSelect: true,
    	responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
	});
});
