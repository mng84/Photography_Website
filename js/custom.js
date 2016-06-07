$(function () {

//Menu button animation    
    $(".menu_btn").on("click", function () {
        $(".main_nav").toggleClass("btn_active");
        $(".container").toggleClass("container_active");
    });

    
//Mobile menu btn
    $(".mobile_btn").on("click", function () {
        $(".main_nav").toggleClass("mobile_active");
    });

    
//Smooth scroll to links
    $("a").on("click", function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000);
        return false;
    });

    
//Models animate in
    $(window).on("scroll", function () {
        var wScroll = $(this).scrollTop();
        if (wScroll > $(".photography_box").offset().top - ($(window).height() / 1.2)) {
            $('.photography_box').each(function (i) {
                setTimeout(function () {
                    $(".photography_box").eq(i).addClass("photography_box_active");
                }, 150 * (i + 1));
            });
        }
    });

    
//Mobile menu appears when the window resizes
    $(".mobile_btn").on("click", function () {
        $(".main_nav").toggleClass("mobile_btn_active")
    });

    
//Button click to scroll to top
    $(".scrollToTopBtn").on("click", function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

});