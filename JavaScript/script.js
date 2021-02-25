console.log('hello world!')
const person = new Object({
	age: 18,
	name: 'Semen'
})

$(function () {
	let introH = $('.header').innerHeight()
	console.log(introH)
	let header = $('.intro__inner')
	let scrollOffset = $(window).scrollTop()

	// Fixed Intro
	checkScroll(scrollOffset)

	$(window).on('scroll', function () {
		scrollOffset = $(this).scrollTop()
		checkScroll(scrollOffset)
	})

	function checkScroll(scrollOffset) {
		if (scrollOffset >= introH) {
			header.addClass('fixed')
		}
		else {
			header.removeClass('fixed')
		}
	}

	//Плавный переход
	$('[data-scroll]').on('click', function (event) {
		event.preventDefault
		let $this = $(this)
		let elementId = $this.data('scroll')
		let elementOffset = $(elementId).offset().top

		$('#nav1 a').removeClass('active')

		$this.addClass('active')

		$('html, body').animate({
			scrollTop: elementOffset
		}, 500)
	})
})