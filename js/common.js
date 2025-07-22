jQuery(document).ready(function ($) {


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

	// social slider

	$('.js-address-slid').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 8000,
		arrows: false,
		pauseOnHover: false,
		cssEase: 'linear'
	});

	$('.js-team-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 8000,
		arrows: false,
		pauseOnHover: false,
		cssEase: 'linear'
	});

	// client
	$('.js-client-txt-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		autoplay: true,
		fade: true,
		asNavFor: '.js-client-images-slider'
	});
	$('.js-client-images-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.js-client-txt-slider',
		dots: false,
		autoplay: true,
		arrows: false,
		centerMode: true,
		focusOnSelect: true
	});
});
