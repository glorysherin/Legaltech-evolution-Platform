 var btn = $('#backtop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
 
$(document).ready(function () {
    $('.nav a').each(function(){
    if(location.href === this.href){
    $(this).addClass('selected');
    $(this).parent("li").parent().parent("li").addClass('selected');
    $(this).parent().parent().find("dropdown").addClass("DDD");
    $('.nav a').not(this).addClass('none');
    return false;
    }
    });	 
	$("select").attr("title", "Press F4 to open dropdown");
    $(".filter-box td, table td, table th").attr("tabindex","0");
    $(".form-group span").attr("tabindex","0");
    $(".filter-box td label").attr("tabindex","0");
    $(".dsize, .ndate,.pagination span").attr("tabindex","0"); 
	$(".sitemap ul").removeClass("nav navbar-nav");
    $(".sitemap li").removeClass("dropdown mega-dropdown menu-heading");
    $(".sitemap li").removeClass("dropdown-submenu col-md-4 col-md-3");
    $(".sitemap li a").removeClass("dropdown-toggle");
    $(".sitemap ul ul").removeClass("dropdown-menu mega-dropdown-menu");
    $(".sitemap ul").removeAttr("id", "menu");
	$(".dropdown-toggle").attr("href", "javascript:void(0)"); 
	$(".buttons .controls").attr("href", "javascript:void(0)"); 
	$(".pwdarea .dropdown-toggle").click(function(){
	$(".pwdarea ul.dropdown-menu").toggleClass("show");
	});
	$(".navbar-header .navbar-toggle").click(function(){
	$(".navbar-collapse").toggleClass("show");
	});
	$("#s1").click(function(){
if( $('#searchinput').val().length === 0 ) {
$('#searchinput').addClass('warning');
return false; // Add this line
}
}); 
	$(".news .toggle").click(function(){
	$("#vticker ul").toggleClass("scroll");
	});
	
	$(".news .toggle2").click(function(){
	$("#tender ul").toggleClass("scroll");
	});
 
    if ($.cookie("css")) {
        $("#theme").attr("href", $.cookie("css"));
    }
    $(".defTheme").click(function () {
        $("#theme").attr("href", $(this).attr('href'));
        $.cookie("css", $(this).attr('href'));
        return false;
    });
    $(".hi-btn").click(function () {
        var cfrm = confirm("Do you want to change website language in Hindi?");
        if (cfrm == true) {
            window.location(this.window.url + "/hi");
            return true;
        }
        else if (cfrm == false) {
            return false;
        }
        //alert(crm);
    });

    var comp = new RegExp(location.host);
    $('a').each(function () {
        if (comp.test($(this).attr('href'))) {
            // a link that contains the current host 
            $(this).addClass('local');
        }
        else {
            // a link that does not contain the current host
            $(this).addClass('external');
        }
    });

    $('a').filter(function () {
        return this.hostname && this.hostname !== location.hostname;
    })
            .click(function () {
                $(this).attr('target', '_blank');
                var x = window.confirm('You are being redirected to an external website which will open in a new tab.');
                var val = false;
                if (x)
                    val = true;
                else
                    val = false;
                return val;
            });
    var flag = 0;
    $(".submenu-indicator").click(function (e) {
        e.preventDefault();
        if (flag == 0) { // alert(flag);
            //$(this).parents().prev('a.external').addClass('submenu-indicator-minus');
            $(this).parent().before().addClass('submenu-indicator-minus');
            $(this).parent().next().css('display', 'block');
            // $(".submenu").css('display', 'block');
            flag++;
        } else {
            $(this).parent().before().removeClass('submenu-indicator-minus');
            $(this).parent().next().css('display', 'none');
            flag = 0;
        }
    });


});

//$(window).scroll(function () {
//    var height = $(window).scrollTop();
//    if (height > 132) {
//        $(".top-nav").addClass("menuFxd");
//    }
//    if (height < 132) {
//        $(".top-nav").removeClass("menuFxd");
//    }
//
//});
 

//$(".jobsearch").on("keyup", function() {
//  var filter = $(this).val(), count = 0;
//        $(".element-holder .element").each(function () {
//
//            var filter = $('.element').attr('data-name');
//            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
//                //alert($(this).text());
//                $(this).show();
//            } else {
//                $(this).fadeOut();
//                
//                count++;
//            }
//        });
//});

//    $(document).ready(function () { 
//			$('.simplefilter li').click(function() {
//			$('.simplefilter li').removeClass('active');
//			$(this).addClass('active');
//		    });
//            //Initialize filterizr with default options
//            $('.filtr-container').filterizr();
//        });

//jQuery(document).ready(function() {
//var btns = "";
//var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//var letterArray = letters.split("");
//for(var i = 0; i < 27; i++){
//    var letter = letterArray.shift();
//    btns += '<button onclick="alert(\''+letter+'\');">'+letter+'</button>';
//    
//}
//});

$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#iimjammu-list'), false);
});


$('a.hellotest').click(function(e)
{
    
   e.preventDefault();
});

     $(window).load(function() {
		
	//	$("div").delegate( "form", "load", function() {
        $('#edit-name').val('');
		$('#edit-mail').val('');
		
    });
	
$(document).ready(function() {
$('a').each(function(){
if(location.href === this.href){
$(this).addClass('selected');
$('a').not(this).addClass('none');
return false;
}
});
});
	


