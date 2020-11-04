// all general js hear //

// loader
var preloader = document.getElementById('loading');
function myFunction() {
  preloader.style.display = 'none';
}


// Sticky Header
	$(window).scroll(function() {
		if ($(window).width() > 991){ 
			if ($(this).scrollTop() > 500){  
				$('body').addClass("fixed");
			}
			else{
				$('body').removeClass("fixed");
			}
		}
	});

// back to top button
var btn = $("#topbox");

$(window).scroll(function () {
   if ($(this).scrollTop() > 500) {
       btn.addClass("show");
   } else {
       btn.removeClass("show");
   } 
});

btn.on("click" , function(e) {
   e.preventDefault();
   $("html,body").animate({scrollTop: 0}, "300"); 
});


// search toggle
let searchToggle = document.querySelector(".search_toggle");
let searchForm = document.querySelector(".search_form");

searchToggle.addEventListener("click", showSearch);

function showSearch() {
  searchForm.classList.toggle("active");
  searchToggle.classList.toggle("active");

  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "menu");
  navWrapper.classList.remove("active");

  if (searchToggle.classList.contains("active")) {
    searchToggle.setAttribute("aria-label", "Close search");
  } else {
    searchToggle.setAttribute("aria-label", "Open search");
  }
}


// menu navigation 
$(document).ready(function() {
  $("#cssmenu").menumaker({
      title: "Menu",
      format: "multitoggle"
  });
});

(function($) {

  $.fn.menumaker = function(options) {
      
      var cssmenu = $(this), settings = $.extend({
        title: "Menu",
        format: "dropdown",
        breakpoint: 768,
        sticky: false
      }, options);

      return this.each(function() {
        cssmenu.find('li ul').parent().addClass('has-sub');
        if (settings.format != 'select') {
          cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
          $(this).find("#menu-button").on('click', function(){
            $(this).toggleClass('menu-opened');
            var mainmenu = $(this).next('ul');
            if (mainmenu.hasClass('open')) { 
              mainmenu.hide().removeClass('open');
            }
            else {
              mainmenu.show().addClass('open');
              if (settings.format === "dropdown") {
                mainmenu.find('ul').show();
              }
            }
          });

          multiTg = function() {
            cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
            cssmenu.find('.submenu-button').on('click', function() {
              $(this).toggleClass('submenu-opened');
              if ($(this).siblings('ul').hasClass('open')) {
                $(this).siblings('ul').removeClass('open').hide();
              }
              else {
                $(this).siblings('ul').addClass('open').show();
              }
            });
          };

          if (settings.format === 'multitoggle') multiTg();
          else cssmenu.addClass('dropdown');
        }

        else if (settings.format === 'select')
        {
          cssmenu.append('<select style="width: 100%"/>').addClass('select-list');
          var selectList = cssmenu.find('select');
          selectList.append('<option>' + settings.title + '</option>', {
                                                         "selected": "selected",
                                                         "value": ""});
          cssmenu.find('a').each(function() {
            var element = $(this), indentation = "";
            for (i = 1; i < element.parents('ul').length; i++)
            {
              indentation += '-';
            }
            selectList.append('<option value="' + $(this).attr('href') + '">' + indentation + element.text() + '</option');
          });
          selectList.on('change', function() {
            window.location = $(this).find("option:selected").val();
          });
        }

        if (settings.sticky === true) cssmenu.css('position', 'fixed');

        resizeFix = function() {
          if ($(window).width() > settings.breakpoint) {
            cssmenu.find('ul').show();
            cssmenu.removeClass('small-screen');
            if (settings.format === 'select') {
              cssmenu.find('select').hide();
            }
            else {
              cssmenu.find("#menu-button").removeClass("menu-opened");
            }
          }

          if ($(window).width() <= settings.breakpoint && !cssmenu.hasClass("small-screen")) {
            cssmenu.find('ul').hide().removeClass('open');
            cssmenu.addClass('small-screen');
            if (settings.format === 'select') {
              cssmenu.find('select').show();
            }
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };
})(jQuery);


// banner slider
$(document).ready(function() {
    $(".banner_slider").owlCarousel({
      autoplay: true,
      items: 1,
      loop: true,
      nav: true,
      navText: ["<i class='fas fa-angle-double-left'></i>","<i class='fas fa-angle-double-right'></i>"],
      responsive:{
        0:{
            nav:false,
            dots:false
        },
        768:{            
            
        },
        991:{
            
        }
    }
    });
});


// top products slider
$(document).ready(function () {
    $(".top_prod").owlCarousel({
        autoplay: true,
        items: 4,
        loop: true,
        autoplayHoverPause:true,
        responsive:{
          0:{
              items:1
          },
          479:{            
              items:2
          },
          768:{
              items:3
          },
          991:{
              
          }
      }        
    });
});


// Value js
$('.quantity').each(function () {
    var $this = $(this);
    var $input = $this.find('#number');
    $this.on('click', '#increase', function () {
        var val = parseInt($input.val());
        $input.val(++val);
    }).on('click', '#decrease', function () {
        var val = parseInt($input.val());
        $input.val(--val);
    });
});


// promotion slider
$(document).ready(function () {
    $(".promo_left_slider").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',        
        smartSpeed: 450        
    });
});


// special products slider
$(document).ready(function () {
    $(".special_prod").owlCarousel({
        autoplay: true,
        items: 4,
        loop: true,
        autoplayHoverPause: true,
        responsive:{
          0:{
              items:1
          },
          479:{            
              items:2
          },
          768:{
              items:3
          },
          991:{
              
          }
      } 
    });
});


// new products slider
$(document).ready(function () {
    $(".new_prod").owlCarousel({
        autoplay: true,
        items: 4,
        loop: true,
        autoplayHoverPause: true,
        responsive:{
          0:{
              items:1
          },
          479:{            
              items:2
          },
          768:{
              items:3
          },
          991:{
              
          }
      } 
    });
});


// top products slider
$(document).ready(function () {
    $(".our_testi").owlCarousel({
        items:1,
        loop:true,
        autoplay:true        
    });
});


$(window).on('load', function(){
    $.instagramFeed({
        'username': 'beard.n.ink',
        'container': ".instagram",
        'display_profile': false,
        'display_biography': false,
        'display_gallery': true,
        'get_raw_json': false,
        'callback': null,
        'styling': true,
        'items': 12,
        'items_per_row': 6,
        'margin': 0
    });
});


$(window).on('load', function(){
    $.instagramFeed({
        'username': 'beard.n.ink',
        'container': ".instagram_blog",
        'display_profile': false,
        'display_biography': false,
        'display_gallery': true,
        'get_raw_json': false,
        'callback': null,
        'styling': true,
        'items': 12,
        'items_per_row': 2,
        'margin': 2
    });
});


$(document).ready(function () {
    $(".part_inner").owlCarousel({
        items: 5,
        loop: true,
        nav: true,
        dots: false,
        navText: ['',''],
        responsive:{
          0:{
              items:1,
              autoplay:true
          },
          479:{            
              items:2,
              autoplay:true
          },
          768:{
              items:3,
              autoplay:true
          },
          991:{
              items:5
          }
      }
    });
});


