$('.about, .skill, .project, .contact').hide();

$(document).ready(function () {
	$('nav').click(function () {
		$('nav').toggleClass('active');
		$('#baner').toggleClass('active');
		$('#groupone').toggleClass('active');
		$('.about').animate({
			width: 'toggle'
		}, 300);
		$('.skill').delay(300).animate({
			width: 'toggle'
		});
		$('.project').delay(600).animate({
			width: 'toggle'
		});
		$('.contact').delay(900).animate({
			width: 'toggle'
		});
	})
})