$('.menu_mobile, .hide').hide();

$(document).ready(function () {
	$('nav').click(function () {
		$('nav').toggleClass('active');
		$('.menu_mobile').animate({
			width: 'toggle'
		}, 300);
		$('.hide').animate({
			visibility: 'toggle'
		});
		$('body').toggleClass('stop-scrolling')
	});
});

var size = 0;
var price = document.getElementById("price").innerHTML;

$(document).ready(function(){
    $('.minus').click(function (){
        if (size > 0){
            size--;
            size_pizza();
        }
    });
    $('.plus').click(function (){
        if (size < 3){
            size++;
            size_pizza();
        }
    });
});

function size_pizza(){
if (size == 0){
        document.getElementById("js_size").innerHTML = "Small";
        document.getElementById("price").innerHTML = price;
    }
if (size == 1){
        document.getElementById("js_size").innerHTML = "Medium";
        document.getElementById("price").innerHTML = (price * 0.2 + price * 1).toFixed(2);
    }
if (size == 2){
        document.getElementById("js_size").innerHTML = "Large";
        document.getElementById("price").innerHTML = (price * 0.5 + price * 1).toFixed(2);
    }
if (size == 3){
        document.getElementById("js_size").innerHTML = "Party";
        document.getElementById("price").innerHTML = (price * 0.8 + price * 1).toFixed(2);
    }
};