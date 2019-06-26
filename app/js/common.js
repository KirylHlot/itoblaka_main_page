    $(document).ready(function () {
      $('#fullpage').fullpage({
      menu: '#navigation',
      verticalCentered: false,
      });

    });


$('.main_carousel').owlCarousel({
		loop: false,
		rewind: true,
		nav: false,
		responsiveClass: false,
		dots: false,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:450,
		responsive: {
      0: {
         items: 1
      },
   }
});

  var owl=$(".main_carousel");
  owl.owlCarousel();
  //$(".next") - находим нашу кнопку
  $(".button_right").click(function(){
    owl.trigger("next.owl.carousel");
  });
  $(".button_left").click(function(){
    owl.trigger("prev.owl.carousel");
  });
///смена индекса
  // Случаешь события карусели:
  owl.on('changed.owl.carousel', function(event) {
    let item = event.item.index+1;     // Позиция текущего слайда
    let currient_slide_name = this.getElementsByClassName('hidden_name')[event.item.index].innerText;
    change_current_slide_number(item, currient_slide_name);
  });

//всего слайдов
document.querySelector('.all_slides').innerText = document.getElementsByClassName('carosel_item_wrapper').length;

function change_current_slide_number(current_index, currient_slide_name) {
	document.querySelector('.current_slide').innerText = current_index;
	//45 символов
	document.querySelector('.title_button').innerText = currient_slide_name.substring(0,45);
}

$('.logotypes_carousel').owlCarousel({
		loop: true,
		nav: false,
		responsiveClass: true,
		margin: 0,
		padding: 0,
		dots: false,
		responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      1200: {
         items: 3
      }
   }
});

  var logotypes_carousel=$(".logotypes_carousel");
  logotypes_carousel.owlCarousel();
  //$(".next") - находим нашу кнопку
  $(".logotypes_carousel_right").click(function(){
    logotypes_carousel.trigger("next.owl.carousel");
  });
  $(".logotypes_carousel_left").click(function(){
    logotypes_carousel.trigger("prev.owl.carousel");
  });



$('.projects_carousel').owlCarousel({
    loop: true,
    nav: false,
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
         items: 2
      },     
      576: {
         items: 3
      },
   }
});

  var owl1=$(".projects_carousel");
  owl1.owlCarousel();
  //$(".next") - находим нашу кнопку
  $(".arrow_r").click(function(){
    owl1.trigger("next.owl.carousel");
  });
  $(".arrow_l").click(function(){
    owl1.trigger("prev.owl.carousel");
  });




document.querySelector('.tel_tomorrow_change').onclick=function(){
  this.classList.toggle('tomorrow');
  if (this.classList.contains('tomorrow')) {
   document.querySelector('.hidden_input_tomorrow').value = "Перезвоните завтра";
  } else {
    document.querySelector('.hidden_input_tomorrow').value = "Перезвоните сегодня";
  }
};


//////////main_nav

var burger_button = document.querySelector('.burger');
var main_nav = document.querySelector('.main_nav');
var close_menu_button = document.querySelector('.close_menu_button');


burger_button.addEventListener('click', function(){
  burger_button.classList.add('hide_burger');
  main_nav.classList.remove('hide_main_nav');
});

close_menu_button.addEventListener('click', function(){
  burger_button.classList.remove('hide_burger');
  main_nav.classList.add('hide_main_nav');
});


window.onload = function() {
//image resizer
  setMaxHeightByWrapper ("projects_carousel_img_wrapper", "projects_carousel_img");
  setMaxHeightByWrapper ("main_carousel_img_wrapper", "main_carousel_img_wrapper_img");

/// click out
  if (document.body.clientWidth < 1600) {
    burger_button.classList.remove('hide_burger');
    main_nav.classList.add('hide_main_nav');

    $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
        let block = $(".main_nav"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
        if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
            && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
          burger_button.classList.remove('hide_burger');
          main_nav.classList.add('hide_main_nav');
        }
    });
  }

};

var show_thank = document.querySelector('.show_thank');
var thank_popup = document.querySelector('.thank_popup');
var thank_popup_wrapper = document.querySelector('.thank_popup_wrapper');
var close_thank = document.getElementsByClassName('close_thank');

show_thank.onclick = function(e){
  thank_popup.classList.remove('d-none');
}

for (var i = 0; i < close_thank.length; i++) {
  close_thank[i].addEventListener('click', function(){
    close_thank_popup();
  });
}

function close_thank_popup(){
  thank_popup.classList.add('d-none');
}

$(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
    let block = $(".thank_popup_wrapper"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
    if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
        && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
        close_thank_popup();
    }
});