$(function(){
/// A
    $('header nav li').mouseover(function(){
        $(this).css("background","#000")
        $(this).children('a').css("color","#FFF");
    });
    $('header nav li').mouseout(function(){
        $(this).css("background","none");
        $(this).children('a').css("color","#000");
    });
    
/// B    
    $('header nav li').click(function(){
        
        var idx=$(this).index();
        var ss =$('.content section').eq(idx).offset().top
        $('body,html').animate({
            scrollTop:ss
        })
    })
})

/// c
//next
$(function(){
    var swidth=$('.slidebanner').width()
    $('.next').click(function(){
            $('.slidebanner .on img').stop().animate({left:-swidth},500).parent().removeClass('on').next().addClass('on').children('img').css({"display":"block","left":swidth}).stop().animate({left:0},500)
        console.log($('.slidebanner li.on').index())
        
    var msg=$('.slidebanner .on').html()
        if(msg == undefined){
            $('.slidebanner li:first').addClass('on').children('img').css("left",swidth).stop().animate({left:0},500)
        }
    })
    
//prev    
    $('.prev').click(function() {
        $('.slidebanner .on img').stop().animate({left:swidth},500).parent().removeClass('on').prev().addClass('on').children('img').css({"display":"block","left":-swidth}).stop().animate({left:0},500)
    
    var msg=$('.slidebanner .on').html()
        if(msg == undefined){
            $('.slidebanner li:last').addClass('on').children('img').css("left",-swidth).stop().animate({left:0},500)
        }
    })
//random auto
    var index=Math.floor(Math.random()*$('.slidebanner li').length);
        $('.slidebanner li').eq(index).addClass('on').siblings('li.on').removeClass('on')
            console.log(index)
            
    var interval=setInterval(function(){
        $('.next').trigger('click')},4500)    
        $('.slidebanner').hover(function(){
            clearInterval(interval)
        },function(){
            interval=setInterval(function() {
                $('.next').trigger('click')
            },4500)
        })

// D

    function fadeAuto(){
        $('body .e-type').append('<button class="next_2"></button>')
        $('.next_2').css("display","none")
    }fadeAuto()
    
    $('.next_2').click(function(){
            $('.fadebanner .on img').fadeOut(4800).parent().removeClass('on').next().addClass('on').children('img').fadeIn(4800)
            var on=$('.fadebanner .on').html()
        
        if(on == undefined){
            $('.fadebanner li:first').addClass('on').children('img').fadeIn(4800)
        }
    })
    var btn={
        next:$('.next_2').html('button')
    }
    var interval=setInterval(function() {
        $('.next_2').trigger('click')
    },4800)
    
    $('.fadebanner').hover(function() {
        clearInterval(interval)
    },function(){
        interval=setInterval(function() {
            $('.next_2').trigger('click')
        },4800)
    })
    
    $('.fadebanner li a').click(function(){
        $(this).next('img').fadeIn(1000).parent().addClass('on').siblings().removeClass('on').find('img').fadeOut()
        return false;
    })
})

// E
$(function() {
    $('.movie-view li a').click(function() {
        $(this).parent().addClass('on').siblings().removeClass()
            var url=$(this).attr('href')
            var video="https://www.youtube.com/embed/"+url+"?rel=0&amp;controls=0&amp;showinfo=0"
            $('.view iframe').attr('src',video)
            return false;
    })
})
// F
$(function() {
    $(window).scroll(function(){
        var scrollTop=$(window).scrollTop()
        $('.wing').stop().animate({top:scrollTop},500)
    })
})

// G
$(function() {
    function popOpen(conts){
        $('.btngroup').append('<div class="popupbox"></div>')
        $('.btngroup').children('.popupbox').load(conts);
    }
    $('[class^=eventBt]').click(function() {
        
    })
})