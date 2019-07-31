$('.about, .skill, .project, .contact').hide();

$(document).ready(function () {
	$('nav').click(function () {
		$('nav').toggleClass('active');
		$('#baner').toggleClass('active');
		$('#groupone').toggleClass('active');
		$('.subsoil').toggleClass('active');
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

//Code modifier color background baner
const baner = document.getElementById("baner");
window.addEventListener('scroll', (e) => {
	if (e.pageY >= window.innerHeight) {
		baner.style.backgroundColor = "#324277";
	} else {
		baner.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
	}
})

//Code operating change color icon and text
const frontend = document.querySelector(".i_rot1");
const backend = document.querySelector(".i_rot2");
const otherSkill = document.querySelector(".i_rot3");
const frontImg = document.querySelector(".f_img");
const backImg = document.querySelector(".s_img");
const otherImg = document.querySelector(".t_img");

frontend.addEventListener('click', () => {
	frontend.classList.add("active");
	backend.classList.remove("active");
	otherSkill.classList.remove("active");
	frontImg.classList.add("active");
	backImg.classList.remove("active");
	otherImg.classList.remove("active");
})
backend.addEventListener('click', () => {
	backend.classList.add("active");
	frontend.classList.remove("active");
	otherSkill.classList.remove("active");
	backImg.classList.add("active");
	frontImg.classList.remove("active");
	otherImg.classList.remove("active");
})
otherSkill.addEventListener('click', () => {
	otherSkill.classList.add("active");
	backend.classList.remove("active");
	frontend.classList.remove("active");
	otherImg.classList.add("active");
	backImg.classList.remove("active");
	frontImg.classList.remove("active");
})