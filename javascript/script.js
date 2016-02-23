$(function(){
//AAA.하버.AAA
    $('header nav li').mouseover(function(){
        $(this).css("background","#000");
        $(this).children('a').css("color","#FFF");
        
    });
    $('header nav li').mouseout(function(){
        $(this).css("background","none");
        $(this).children('a').css("color","#000");
    });    
  

//BBB.스크롤.BBB
    $("header nav li").click(function(){

        var idx = $(this).index();
        var ss = $('.content section').eq(idx).offset().top
        $('body,html').animate({
            scrollTop:ss
        })
    })
//CCC.슬라이드베너.CCC
//***next***
    var swidth = $('.slidebanner').width()
        $('.slidebanner .next').click(function(){
            $('.slidebanner .on img').stop().animate({left:-swidth},500).parent().removeClass('on').next().addClass('on').children('img').css({"display":"block","left":swidth}).stop().animate({left:0},500)
        // console.log($('.slidebanner li.on').index())

    var msg = $('.slidebanner .on').html()
        if(msg == undefined){
            $('.slidebanner li:first').addClass('on').children('img').css("left",swidth).stop().animate({left:0},500)
            
        }
    })
    
//***prev***
        $('.slidebanner .prev').click(function(){
            $('.slidebanner .on img').stop().animate({left:swidth},500).parent().removeClass('on').prev().addClass('on').children('img').css({"display":"block","left":-swidth}).stop().animate({left:0},500)
        console.log($('.slidebanner li.on').index())

    var msg = $('.slidebanner .on').html()
        if(msg == undefined){
            $('.slidebanner li:last').addClass('on').children('img').css({"display" : "block","left" : -swidth}).stop().animate({left:0},500)
        }
        
    })
    
//***이미지 랜덤 호출***
    var index = Math.floor(Math.random() * $('.slidebanner li').length);
    console.log(index)
    $('.slidebanner li').eq(index).addClass('on').siblings('li.on').removeClass('on')
    
//***이미지 자동넘김***    
    var interval=setInterval(function(){
        $('.next').trigger('click')
    },1000)
    
//***마우스오버시 베너 스탑***    
    $('.slidebanner').hover(function(){
        clearInterval(interval)
    },function(){
        interval=setInterval(function(){
            $('.next').trigger('click')
        },1000)
    })
    
    
    

//A태그 클릭
    $('.slidebanner li a').click(function(){
        var num=$('.slidebanner li.on').index()
        var idx=$(this).parent().index();
        
        if(idx>num){
            $('.slidebanner li.on img').animate({
                left:-swidth
            }).parent().removeClass('on');
            
            $('.slidebanner li').eq(idx).addClass('on').children('img').css({
                display:"block",
                left:swidth
            }).animate({left:0})
        }
        
        else if(idx<num){
            $('.slidebanner li.on img').animate({left:swidth}).parent().removeClass('on')
            $('.slidebanner li').eq(idx).addClass('on').children('img').css({display:"block",left:-swidth}).animate({left:0})
        }
        console.log($('.slidebanner li.on').index())
    })
//DDD.fadebanner.DDD

//***이미지 페이드 자동넘김***
    function fadeAuto(){
            $('body .e-type').append('<button class="next_2"></button>')
            $('.next_2').css("display","none")
    }fadeAuto()
    
    $('.next_2').click(function() {
            $('.fadebanner .on img').fadeOut(1000).parent().removeClass('on').next().addClass('on').children('img').fadeIn(1000)
            var on = $('.fadebanner .on').html()
            
        if(on == undefined){
            $('.fadebanner li:first').addClass('on').children('img').fadeIn(1000)
        }
    })
    var btn = {
        next:$('.next_2').html('button')
    }
    var interval=setInterval(function(){
        $('.next_2').trigger('click')
    },1000)
        
    
    
//***마우스오버시 페이드베너 스탑***    
    $('.fadebanner').hover(function(){
        clearInterval(interval)
    },function(){
        interval=setInterval(function(){
            $('.next_2').trigger('click')
        },1000)
    })

// 페이드배너클릭이벤트    
    $('.fadebanner li a').click(function(){
        $(this).next('img').fadeIn(1000).parent().addClass('on').siblings().removeClass('on').find('img').fadeOut()
        return false;
    })

//EEE.유투부영상 IFRAME.EEE
// ***영상 가져오기
    $('.movie-view ul li a').click(function(){
        $(this).parent().addClass('on').siblings().removeClass()
                var url = $(this).attr('href')
                var video = "https://www.youtube.com/embed/"+url+"?rel=0&amp;controls=0&amp;showinfo=0"
                $('.view iframe').attr('src',video)
                
                return false;
                
            })
            
            
// FFF.윙베너.FFF

        $(window).scroll(function(){
        var scrollTop = $(window).scrollTop()
            $('.wing').stop().animate({top:scrollTop},200)
        
        })
        
// GGG.팝업.GGG
     //블라인드
     $(function(){
       function blind(){
           $('body').append('<div class="blind"></div>');
           $('.blind').fadeTo("500","0.6");
       }
       
       function popOpen(conts){
           $('.content').append('<div class="popbox"></div>')
           $('.content').children('.popbox').load(conts);
       }
       
       $('[class^=pop-]').click(function(){
           blind();
          
           var cont = $(this).attr('class');
           var conts = cont.split('-');
           var fullUrl = conts[2]+".html ."+conts[1];
           popOpen(fullUrl)
           
        })
        
        $('.content').on('click','.close',function(){
                $('.popbox').fadeOut(function(){
                  $(this).remove();
                })
                $('.blind').fadeOut(function(){
                  $(this).remove();
                })
    }) 
            
            

})
})