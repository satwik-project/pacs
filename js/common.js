jQuery(document).ready(function ($) {



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
});
