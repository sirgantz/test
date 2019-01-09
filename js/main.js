/*function countup(className){ //className - имя класса, в котором есть число
        var countBlockTop = $("."+className).offset().top; //смещение блока с числом относительно верхнего края	
        var windowHeight = window.innerHeight;//высота окна браузера
	var show = true;// отвечает, что если один раз счетчик сработает, больше не срабатывал
					
	$(window).scroll( function (){
		if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){ 
			show = false; //если мы видим число, то больше его не надо показывать
						
			$('.'+className).spincrement({ //вызов плагина с параметрами 
				from: 1,               //начинать с 1
				duration: 4000,        //задержка счетчика
			});
		}
	})	
}*/

/*
$(window).scroll( function (){
	$("#v0").css({
    	"top": 120+($(window).scrollTop()/1.55)+"px"
    });
});
*/


   


$('.counter_1').spincrement({
	from: 1,
	duration: 2500,
});


$('.counter_2').spincrement({
	from: 1,
	duration: 2500,
});


$('.counter_3').spincrement({
	from: 1,
	duration: 2500,
});


$('.counter_4').spincrement({
	from: 1,
	duration: 2500,
});



var vid = document.getElementById('v0');
//var vid = $('#v0')[0]; // jquery опция

// остановка видео при загрузке
vid.pause();

// Пошаговое воспроизведение видео при прокрутке страницы
window.onscroll = function(){
vid.pause();
};

// Обновления видеокадров для плавного воспроизведения при прокрутке
setInterval(function(){
vid.currentTime = window.pageYOffset/400;
}, 40);




 $("#v0").css({
         "width" : $(".par_v0").width()*1.2
                  });

var hh = $('.zagolovok').height();
var hh2 = $('#v0').height();
$('#v0').css({"top":hh-hh2/1.5+"px"});


$(window).resize(function() {
     $("#v0").css({
         "width" : $(".par_v0").width()*1.2
                  });
    var hh = $('.zagolovok').height();
var hh2 = $('#v0').height();
$('#v0').css({"top":hh-hh2/1.5+"px"});
     });


